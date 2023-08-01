<script setup>
import { store } from '../store'
import { computed } from 'vue'
const toFindDuplicates = (arry) => arry.filter((item, index) => arry.indexOf(item) !== index)

const submitChildEmail = (event) => {
    event.preventDefault()
    store.isChildEmailEntered = true
}
const isChildProceedDisabled = computed(() => {
    if (!store.childEmail || !store.aggreeWithPrivacy) {
        return true
    } else {
        return false
    }
})
const isParentProceedDisabled = computed(() => {
    if (!store.parentEmail || !store.aggreeWithPrivacy) {
        return true
    } else {
        return false
    }
})

console.log(isChildProceedDisabled)
const submitHandler = (PROFILE1, PROFILE2, PROFILE3, event) => {
    // store.isLoading = true
    event.preventDefault()

    let resultArray = []
    resultArray = resultArray.concat(PROFILE1, PROFILE2, PROFILE3)

    const duplicated = toFindDuplicates(resultArray)

    let result = duplicated.filter((element, index) => {
        return duplicated.indexOf(element) === index
    })

    if (PROFILE3[0] === 'Socializer') {
        store.selectedPersona = PROFILE3[0]
    } else if (result.length == 1) {
        store.selectedPersona = duplicated[0]
    } else if (result.length == 2) {
        if (result.includes('Busy Multitasker') && result.includes('Struggling')) {
            store.selectedPersona = 'Struggling'
        }
        if (result.includes('Exam Oriented') && result.includes('Ambitious')) {
            store.selectedPersona = 'Ambitious'
        }
        if (result.includes('Exam Oriented') && result.includes('Busy Multitasker')) {
            if (store.TIER === 'TIER1') {
                store.selectedPersona = 'Struggling'
            } else {
                store.selectedPersona = 'Ambitious'
            }
        }
        //
    } else if (result.length >= 2) {
        if (
            (result.includes('Busy Multitasker') || result.includes('Struggling')) &&
            (result.includes('Exam Oriented') || result.includes('Ambitious'))
        ) {
            if (store.TIER === 'TIER1') {
                store.selectedPersona = 'Struggling'
            } else {
                store.selectedPersona = 'Ambitious'
            }
        }
    }

    console.log('Persona ' + store.selectedPersona)
    switch (store.selectedPersona) {
        case 'Ambitious':
            if (store.TIER === 'TIER0') {
                store.TIER0 = 'Textbook, flexible'
            }
            store.TIER1 = 'Advanced'
            store.TIER2 = 'Exam prep'
            store.TIER3 = 'School prep'
            break
        case 'Exam Oriented':
            if (store.TIER === 'TIER0') {
                store.TIER0 = 'Textbook, flexible'
            }
            store.TIER1 = 'Exam prep'
            if (PROFILE1 === ['Ambitious', 'Exam Oriented']) {
                store.TIER2 = 'Exam advanced prep'
                store.TIER3 = 'Advanced school prep'
            } else {
                store.TIER2 = 'School prep'
                store.TIER3 = 'Textbook, flexible'
            }

            break
        case 'Busy Multitasker':
            if (store.TIER === 'TIER0') {
                store.TIER0 = 'Textbook, flexible'
            }
            if (PROFILE1 === ['Ambitious', 'Exam Oriented']) {
                store.TIER1 = 'Exam advanced prep'
            } else {
                store.TIER1 = 'Exam prep'
            }
            store.TIER2 = 'School prep'
            store.TIER3 = 'Textbook, flexible'

            break
        case 'Struggling':
            if (store.TIER === 'TIER0') {
                store.TIER0 = 'Textbook, flexible'
            }
            store.TIER1 = 'Textbook, flexible'
            store.TIER2 = 'School prep'
            store.TIER3 = 'Exam prep'

            break
        case 'Socializer':
            if (store.TIER === 'TIER0') {
                store.TIER0 = 'Textbook, flexible'
            }
            store.TIER1 = 'Non-formal'
            if (PROFILE1 === ['Ambitious', 'Exam Oriented']) {
                store.TIER2 = 'Exam prep'
            } else {
                store.TIER2 = 'School prep'
            }
            if (PROFILE2 === 'Exam oriented') {
                if (PROFILE1 === ['Ambitious', 'Exam Oriented']) {
                    store.TIER3 = 'Advanced exam prep'
                } else {
                    store.TIER3 = 'School prep'
                }
            } else {
                if (PROFILE1 === ['Ambitious', 'Exam Oriented']) {
                    store.TIER3 = 'Advanced school prep'
                } else {
                    store.TIER3 = 'Textbook, flexible'
                }
            }
            break

        default:
            break
    }
    console.log('TIER0 ' + store.TIER0)
    console.log('TIER1 ' + store.TIER1)
    console.log('TIER2 ' + store.TIER2)
    console.log('TIER3 ' + store.TIER3)
    console.log(store.selectedSubjects)
    store.step += 1
    store.showRecomendations = true
}
</script>
<template>
    <h1 v-if="store.respondent === 'child' && !store.isChildEmailEntered">
        Kur siųsti rezultatus?
    </h1>
    <h1 v-if="store.respondent === 'child' && store.isChildEmailEntered">
        Pasidalink rezultatais su tėveliais/globėjais ir gauk 15 EUR nuolaidą narystei įsigyti!
    </h1>
    <h1 v-if="store.respondent === 'parent'">
        Įveskite el. paštą, kur išsiųsime rezultatus ir gaukite 15 EUR nuolaidą narystei įsigyti!
    </h1>
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
        @click="submitHandler(store.PROFILE1, store.PROFILE2, store.PROFILE3, $event)"
        :disabled="isParentProceedDisabled"
    >
        Tęsti <img src="../assets/images/arrow-right.svg" alt="" />
    </button>

    <button
        v-if="store.respondent === 'child' && store.isChildEmailEntered"
        type="submit"
        class="benefit-btn"
        style="margin-top: 2rem"
        @click="submitHandler(store.PROFILE1, store.PROFILE2, store.PROFILE3, $event)"
    >
        Tęsti <img src="../assets/images/arrow-right.svg" alt="" />
    </button>
</template>
