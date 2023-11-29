<script setup>
    const confirm = () => {
        // TODO
        console.log('go to next step');
    }
</script>

<template>
    <div class="max-w-[600px] flex flex-col gap-10 items-center text-center">
        <h1 class="text-left mb-2">{{ $t('ExpertCare') }}</h1>
        <div class="max-w-[480px]">
            <img src="../assets/images/usa-map.png"/>
        </div>
        <div class="text-xl" v-html="$t('MathsUpHelped')"/>
        <div>
            <button @click="confirm()" class="benefit-btn">
                {{ $t('Continue') }}
                <img src="../assets/images/arrow-right.svg" alt="Next" />
            </button>
        </div>
    </div>
</template>