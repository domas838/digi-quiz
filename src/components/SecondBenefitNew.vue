<script setup>
import { store } from '../store'
import {changeUrlPath, getLocaleFromURL} from "../helpers";
import Heading from "@/components/Typography/Heading.vue";
import SandileDesktopIMG from '../assets/images/sandile_desktop.png';
import SandileMobileIMG from '../assets/images/sandile_mobile.png';
import BrTeacherDesktopIMG from '../assets/images/Desktop-professora.png';
import BrTeacherMobileIMG from '../assets/images/Mobile-professora.png';

const localeKey = getLocaleFromURL(window.location)

const acceptSecondBenefit = () => {
    store.showSecondBenefit = false
    store.step += 1
    changeUrlPath('/' + store.respondent + '/' + store.step + '/' + store.flow)
}

const benefitsEN = [
    '<strong>Cape Town University</strong> graduate with strong expertise in mathematics.',
    'Global <strong>Best Teacher Award</strong> winner in Dubai 2023.',
    'Teaches math in an easily way, fostering meaningful connections and <strong>motivating students.</strong>'
]

const benefitsBR = [
  '<strong>Professores altamente qualificados,</strong> incluindo graduados das melhores universidades do mundo',
  '<strong>Personalidades inspiradoras</strong> que podem não apenas contar histórias de forma criativa, mas também gerar discussões interessantes',
  'Se algumas matérias educacionais ainda forem difíceis de entender, a equipe Mathups estará sempre <strong>pronta para oferecer ajuda extra após a aula</strong>'
]

const BENEFITS_BULLETS_LOCALE_MAP = {
  'sa': benefitsEN,
  'br': benefitsBR
}

const BENEFITS_IMAGE_MAP = {
  'sa': {'desktop': SandileDesktopIMG, 'mobile': SandileMobileIMG},
  'br': {'desktop': BrTeacherDesktopIMG, 'mobile': BrTeacherMobileIMG}
}

</script>

<template>
  <div class="grid grid-cols-1 items-center px-8 gap-5 lg:grid-cols-2 md:px-16 xl:px-36">
    <div class="max-w-[615px]">
      <div class="text-left mb-10">
        <Heading level="1" tw="text-left">
          <span v-html="$t('BenefitPageH1')" />
        </Heading>
      </div>
      <div>
        <div class="benefit-row" v-for="(b, index) in BENEFITS_BULLETS_LOCALE_MAP[localeKey]" v-bind:key="index">
          <div class="icon">
            <img class="min-w-[30px]" src="../assets/images/Description.svg" alt="" />
          </div>
          <div class="content">
            <p v-html="b"></p>
          </div>
        </div>
      </div>
      <button @click="acceptSecondBenefit()" class="benefit-btn mt-10">
        {{ $t('Continue') }}
        <img src="../assets/images/arrow-right.svg" alt="Next" />
      </button>
    </div>
    <img :src="BENEFITS_IMAGE_MAP[localeKey]['desktop']" alt="teacher" class="hidden sm:block max-h-[700px]" />
    <img :src="BENEFITS_IMAGE_MAP[localeKey]['mobile']" alt="teacher" class="w-full sm:hidden" />
  </div>
</template>
