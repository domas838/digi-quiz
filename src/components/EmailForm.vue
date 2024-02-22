<script setup>
import { store } from '../store'
import {computed, onMounted} from 'vue'
import axios from 'axios'
import {event as gaEvent} from "vue-gtag";
import {changeUrlPath, getLocaleFromURL} from "../helpers";
import {useI18n} from "vue-i18n";
import QuizLogo from "@/components/QuizLogo.vue";
import Heading from "@/components/Typography/Heading.vue";
import Label from "@/components/Typography/Label.vue";

const getTimetableParams = () => {
  const locale = getLocaleFromURL(window.location)

  const daysMap = {
    br: {
      Seg: 'Segunda',
      Ter: 'Terça',
      Qua: 'Quarta',
      Qui: 'Quinta',
      Sex: 'Sexta',
      Sab: 'Sábado',
      Dom: 'Domingo',
    },
    sa: {
      Mon: 'Monday',
      Tue: 'Tuesday',
      Wed: 'Wednesday',
      Thu: 'Thursday',
      Fri: 'Friday',
      Sat: 'Saturday',
      Sun: 'Sunday',
    }
  };

  const groupBy = (array, getKey) => {
    return array.reduce((result, item) => {
      const key = getKey(item);
      result[key] = result[key] || [];
      result[key].push(item);
      return result;
    }, {});
  };

  const groupedPreferredTimes = Object.assign(
      {},
      groupBy(store.preferredTimeWorkdays, ({ day }) => day),
      groupBy(store.preferredTimeWeekends, ({ day }) => day)
  );

  let timetableParams = []

  const daysOfWeek = Object.keys(daysMap[locale]);

  daysOfWeek.forEach(weekDay => {
    if (groupedPreferredTimes[weekDay] && groupedPreferredTimes[weekDay][0]) {
      timetableParams.push({
        [timetableParams.length > 0 ? 'dayTwo' : 'dayOne']: daysMap[locale][groupedPreferredTimes[weekDay][0].day],
        [timetableParams.length > 0 ? 'dayTwoTime' : 'dayOneTime']: `${groupedPreferredTimes[weekDay][0].from} - ${groupedPreferredTimes[weekDay][0].to} ${groupedPreferredTimes[weekDay][0].dayPeriod}`
      })
    }

    if (timetableParams.length === 2) {
      return timetableParams.reduce((acc, obj) => ({ ...acc, ...obj }), {});
    }
  })

  return timetableParams.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}

const decorateUrlWithUTMParams = (url) => {
  const currentUrl = window.location.href;
  const queryString = (currentUrl.split('?')[1] || '');
  const params = Object.fromEntries(new URLSearchParams(queryString).entries());
  const existingUtmParams = Object.fromEntries(Object.entries(params).filter(([key]) => key.startsWith('utm_')));

  if (url && Object.keys(existingUtmParams).length > 0) {
    const separator = url.includes('?') ? '&' : '?';
    url = `${url}${separator}${new URLSearchParams(existingUtmParams)}`;
  }

  return url;
}

const decorateUrlWithSubjectParams = (url) => {
  if (! (store.quizAnswers['subjects'])) {
    return url;
  }

  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}subjects=${store.quizAnswers['subjects']}`;
}

const decorateUrlWithPlan = (url) => {
  if (! store.quizAnswers['subjects']) {
    return url;
  }

  const selectedSubjectsArray = store.quizAnswers['subjects'].split(',');
  const selectedSubjectsLength = selectedSubjectsArray.length;

  let plan = '';

  switch (selectedSubjectsLength) {
    case 1:
      plan = 'OneSubjectPlan' ;
      break;
    case 2:
      plan = 'TwoSubjectsPlan';
      break
    default:
      plan = 'AllSubjectsPlan';
      break;
  }

  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}plan=${plan}`;
}

