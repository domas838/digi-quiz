import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    // default locale
    locale: 'lt',
    // translations
    messages: {
        lt: {
            RecommendedPlan: 'Rekomenduojamas planas',
            CurrencyMonth: '€/mėn.',
        },
        lv: {
            RecommendedPlan: 'Abonements, ko iesakām',
            CurrencyMonth: '€/mēnesī',
        },
    },
})
export default i18n
