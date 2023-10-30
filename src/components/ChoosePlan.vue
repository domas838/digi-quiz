<script setup>
import Heading from "./Typography/Heading.vue";
import {BASE_APP_DOMAIN, SUBJECT_PLAN_MAP} from "../helpers";
import {store} from "../store";
import {useI18n} from "vue-i18n";

const { t } = useI18n();

const resolvePlan = (selectedSubjectsLength) => {
  switch (selectedSubjectsLength) {
    case 1:
      return 'OneSubjectPlan' ;
    case 2:
      return 'TwoSubjectsPlan';
    default:
      return 'AllSubjectsPlan';
  }
}

const planPeriods = {
  OneSubjectPlan: [
    {
      name: t('OneMonth'),
      price: 37.45,
      off: 15,
      periodId: store.lang === 'LT' ? 1 : 4,
      planId: store.lang === 'LT' ? 1 : 3,
      special: false
    },
    {
      name: t('NineMonths'),
      price: 24.45,
      off: 15,
      periodId: store.lang === 'LT' ? 2 : 5,
      planId: store.lang === 'LT' ? 1 : 3,
      special: true
    },
    {
      name: t('ThreeMonths'),
      price: 32.45,
      off: 15,
      periodId: store.lang === 'LT' ? 3 : 6,
      planId: store.lang === 'LT' ? 1 : 3,
      special: false
    }
  ],
  TwoSubjectsPlan: [
    {
      name: t('OneMonth'),
      price: 74.90,
      off: 15,
      periodId: store.lang === 'LT' ? 17 : 7,
      planId: store.lang === 'LT' ? 5 : 4,
      special: false
    },
    {
      name: t('NineMonths'),
      price: 48.90,
      off: 15,
      periodId: store.lang === 'LT' ? 18 : 8,
      planId: store.lang === 'LT' ? 5 : 4,
      special: true
    },
    {
      name: t('ThreeMonths'),
      price: 64.90,
      off: 15,
      periodId: store.lang === 'LT' ? 19 : 9,
      planId: store.lang === 'LT' ? 5 : 4,
      special: false
    }
  ],
  AllSubjectsPlan: [
    {
      name: t('OneMonth'),
      price: 84.90,
      off: 15,
      periodId: store.lang === 'LT' ? 13 : 10,
      planId: store.lang === 'LT' ? 4 : 6,
      special: false
    },
    {
      name: t('NineMonths'),
      price: 54.90,
      off: 15,
      periodId: store.lang === 'LT' ? 14 : 11,
      planId: store.lang === 'LT' ? 4 : 6,
      special: true
    },
    {
      name: t('ThreeMonths'),
      price: 74.90,
      off: 15,
      periodId: store.lang === 'LT' ? 15 : 12,
      planId: store.lang === 'LT' ? 4 : 6,
      special: false
    }
  ],
}

const buildCheckoutUrl = (period) => {
  const selectedSubjects = store.selectedSubjects;
  const promo = store.lang === 'LT' ? 'digiklasieciams' : 'start15';

  let url = `${BASE_APP_DOMAIN[store.lang]}/v2/checkout/create/cart-url/${store.respondent}?userClass=${store.selectedClass}&periodId=${period.periodId}&planId=${period.planId}&promo=${promo}`

  if (selectedSubjects.length < 3) {
    selectedSubjects.forEach((subject) => {
      url += `&selectedSubject[0][${SUBJECT_PLAN_MAP[store.lang][subject]}]=${subject}`;
    });
  }

  return url;
}
</script>

<template>
  <div class="wrapper light-grey pb-12">
    <div class="container">
      <div class="mb-8 text-left">
        <Heading level="2" tw="text-left">{{ $t('ChooseYourPlan') }}</Heading>
        <p class="text-[18px] mt-2">{{ $t('ChooseYourPlanSubHeader') }}</p>
      </div>
      <div class="flex gap-4 flex-col md:flex-row">
        <div class="bg-white border border-gray w-full rounded-xl p-6 relative" v-for="period in planPeriods[resolvePlan(store.selectedSubjects.length)]" :key="period.periodId" :class="{ 'border-4 !border-blue': period.special }">
          <div v-if="period.special" class="absolute text-center font-bold bg-blue text-white px-4 rounded-xl top-[-15px] left-0 right-0 w-[210px] mx-auto">
            {{ $t('SpecialOffer') }}
          </div>
          <div class="font-bold">{{ period.name }}</div>
          <div class="my-3"><span class="text-[30px] font-bold">{{ (period.price - period.off).toFixed(2) }}</span> {{ $t('CurrencyMonth') }}*</div>
          <div class="text-xs">
            <span>{{ (period.price - period.off).toFixed(2) }} € {{ $t('Now') }},</span>
            {{ period.price }}  {{ $t('CurrencyMonth') }} {{ $t('Later') }}
          </div>
          <div class="text-xs text-gray opacity-70">
            {{ $t('OnlyFirstMonthDiscount') }}
          </div>
            <a class="block font-bold border-2 rounded-full border-blue text-blue text-center !w-full py-2 mt-4 hover:bg-blue hover:text-white" :class="{ '!text-white bg-blue cursor-pointer hover:opacity-50': period.special }" :href="buildCheckoutUrl(period)" >{{ $t('GetItNow') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