const resolveResultsPage = () => {
  const timetableObject = getTimetableParams();
  
  // Assuming 'store' is a valid object containing quiz answers
  const gradeBefore = encodeURIComponent(store.quizAnswers['currentMark']);
  const gradeAfter = encodeURIComponent(store.quizAnswers['targetMark']);
  const state = encodeURIComponent(store.quizAnswers['state']);
  const grade = encodeURIComponent(store.quizAnswers['grade']);
  const goal = store.quizAnswers['goal'];
  let timePreference;

  let suffix = '';
  switch (store.flow) {
    case 'paid-trial':
    case 'paid-trial-2':
      suffix = '-paid-trial';
      break;
    case 'pricing':
    case 'pricing-2':
      suffix = '-pricing';
      break;
    case 'checkout':
      suffix = '-checkout';
      break;
    case 'cashback':
      suffix = '-5-weeks-streak'
      break;
  }

  let framerPath = 'results-strugglers' + suffix;
  switch (goal) {
    case 'Improve Grades and GPA':
      framerPath = 'results-strugglers' + suffix;
      break;
    case 'Maintain High Grades':
      framerPath = 'results-maintainers' + suffix;
      break;
    case 'Test Prep':
      framerPath = 'results-strugglers' + suffix
      break;
    case 'Prepare for Contest':
      framerPath = 'results-excellers' + suffix
      break;
    case 'To excel and achieve top performance':
      framerPath = 'results-excellers' + suffix
      break;
  }

  if (Object.keys(timetableObject).length !== 0) {
    const dayOne = encodeURIComponent(timetableObject.dayOne)
    const dayTwo = encodeURIComponent(timetableObject.dayTwo)
    const dayOneTime = encodeURIComponent(timetableObject.dayOneTime);
    const dayTwoTime = encodeURIComponent(timetableObject.dayTwoTime);
    timePreference = `dayOne=${dayOne}&dayTwo=${dayTwo}&dayOneTime=${dayOneTime}&dayTwoTime=${dayTwoTime}`;
  }

  const host = 'memby.org';
  const locale = getLocaleFromURL(window.location)

  let url = `https://${host}/${locale}/${framerPath}?grade=${grade}&gradeBefore=${gradeBefore}&gradeAfter=${gradeAfter}&state=${state}&${timePreference}`;
  url = decorateUrlWithSubjectParams(url)
  url = decorateUrlWithUTMParams(url);
  url = decorateUrlWithPlan(url);

  store.resultUrl = url

  klaviyoRequestHandler()

  // Redirect to the constructed URL
  window.location.href = url;
}
const submitChildEmail = (event) => {
  event.preventDefault()
  store.isChildEmailEntered = true
  store.step += 1
  gaEvent('lead_generated');
  resolveResultsPage()
}

const emailIsValid = (email) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true
  } else {
    return false
  }
}
const cancelEmailHandler = () => {
  store.step += 1
  store.showRecomendations = true
  klaviyoRequestHandler()
}
const isChildProceedDisabled = computed(() => {
  if (!store.childEmail || !store.aggreeWithPrivacy || !emailIsValid(store.childEmail)) {
    return true
  } else {
    return false
  }
})
const isParentProceedDisabled = computed(() => {
  if (!store.parentEmail || !store.aggreeWithPrivacy || !emailIsValid(store.parentEmail)) {
    return true
  } else {
    return false
  }
})

const submitHandler = (event) => {
  event.preventDefault()
  store.step += 1
  gaEvent('lead_generated');
  resolveResultsPage()
}
const submitChildAndParentHandler = (event) => {
  event.preventDefault()
  store.step += 1
  gaEvent('lead_generated');
  resolveResultsPage();
}

const klaviyoRequestHandler = () => {
  if (store.childEmail === '' && store.parentEmail === '') {
    return;
  }

  const options = {
    method: 'POST',
    url: 'https://app.digiklase.lt/api/klaviyo/create',
    headers: {
      'content-type': 'application/json'
    },
    data: {
      locale: store.lang,
      role: store.childEmail ? 'student' : 'parent',
      payload: {
        data: {
          type: 'profile',
          attributes: {
            email: store.childEmail ? store.childEmail : store.parentEmail,
            properties: {
              ResultURL: store.resultUrl,
              Goal: store.quizAnswers['goal'],
              State: store.quizAnswers['state'],
              Class: store.quizAnswers['grade'],
              CurrentMark: store.quizAnswers['currentMark'],
              TargetMark: store.quizAnswers['targetMark'],
            }
          }
        }
      }
    }
  }

  axios.request(options).catch(function (error) {
    console.error(error)
  })
}

