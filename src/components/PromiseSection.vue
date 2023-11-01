<script setup>
import { store } from '../store'

defineProps({
  btnLabel: Object
})

const promise = {
  LT: {
    A: {
      heading: '<span style="color: #4a74eb">Pagerinsime tavo žinias</span> su įdomesniu ir nestandartiniu turiniu',
      paragraph: 'Tavo pažymiai jau dabar yra neblogi. Todėl mūsų tikslas bus tave dar labiau sudominti ir įtraukti į mokslą su nauja mokymosi medžiaga',
      imgSrc: '/promiseImages/your-level-A.svg'
    },
    B: {
      heading: 'Pasieksi <span style="color: #4a74eb">0,5-2 balų geresnius pažymius,</span> vos per 3 mėnesius!',
      paragraph: 'Tavo rezultatą apskaičiavome remdamiesi <strong>7348</strong> panašių mokinių atsakymais',
      imgSrc: '/promiseImages/your-level-B.svg'
    },
    C: {
      heading: 'Pasieksi <span style="color: #4a74eb">iki 2 balų geresnius pažymius,</span> vos per 2 mėnesius!',
      paragraph: 'Tavo rezultatą apskaičiavome remdamiesi <strong>5124</strong> panašių mokinių atsakymais',
      imgSrc: '/promiseImages/your-level-C.svg'
    }
  },
  LV: {
    A: {
      heading: '<span>Mēs uzlabosim Tavas zināšanas</span> ar daudz interesantāku un nestandarta saturu.',
      paragraph: 'Tavas atzīmes jau ir augstas. Tāpēc mūsu mērķis būs noturēt Tavu interesi un iesaistīt mācīties ar jauniem materiāliem.',
      imgSrc: '/promiseImages/your-level-A-LV.svg'
    },
    B: {
      heading: 'Tu sasniegsi par <span style="color: #4a74eb">0.5-2 atzīmēm augstākus vērtējumus,</span> tikai 3 mēnešu laikā!',
      paragraph: 'Mēs izrēķinājām Tavu rezultātu balstoties uz atbildēm no <strong>7348</strong> līdzīgiem skolēniem.',
      imgSrc: '/promiseImages/your-level-B-LV.svg'
    },
    C: {
      heading: 'Tu sasniegsi <span style="color: #4a74eb">par 2 atzīmēm augstākus vērtējumus,</span> tikai 2 mēnešu laikā!',
      paragraph: 'Mēs izrēķinājām Tavu rezultātu balstoties uz atbildēm no <strong>5124</strong> līdzīgiem skolēniem.',
      imgSrc: '/promiseImages/your-level-C-LV.svg'
    }
  }
}

const handleButtonClick = () => {
  const url = new URL(window.location.href)

  const element = document.getElementById(url.searchParams.has('deal') ? "choose-plan" : "programs");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

</script>

<template>
  <div class="wrapper light-grey py-12 md:py-20">
    <div class="container">
      <div
          class="content--flex"
      >
        <div class="content--left">
          <h2 v-html="promise[store.lang][store.childLevel].heading">
          </h2>
          <p>
            {{ $t('PromiseSubHeader') }}
          </p>
          <button @click="handleButtonClick" class="flex border border-black rounded-[9999px] px-5 py-2 hover:opacity-50">{{ $t('ReviewPlan') }} <span class="ml-4"><svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1837_7473)">
              <path d="M11.3579 25.3239C11.3579 20.5063 15.7842 16.5762 21.2364 16.5762C21.654 16.5762 22 16.2698 22 15.9C22 15.5303 21.654 15.2239 21.2364 15.2239C17.0249 15.2239 13.3384 17.2523 11.3579 20.2739L11.3579 0.676147C11.3579 0.306379 11.0119 -4.80304e-07 10.5944 -4.98556e-07C10.1768 -5.16809e-07 9.8308 0.306379 9.8308 0.676147L9.8308 20.0943C7.96963 17.1784 4.60521 15.2239 0.775487 15.2239C0.357917 15.2239 0.0119298 15.5303 0.0119298 15.9C0.0119298 16.2698 0.357917 16.5762 0.775487 16.5762C5.7744 16.5762 9.8308 20.4957 9.8308 25.3239C9.8308 25.6936 10.1768 26 10.5944 26C11.0119 26 11.3579 25.6936 11.3579 25.3239Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_1837_7473">
                <rect width="26" height="22" fill="white" transform="translate(22) rotate(90)"/>
              </clipPath>
            </defs>
          </svg>
            </span>
          </button>
        </div>
        <div class="content--right">
          <img :src="promise[store.lang][store.childLevel].imgSrc" class="level-image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  padding: 0 5%;
  height: 65px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 74px;
}

.section-title + p {
  text-align: center;
  margin-top: 16px;
}

.card--left img {
  position: absolute;
  left: 32px;
  bottom: -32px;
}
.card--left h3 {
  display: none;
}
@media (min-width: 1025px) {
  .card--left h3 {
    display: block;
    position: absolute;
    left: 0;
    top: -50px;
    font-size: 26px;
    font-weight: 570;
    line-height: 36px;
  }
}

