<script setup>
import { store } from '../store'
import { computed, reactive } from 'vue'
import axios from 'axios'

const submitChildEmail = (event) => {
    event.preventDefault()
    store.isChildEmailEntered = true
    store.step += 1
    store.showRecomendations = true
    //klaviyoRequestHandler()
}
// Klaviyo API KEY
// pk_5a1e956f717f7efdc37cbdf9ca124b1986

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
    store.showRecomendations = true
    klaviyoRequestHandler()
}
const submitChildAndParentHandler = (event) => {
    event.preventDefault()
    store.step += 1
    store.showRecomendations = true
    klaviyoRequestHandler()
}
const localization = reactive({
    continue: 'Tęsti'
})
if (store.lang === 'LV') {
    localization.continue = 'Turpināt'
}
const klaviyoRequestHandler = () => {
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
                            Persona: store.selectedPersona,
                            Class: store.selectedClass,
                            Respondent: store.respondent,
                            ParentEmail: store.parentEmail,
                            ChildEmail: store.childEmail,
                            Goal: store.klaviyoGoal,
                            Motivation: store.klaviyoMotivation,
                            Intensity: store.klaviyoIntensity,
                            StudentLevel: store.klaviyoStudentLevel,
                            NeededLessons: store.klaviyoNeededLessons
                        }
                    }
                }
            }
        }
    }

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.error(error)
        })
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
    <h1 v-if="store.lang === 'LT' && store.respondent === 'child' && !store.isChildEmailEntered">
        Rekomenduosime planą, kuris padėtų pasiekti visų užsibrėžtų tikslų
    </h1>
    <h1 v-if="store.lang === 'LV' && store.respondent === 'child' && !store.isChildEmailEntered">
        Mēs esam izveidojuši personalizētu mācību programmu, kas palīdzēs Tev sasniegt savus mērķus.
    </h1>
    <p v-if="store.lang === 'LT' && store.respondent === 'child' && !store.isChildEmailEntered">
        Kur atsiųsti rezultatus?
    </p>
    <p v-if="store.lang === 'LV' && store.respondent === 'child' && !store.isChildEmailEntered">
        Kādu e-pastu Tu vēlies izmantot, lai pieslēgtos?
    </p>
    <h1 v-if="store.lang === 'LT' && store.respondent === 'child' && store.isChildEmailEntered">
        Pasidalink rezultatais su tėveliais/globėjais ir gauk <span>15 EUR nuolaidą</span> narystei
        įsigyti!
    </h1>
    <h1 v-if="store.lang === 'LV' && store.respondent === 'child' && store.isChildEmailEntered">
        Aizsūti vecākiem savus rezultātus un saņem <span>15 EUR atlaides</span> kodu abonementam!
    </h1>
    <h1 v-if="store.lang === 'LT' && store.respondent === 'parent'">
        Rekomenduosime planą, kuris padėtų pasiekti visų užsibrėžtų tikslų
    </h1>
    <h1 v-if="store.lang === 'LV' && store.respondent === 'parent'">
        Mēs esam izveidojuši personalizētu mācīšanās programmu, kura palīdzēs Jūsu bērnam sasniegt
        mērķus.
    </h1>
    <p v-if="store.lang === 'LT' && store.respondent === 'parent'">Kur atsiųsti rezultatus?</p>
    <p v-if="store.lang === 'LV' && store.respondent === 'parent'">
        Kādu e-pastu Jūs vēlaties izmantot, lai pieslēgtos?
    </p>
    <div v-if="store.lang === 'LT' && store.respondent === 'child'">
        <input
            v-if="!store.isChildEmailEntered"
            class="digi-input"
            type="email"
            name="child-email"
            id="child-email"
            placeholder="Tavo el. paštas"
            v-model="store.childEmail"
            style="margin-bottom: 1rem"
        />
        <input
            v-if="store.isChildEmailEntered"
            class="digi-input"
            type="email"
            name="parent-email"
            id="parent-email"
            placeholder="Tėvelio/globėjo el. paštas"
            v-model="store.parentEmail"
            style="margin-bottom: 1rem"
        />
        <div class="privacy-notice">
            <img src="../assets/images/Lock.svg" alt="Lock" />
            <p>
                Jūsų asmens duomenys pas mus yra saugūs. Beje, nesiunčiame šlamšto ir nesidaliname
                el. pašto adresais su trečiosiomis šalimis.
            </p>
        </div>
        <div class="aggree-row" v-if="!store.isChildEmailEntered">
            <input
                type="checkbox"
                name="privacy"
                id="privacy"
                value="Sutinku su privatumo politika ir naudojimosi taisyklėmis"
                v-model="store.aggreeWithPrivacy"
            />
            <img src="../assets/images/checkbox.svg" alt="" class="custom-checkbox" />
            <img
                src="../assets/images/checkbox-checked.svg"
                alt=""
                class="custom-checkbox-checked"
            />
            <label for="privacy" class="aggree-label"
                >Sutinku su
                <a href="https://digiklase.lt/privatumo-politika" target="_blank"
                    >privatumo politika ir naudojimosi taisyklėmis</a
                ></label
            >
        </div>
        <div class="aggree-row" v-if="!store.isChildEmailEntered">
            <input
                type="checkbox"
                name="age"
                id="age"
                value="Man jau yra 13 metų"
                v-model="store.olderThanThirteen"
            />
            <img src="../assets/images/checkbox.svg" alt="" class="custom-checkbox" />
            <img
                src="../assets/images/checkbox-checked.svg"
                alt=""
                class="custom-checkbox-checked"
            />
            <label for="age" class="aggree-label">Man jau yra 13 metų</label>
        </div>
        <div class="aggree-row" v-if="!store.isChildEmailEntered">
            <p>
                *Jeigu tau mažiau nei 13 m., paprašyk tėvelių/globėjų pagalbos užpildyti apklausą.
            </p>
        </div>
    </div>
    <div v-if="store.lang === 'LV' && store.respondent === 'child'">
        <input
            v-if="!store.isChildEmailEntered"
            class="digi-input"
            type="email"
            name="child-email"
            id="child-email"
            placeholder="E-pasts"
            v-model="store.childEmail"
            style="margin-bottom: 1rem"
        />
        <input
            v-if="store.isChildEmailEntered"
            class="digi-input"
            type="email"
            name="parent-email"
            id="parent-email"
            placeholder="Vecāku / aizbildņa e-pasts"
            v-model="store.parentEmail"
            style="margin-bottom: 1rem"
        />
        <div class="privacy-notice">
            <img src="../assets/images/Lock.svg" alt="Lock" />
            <p>
                Tavi personīgie dati ir drošībā ar mums. Kā arī mēs nesūtām SPAM ziņas un nedalāmies
                ar e-pastu adresēm, ar trešajām personām.
            </p>
        </div>
        <div class="aggree-row" v-if="!store.isChildEmailEntered">
            <input
                type="checkbox"
                name="privacy"
                id="privacy"
                value="Es piekrītu privātuma politikai un lietošanas noteikumiem"
                v-model="store.aggreeWithPrivacy"
            />
            <img src="../assets/images/checkbox.svg" alt="" class="custom-checkbox" />
            <img
                src="../assets/images/checkbox-checked.svg"
                alt=""
                class="custom-checkbox-checked"
            />
            <label for="privacy" class="aggree-label"
                >Es piekrītu
                <a href="https://memby.lv/privatuma-politika" target="_blank"
                    >privātuma politikai un lietošanas noteikumiem</a
                ></label
            >
        </div>
        <div class="aggree-row" v-if="!store.isChildEmailEntered">
            <input
                type="checkbox"
                name="age"
                id="age"
                value="Es esmu jau 13 gadus vecs"
                v-model="store.olderThanThirteen"
            />
            <img src="../assets/images/checkbox.svg" alt="" class="custom-checkbox" />
            <img
                src="../assets/images/checkbox-checked.svg"
                alt=""
                class="custom-checkbox-checked"
            />
            <label for="age" class="aggree-label">Es esmu jau 13 gadus vecs</label>
        </div>
        <div class="aggree-row" v-if="!store.isChildEmailEntered">
            <p>
                *Ja Tev ir zem 13 gadiem, palūdz saviem vecākiem/ aizbildnim palīdzēt Tev aizpildīt
                aptauju
            </p>
        </div>
    </div>
    <div v-if="store.lang === 'LT' && store.respondent === 'parent'">
        <input
            class="digi-input"
            type="email"
            name="parent-email"
            id="parent-email"
            placeholder="El. paštas"
            v-model="store.parentEmail"
            style="margin-bottom: 1rem"
        />
    </div>
    <div v-if="store.lang === 'LV' && store.respondent === 'parent'">
        <input
            class="digi-input"
            type="email"
            name="parent-email"
            id="parent-email"
            placeholder="E-pasts"
            v-model="store.parentEmail"
            style="margin-bottom: 1rem"
        />
    </div>
    <div class="aggree-row" v-if="store.lang === 'LT' && store.respondent === 'parent'">
        <input
            type="checkbox"
            name="privacy"
            id="privacy"
            value="Sutinku su privatumo politika ir naudojimosi taisyklėmis"
            v-model="store.aggreeWithPrivacy"
        />
        <img src="../assets/images/checkbox.svg" alt="" class="custom-checkbox" />
        <img src="../assets/images/checkbox-checked.svg" alt="" class="custom-checkbox-checked" />
        <label for="privacy" class="aggree-label"
            >Sutinku su
            <a href="https://digiklase.lt/privatumo-politika" target="_blank"
                >privatumo politika ir naudojimosi taisyklėmis</a
            ></label
        >
    </div>
    <div class="aggree-row" v-if="store.lang === 'LV' && store.respondent === 'parent'">
        <input
            type="checkbox"
            name="privacy"
            id="privacy"
            value="Sutinku su privatumo politika ir naudojimosi taisyklėmis"
            v-model="store.aggreeWithPrivacy"
        />
        <img src="../assets/images/checkbox.svg" alt="" class="custom-checkbox" />
        <img src="../assets/images/checkbox-checked.svg" alt="" class="custom-checkbox-checked" />
        <label for="privacy" class="aggree-label"
            >Es piekrītu
            <a href="https://memby.lv/privatuma-politika" target="_blank"
                >privātuma politikai un lietošanas noteikumiem.</a
            ></label
        >
    </div>
    <button
        v-if="store.respondent === 'child' && !store.isChildEmailEntered"
        type="submit"
        class="benefit-btn"
        style="margin-top: 2rem"
        @click="submitChildEmail($event)"
        :disabled="isChildProceedDisabled"
    >
        {{ localization.continue }} <img src="../assets/images/arrow-right.svg" alt="" />
    </button>

    <button
        v-if="store.respondent === 'parent'"
        type="submit"
        class="benefit-btn"
        style="margin-top: 2rem"
        @click="submitHandler($event)"
        :disabled="isParentProceedDisabled"
    >
        {{ localization.continue }} <img src="../assets/images/arrow-right.svg" alt="" />
    </button>
    <div class="submit-container" v-if="store.respondent === 'child' && store.isChildEmailEntered">
        <button
            type="submit"
            class="benefit-btn"
            @click="submitChildAndParentHandler($event)"
            :disabled="isParentProceedDisabled"
        >
            {{ localization.continue }} <img src="../assets/images/arrow-right.svg" alt="" />
        </button>
        <a href="javascript:void(0)" v-if="store.lang === 'LT'" @click="cancelEmailHandler"
            >Praleisti</a
        >
        <a href="javascript:void(0)" v-if="store.lang === 'LV'" @click="cancelEmailHandler"
            >Izlaist</a
        >
    </div>
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