onMounted(() => {
  gaEvent('quiz_email_form');
  if (['trial', 'paid-trial-2', 'pricing-2'].includes(store.flow) && document.getElementById('continue-btn')) {
    document.getElementById('continue-btn').disabled = false
    document.getElementById('continue-btn').click()
  } else {
    changeUrlPath('/' + store.respondent + '/email')
  }
});

const { t } = useI18n();

let buttonText = t('SeePersonalisedPlan');
switch (store.flow) {
  case 'trial':
    buttonText = t('ContinueWithTrial');
    break;
  case 'paid-trial':
    buttonText = t('ContinueWithPaidTrial');
    break;
}

</script>
<template>
  <button
      class="close-email-form"
      @click="cancelEmailHandler"
      v-if="store.respondent === 'child' && store.isChildEmailEntered"
  >
    <img src="../assets/images/close-x.svg" width="48" height="48" />
  </button>
  <QuizLogo tw="mx-auto" />
  <Heading level="1" tw="mx-auto pb-5" v-if="store.respondent === 'child' && !store.isChildEmailEntered">{{ $t('EmailFormH1') }}</Heading>
  <p v-if="store.respondent === 'child' && !store.isChildEmailEntered">{{ $t('EmailFormWhereToSentResults') }}</p>
  <Heading level="1" tw="mx-auto pb-5" v-if="store.respondent === 'child' && store.isChildEmailEntered" v-html="$t('EmailFormShareResults')"></Heading>
  <Heading level="1" tw="mx-auto pb-5" v-if="store.respondent === 'parent'">{{ $t('EmailFormWeWillRecommendPlan') }}</Heading>
  <Label tw="text-center mb-3 md:mb-5" v-if="store.respondent === 'parent'">{{ $t('EmailFormWhereToSentResults') }}</Label>
  <div v-if="store.respondent === 'child'">
    <input
        v-if="!store.isChildEmailEntered"
        class="digi-input"
        type="email"
        name="child-email"
        id="child-email"
        :placeholder="$t('EmailFormYourEmail')"
        v-model="store.childEmail"
        style="margin-bottom: 1rem"
    />
    <input
        v-if="store.isChildEmailEntered"
        class="digi-input"
        type="email"
        name="parent-email"
        id="parent-email"
        :placeholder="$t('EmailFormYourParentEmail')"
        v-model="store.parentEmail"
        style="margin-bottom: 1rem"
    />
    <div class="privacy-notice">
      <img src="../assets/images/Lock.svg" alt="Lock" />
      <p>
        {{ $t('EmailFormPrivacyNotice') }}
      </p>
    </div>
    <div class="aggree-row" v-if="!store.isChildEmailEntered">
      <input
          type="checkbox"
          name="privacy"
          id="privacy"
          :value="$t('EmailFormPrivacyValue')"
          v-model="store.aggreeWithPrivacy"
      />
      <img src="../assets/images/checkbox.svg" alt="" class="custom-checkbox" />
      <img
          src="../assets/images/checkbox-checked.svg"
          alt=""
          class="custom-checkbox-checked"
      />
      <label for="privacy" class="aggree-label" v-html="$t('EmailPrivacyLabel')"></label
      >
    </div>
    <div class="aggree-row" v-if="!store.isChildEmailEntered">
      <input
          type="checkbox"
          name="age"
          id="age"
          :value="$t('EmailForm13YearsValue')"
          v-model="store.olderThanThirteen"
      />
      <img src="../assets/images/checkbox.svg" alt="" class="custom-checkbox" />
      <img
          src="../assets/images/checkbox-checked.svg"
          alt=""
          class="custom-checkbox-checked"
      />
      <label for="age" class="aggree-label">{{ $t('EmailForm13YearsLabel') }}</label>
    </div>
    <div class="aggree-row" v-if="!store.isChildEmailEntered">
      <p>{{ $t('EmailFormNoticeIfLessThan13Years') }}</p>
    </div>
  </div>

  <div v-if="store.respondent === 'parent'">
    <input
        class="digi-input"
        type="email"
        name="parent-email"
        id="parent-email"
        :placeholder="$t('EmailFormYourEmail')"
        v-model="store.parentEmail"
        style="margin-bottom: 1rem"
    />
  </div>

  <div class="privacy-notice">
    <img src="../assets/images/Lock.svg" alt="Lock" />
    <p>
      {{ $t('EmailFormPrivacyNotice') }}
    </p>
  </div>

  <div class="aggree-row" v-if="!store.isChildEmailEntered">
    <input
        type="checkbox"
        name="age"
        id="age"
        :value="$t('EmailForm13YearsValue')"
        v-model="store.olderThanThirteen"
    />
    <img src="../assets/images/checkbox.svg" alt="" class="custom-checkbox" />
    <img
        src="../assets/images/checkbox-checked.svg"
        alt=""
        class="custom-checkbox-checked"
    />
    <label for="age" class="aggree-label">{{ $t('EmailForm13YearsLabel') }}</label>
  </div>

  <div class="aggree-row" v-if="store.respondent === 'parent'">
    <input
        type="checkbox"
        name="privacy"
        id="privacy"
        :value="$t('EmailFormPrivacyValue')"
        v-model="store.aggreeWithPrivacy"
    />
    <img src="../assets/images/checkbox.svg" alt="" class="custom-checkbox" />
    <img src="../assets/images/checkbox-checked.svg" alt="" class="custom-checkbox-checked" />
    <label for="privacy" class="aggree-label" v-html="$t('EmailPrivacyLabel')"></label>
  </div>

  <button
      v-if="store.respondent === 'child' && !store.isChildEmailEntered"
      type="submit"
      id="continue-btn"
      class="benefit-btn mx-auto mb-12"
      style="margin-top: 2rem"
      @click="submitChildEmail($event)"
      :disabled="isChildProceedDisabled"
  >
    {{ buttonText }} <img src="../assets/images/arrow-right.svg" alt="" />
  </button>

  <button
      v-if="store.respondent === 'parent'"
      type="submit"
      id="continue-btn"
      class="benefit-btn mx-auto mb-12"
      style="margin-top: 2rem"
      @click="submitHandler($event)"
      :disabled="isParentProceedDisabled"
  >
    {{ buttonText }} <img src="../assets/images/arrow-right.svg" alt="" />
  </button>
  <div class="submit-container" v-if="store.respondent === 'child' && store.isChildEmailEntered">
    <button
        type="submit"
        id="continue-btn"
        class="benefit-btn mx-auto mb-12"
        @click="submitChildAndParentHandler($event)"
        :disabled="isParentProceedDisabled"
    >
      {{ buttonText }} <img src="../assets/images/arrow-right.svg" alt="" />
    </button>
    <a href="javascript:void(0)" v-if="store.lang === 'LT'" @click="cancelEmailHandler">{{ $t('Skip') }}</a>
  </div>

  <!--    <ProgramsLoader />-->
</template>

<style scoped>
h1 {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
}
p {
  margin-bottom: 32px;
  text-align: center;
  font-size: 20px;
}
h1 span {
  color: #4a74eb;
}
.privacy-notice {
  display: flex;
  align-items: flex-start;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.privacy-notice img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.privacy-notice p {
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  text-align: left;
  margin-bottom: 10px;
}
.submit-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}
.submit-container button {
  margin: 0;
}
.submit-container a {
  color: #4a74eb;
  min-width: 155px;
  display: flex;
  justify-content: center;
}
.submit-container a:hover {
  text-decoration: none;
}
.close-email-form {
  outline: none;
  border: none;
  background-color: transparent;
  position: absolute;
  right: -5%;
  top: -5%;
  cursor: pointer;
}
@media (max-width: 992px) {
  .close-email-form {
    right: 1rem;
    top: -4rem;
  }
}
@media (max-width: 768px) {
  .close-email-form {
    right: 1rem;
    top: -1rem;
  }
}
</style>
