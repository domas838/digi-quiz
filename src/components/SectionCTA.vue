<template>
    <div class="d-flex justify-center cta-buttons">
        <a href="" class="cta-btn"
            >Įsigyti narystę<img src="../assets/images/arrow-right.svg" alt=""
        /></a>
        <a href="/" class="cta-link">Žiūrėti visus planus</a>
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
