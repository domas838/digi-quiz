<script setup>
import { reactive } from 'vue'
import { store } from '../store'
const props = defineProps(['allPlansURL', 'selectedPlanURL'])

const url = new URL(window.location.href)

const btnLabel = reactive({
    buyNow: 'Įsigyti narystę',
    showAll: 'Žiūrėti visus planus'
})

if (store.lang === 'LV') {
  btnLabel.buyNow = url.searchParams.has('lmt') ? 'Izmēģināt par 1 EUR' : 'Pirkt abonementu'
  btnLabel.showAll = 'Apskatīt visus'
}
</script>
<template>
    <div class="d-flex justify-center cta-buttons">
        <a :href="props.selectedPlanURL" class="cta-btn"
            >{{ btnLabel.buyNow }}<img src="../assets/images/arrow-right.svg" alt=""
        /></a>
        <a :href="props.allPlansURL" target="_blank" class="cta-link">{{ btnLabel.showAll }}</a>
    </div>
</template>

<style scoped>
@media (max-width: 576px) {
    .cta-buttons {
        flex-direction: column;
    }
    .cta-btn {
        margin-right: 0;
        width: 100%;
        justify-content: center;
    }
    .cta-link {
        margin-top: 16px;
    }
}
</style>
