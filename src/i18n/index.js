import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    // default locale
    locale: 'lt',
    // translations
    messages: {
        lt: {
            RecommendedPlan: 'Rekomenduojamas planas',
            CurrencyMonth: '€/mėn.',
            OneSubjectPlan: '„1 dalyko planas“',
            TwoSubjectsPlan: '„2 dalykų planas“',
            AllSubjectsPlan: '„Visi mokykliniai dalykai ir visi būreliai“'
        },
        lv: {
            RecommendedPlan: 'Abonements, ko iesakām',
            CurrencyMonth: '€/mēnesī',
            OneSubjectPlan: '„1 mācību priekšmets“',
            TwoSubjectsPlan: '„2 mācību priekšmeti“',
            AllSubjectsPlan: '„Visi mācību priekšmeti“'
        },
    },
})
export default i18n
