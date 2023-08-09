<script setup>
import { store } from '../store'
import { computed } from 'vue'

const submitChildEmail = (event) => {
    event.preventDefault()
    store.isChildEmailEntered = true
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
const makeExternalID = (length) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    let counter = 0
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
        counter += 1
    }
    return result
}

const klaviyoRequestHandler = () => {
    console.log('SUBMIT EMAILS')
    // let date = new Date()

    // const options = {
    //     method: 'POST',
    //     headers: {
    //         accept: 'application/json',
    //         revision: date.toISOString().split('T')[0],
    //         'Content-Type': 'application/json',
    //         Authorization: 'Klaviyo-API-Key pk_5a1e956f717f7efdc37cbdf9ca124b1986',
    //         mode: 'no-cors'
    //     },
    //     body: JSON.stringify({
    //         data: {
    //             type: 'profile',
    //             attributes: {
    //                 email: store.childEmail ? store.childEmail : store.parentEmail,
    //                 external_id: makeExternalID(28),
    //                 properties: {
    //                     ResultURL: store.resultUrl,
    //                     Persona: store.selectedPersona,
    //                     Class: store.selectedClass,
    //                     Respondent: store.respondent,
    //                     ParentEmail: store.parentEmail,
    //                     ChildEmail: store.childEmail,
    //                     Motivation: store.childLevel
    //                 }
    //             }
    //         }
    //     })
    // }

    // fetch('https://a.klaviyo.com/api/profiles/', options)
    //     .then((response) => response.json())
    //     .then((response) => console.log(response))
    //     .catch((err) => console.error(err))
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
    <div class="submit-container" v-if="store.respondent === 'child' && store.isChildEmailEntered">
        <button
            type="submit"
            class="benefit-btn"
            @click="submitChildAndParentHandler($event)"
            :disabled="isParentProceedDisabled"
        >
            Tęsti <img src="../assets/images/arrow-right.svg" alt="" />
        </button>
        <a href="javascript:void(0)" @click="cancelEmailHandler">Praleisti</a>
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
