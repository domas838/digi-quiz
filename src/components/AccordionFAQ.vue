<script setup>
import { reactive } from 'vue'
import { Collapse } from 'vue-collapsed'
import { store } from '../store'

const props = defineProps(['content'])

const faqState = reactive({
    isFaqHidden: true,
    btnLabel: 'Žiūrėti visus'
})
if (store.lang === 'LV') {
    faqState.btnLabel = 'Apskatīt visus'
}
const showAllFaqs = (event) => {
    event.target.style.display = 'none'
    faqState.isFaqHidden = false
}

const handleAccordion = (selectedIndex, items) => {
    items.forEach((_, index) => {
        items[index].isExpanded = index === selectedIndex ? !items[index].isExpanded : false
    })
}
</script>

<template>
    <div
        v-for="(question, index) in props.content"
        :key="question.title"
        class="faq-accordion"
        :class="{ hidden: index >= 3 && faqState.isFaqHidden }"
    >
        <button @click="() => handleAccordion(index, props.content)" class="faq-header">
            <div>
                <p>{{ question.title }}</p>
            </div>
            <div>
                <img src="../assets/images/arrow-bottom.svg" alt="V" />
            </div>
        </button>
        <Collapse :when="props.content[index].isExpanded" class="collapse">
            <div class="faq-body" v-html="question.answer"></div>
        </Collapse>
    </div>
    <button class="btn--secondary" @click="showAllFaqs">{{ faqState.btnLabel }}</button>
</template>

<style scoped>
.collapse {
  visibility: unset;
}

.faq-accordion:first-of-type {
    margin-top: 80px;
}
.faq-accordion {
    border-bottom: 2px solid #eeeff4;
}
.faq-accordion.hidden {
    display: none;
}
.faq-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    min-height: 70px;
    text-align: left;
}
.faq-header p {
    font-family: 'obviously', sans-serif;

    font-size: 18px;
    font-weight: 570;
    line-height: 30px;
}
.faq-body {
    padding-bottom: 32px !important;
}
.btn--secondary {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: #000000;
    border-radius: 56px;
    background-color: transparent;
    border: 1px solid #000;
    padding: 12px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 70px auto 0 auto;
}
</style>
