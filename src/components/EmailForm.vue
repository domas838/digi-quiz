<script setup>
import { store } from '../store'
import { computed } from 'vue'

const submitChildEmail = (event) => {
    event.preventDefault()
    store.isChildEmailEntered = true
}

const emailIsValid = (email) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true
    } else {
        return false
    }
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
    // store.isLoading = true
    event.preventDefault()

    // console.log('TIER0 ' + store.TIER0)
    // console.log('TIER1 ' + store.TIER1)
    // console.log('TIER2 ' + store.TIER2)
    // console.log('TIER3 ' + store.TIER3)
    // console.log(store.selectedSubjects)
    store.step += 1
    store.showRecomendations = true
}
</script>
<template>
    <h1 v-if="store.respondent === 'child' && !store.isChildEmailEntered">
        Rekomenduosime planą, kuris padėtų pasiekti visų užsibrėžtų tikslų
    </h1>
    <p v-if="store.respondent === 'child' && !store.isChildEmailEntered">
        Kur atsiųsti rezultatus?
    </p>
    <h1 v-if="store.respondent === 'child' && store.isChildEmailEntered">
        Pasidalink rezultatais su tėveliais/globėjais ir gauk <span>15 EUR nuolaidą</span> narystei
        įsigyti!
    </h1>
    <h1 v-if="store.respondent === 'parent'">
        Rekomenduosime planą, kuris padėtų pasiekti visų užsibrėžtų tikslų
    </h1>
    <p v-if="store.respondent === 'parent'">Kur atsiųsti rezultatus?</p>
    <div v-if="store.respondent === 'child'">
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
        <div class="notice" v-if="store.isChildEmailEntered">
            Įvedus tėvelio/globėjo el. paštą, tau priklausys papildoma
            <strong>15% nuolaida</strong> narystei įsigyti! Kodą išssiųsime el. paštu.
        </div>
    </div>
    <div v-if="store.respondent === 'parent'">
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
    <div class="aggree-row" v-if="store.respondent === 'parent'">
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
    <button
        v-if="store.respondent === 'child' && !store.isChildEmailEntered"
        type="submit"
        class="benefit-btn"
        style="margin-top: 2rem"
        @click="submitChildEmail($event)"
        :disabled="isChildProceedDisabled"
    >
        Tęsti <img src="../assets/images/arrow-right.svg" alt="" />
    </button>
    <button
        v-if="store.respondent === 'parent'"
        type="submit"
        class="benefit-btn"
        style="margin-top: 2rem"
        @click="submitHandler($event)"
        :disabled="isParentProceedDisabled"
    >
        Tęsti <img src="../assets/images/arrow-right.svg" alt="" />
    </button>

    <button
        v-if="store.respondent === 'child' && store.isChildEmailEntered"
        type="submit"
        class="benefit-btn"
        style="margin-top: 2rem"
        @click="submitHandler($event)"
    >
        Tęsti <img src="../assets/images/arrow-right.svg" alt="" />
    </button>
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
</style>