.card--left span {
  color: #ff714b;
}

.card.card--right p {
  color: #f4e140;
  display: block;
}
.card--right img {
  position: absolute;
  top: -32px;
  right: 32px;
}
.card p {
  font-size: 16px;
  font-style: normal;
  font-weight: 550;
  line-height: 20px;
  margin: 0;
}
.card p span {
  display: block;
  font-size: 45px;
  font-style: normal;
  font-weight: 570;
  line-height: 50px;
  margin: 8px 0 16px 0;
}


.cta-card p {
  font-size: 20px;
  line-height: 30px;
}
.cta-card h3 {
  font-size: 30px;
  font-style: normal;
  font-weight: 570;
  line-height: 42px;
}
.cta-card p span {
  font-size: 50px;
  font-weight: 570;
  line-height: 38px;
}


@media screen and (max-width: 576px) {
  .cta-card .action {
    flex-direction: column;
    align-items: flex-start;
  }
  .cta-card .action .cta-btn {
    margin-right: 0;
    margin-bottom: 32px;
  }
}
.list-section {
  padding-top: 100px;
}
.last-section-block {
  margin-bottom: 150px;
  align-items: center;
}
@media screen and (max-width: 1024px) {
  .last-section-block {
    padding-bottom: 150px;
    margin-bottom: 0;
  }
}
.content--flex {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.content--left {
  width: 100%;
  text-align: left;
  margin-bottom: 48px;
}
.content--left img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
}
.content--left .cta-btn img {
  margin-right: unset;
  margin-left: 16px;
}
.content--left h2 {
  text-align: left;
  font-size: 42px;
  font-style: normal;
  font-weight: 570;
  line-height: 56px;
  margin-bottom: 20px;
}
.content--left h2 span {
  color: #4a74eb;
}
.content--left p {
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 24px;
}
.content--left p strong {
  font-weight: 570;
}
.content--right {
  width: 100%;
}
@media (max-width: 576px) {
  .section-title,
  .content--left h2 {
    font-size: 30px;
    line-height: 1.3;
  }
}
@media screen and (min-width: 768px) {
  .content--left {
    width: 50%;
    padding-right: 24px;
    margin-bottom: 0;
  }
  .content--right {
    width: 50%;
  }
}
@media screen and (max-width: 992px) {
  .d-flex.y-center {
    flex-direction: column;
    align-items: flex-start;
  }
  .d-flex.y-center .cta-link {
    margin-top: 16px;
  }
}
.list-content h3 {
  font-size: 32px;
  font-weight: 570;
  line-height: 46px;
}
ul {
  list-style: none;
  margin-top: 30px;
}
ul li {
  padding-left: 32px;
  position: relative;
  min-height: 50px;
  font-size: 18px;
  font-style: normal;
  font-weight: 570;
  line-height: 30px; /* 166.667% */
}
ul li::before {
  content: '';
  background-image: url(../assets/images/tick.svg);
  background-size: 100% 100%;
  width: 20px;
  height: 20px;
  position: absolute;
  left: 0;
}
@media (max-width: 576px) {
  .list-content h3 {
    font-size: 30px;
    line-height: 1.3;
  }
  .list-content .cta-buttons {
    flex-direction: column;
  }
}
@media (min-width: 576px) {
  .list-content .cta-buttons {
    justify-content: flex-start;
  }
}
@media (min-width: 768px) {
  ul li {
    padding-left: 42px;
  }
  ul li::before {
    width: 32px;
    height: 32px;
  }

  .list-content .cta-buttons .cta-btn {
    margin-right: 0;
    margin-top: 32px;
  }
}


.story-body h4 {
  font-size: 26px;
  font-weight: 570;
  line-height: 40px;
  color: #fff;
  margin-top: 0;
}
.story-body p {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #fff;
  margin-bottom: 16px;
}
.story-body h5 {
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  color: #fff;
}

.testimonial .author img {
  display: block;
  width: 100%;
  width: 55px;
  height: 55px;
}
.testimonial .text p {
  font-size: 16px;
  font-style: normal;

  font-weight: 400;
  line-height: 22px;
  margin-bottom: 8px;
}
.testimonial .text p span {
  font-size: 17px;
  font-style: normal;
  font-weight: 570;
  line-height: 28px;
}

.level-image {
  display: block;
  width: 100%;
}

.membership-content h3 {
  font-size: 18px;
  font-style: normal;
  font-weight: 570;
  line-height: 20px;
}

h5 {
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
}

footer {
  min-height: 100px;
  background-color: #000000;
  display: flex;
  align-items: center;
}
footer {
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
}
footer p,
footer a {
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  text-decoration: none;
}
footer a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  footer {
    padding: 16px 0;
  }
  footer {
    flex-direction: column;
  }
}

@media (min-width: 992px) {
  h1 {
    font-size: 32px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 70%;
  }
}
</style>
