<script setup>
import { store } from '../store'
import {onMounted} from 'vue'
import {event} from "vue-gtag";

onMounted(() => {
  event('quiz_email_whatsapp');
});

</script>
<template>
    <h1>
      Mēs esam izveidojuši personalizētu mācību programmu, kas palīdzēs Tev sasniegt savus mērķus.
    </h1>
    <p>
      Kādu e-pastu Tu vēlies izmantot, lai pieslēgtos?
    </p>
  <div class="mx-auto w-full text-center mb-8 animate-bounce hover:animate-none">
    <a href="https://memby.lv/waiting" class="text-center bg-blue text-white font-bold rounded-full px-8 py-2 mb-4 mx-auto flex w-fit items-center gap-2">
      <div class="w-8 h-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552"><defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163"/><stop offset="1" stop-color="#23b33a"/></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="3.531"/></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"/><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"/><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"/><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"/><path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"/></svg>
      </div>
      Iegūsti Bezmaksas Konsultāciju
    </a>
  </div>
    <div>
        <div class="privacy-notice">
            <img src="../assets/images/Lock.svg" alt="Lock" />
            <p>
              Tavi personīgie dati ir drošībā ar mums. Kā arī mēs nesūtām SPAM ziņas un nedalāmies
              ar e-pastu adresēm, ar trešajām personām.
            </p>
        </div>
        <div class="aggree-row">
            <input
                type="checkbox"
                name="privacy"
                id="privacy"
                value="Es piekrītu lietošanas nosacījumiem un privātuma politikai"
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
            >lietošanas nosacījumiem un privātuma politikai</a
            ></label
            >
        </div>
        <div class="aggree-row">
            <input
                type="checkbox"
                name="age"
                id="age"
                value="Es esmu jau 14 gadus vecs"
                v-model="store.olderThanThirteen"
            />
            <img src="../assets/images/checkbox.svg" alt="" class="custom-checkbox" />
            <img
                src="../assets/images/checkbox-checked.svg"
                alt=""
                class="custom-checkbox-checked"
            />
            <label for="age" class="aggree-label">Es esmu jau 14 gadus vecs</label>
        </div>
        <div class="aggree-row" v-if="!store.isChildEmailEntered">
            <p>
              *Ja Tev vēl nav 14 gadu, palūdz vecākam/aizbildnim aizpildīt aptauju par Tevi
            </p>
        </div>
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
