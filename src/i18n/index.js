import { createI18n } from 'vue-i18n'

const host = window.location.hostname;
const domainLocaleMap = {
    'quiz.memby.lv': 'lv',
    'quiz.digiklase.lt': 'lt',
    'localhost': 'lt'
};

const detectedLocale = domainLocaleMap[host] || 'lt';

const i18n = createI18n({
    legacy: false,
    // default locale
    locale: detectedLocale,
    // translations
    messages: {
        lt: {
            RecommendedPlan: 'Rekomenduojamas planas',
            CurrencyMonth: '€/mėn.',
            OneSubjectPlan: '„1 dalyko planas“',
            TwoSubjectsPlan: '„2 dalykų planas“',
            AllSubjectsPlan: '„Visi mokykliniai dalykai ir visi būreliai“',
            From: 'Nuo',
            SevenDaysTrial: '7 dienu izmēģinājums',
            AKlaviyoStudentLevel: 'aukštesnis (dirbsime su įdomesniu ir nestandartiniu turiniu)',
            BKlaviyoStudentLevel: 'vidutinis (planuojama pasiekti iki 2 balų geresnį pažymį per 3 mėnesius)',
            CKlaviyoStudentLevel: 'žemesnis (planuojama pasiekti 2 balais geresnius pažymius, vos per 2 mėnesius)',
            KlaviyoAmbitiousGoal: 'pasiruošti egzaminams',
            KlaviyoExamOrientedGoal: 'pagerinti pažymius ir ištaisyti spragas',
            KlaviyoStrugglingGoal: 'tobulėti dominančiuose dalykuose',
            KlaviyoBusyMultiTaskerGoal: 'subalansuoti papildomą mokymąsi su hobiais ir kitais užsiėmimais',
            KlaviyoAmbitiousMotivation: 'ideali (nuolat ieškoma kažko naujo)',
            KlaviyoExamOrientedMotivation: 'gera (daugiau dėmesio skiriama testams, egzaminų rezultatams)',
            KlaviyoStrugglingMotivation: 'vidutiniška (norima pasigerinti pažymius, bet ne visada randama noro)',
            KlaviyoBusyMultiTaskerMotivation: 'žemesnė, nei vidutinė (priklauso nuo to, kiek laisvo turima)',
            KlaviyoIntensityTier1: 'maždaug 1 valandą per savaitę',
            KlaviyoIntensityTier2: 'apie 2 valandas per savaitę',
            KlaviyoIntensityTier3: 'daugiau nei 3 valandas per savaitę',
            LiveLessonsPerWeek: 'GYVOS pam./sav'
        },
        lv: {
            RecommendedPlan: 'Abonements, ko iesakām',
            CurrencyMonth: '€/mēnesī',
            OneSubjectPlan: '„1 mācību priekšmets“',
            TwoSubjectsPlan: '„2 mācību priekšmeti“',
            AllSubjectsPlan: '„Visi mācību priekšmeti“',
            From: 'No',
            SevenDaysTrial: '7 dienu izmēģinājums',
            AKlaviyoStudentLevel: 'viss lieliski, bez problēmām!',
            BKlaviyoStudentLevel: 'viss ir kārtībā, taču dažreiz rodas problēmas.',
            CKlaviyoStudentLevel: 'viss slikti, man turpina neveikties.',
            KlaviyoAmbitiousGoal: 'sagatavojieties eksāmeniem',
            KlaviyoExamOrientedGoal: 'lai uzlabotu atzīmes un aizpildītu zināšanu robus',
            KlaviyoStrugglingGoal: 'lai uzlabotu interesējošos priekšmetus',
            KlaviyoBusyMultiTaskerGoal: 'papildu mācīšanās līdzsvarošana ar hobijiem un citām aktivitātēm',
            KlaviyoAmbitiousMotivation: 'ideāls (vienmēr meklē kaut ko jaunu)',
            KlaviyoExamOrientedMotivation: 'viduvējs (vēlas uzlabot atzīmes, bet ne vienmēr ir vēlme)',
            KlaviyoStrugglingMotivation: 'zem vidējā līmeņa (atkarīgs no tā, cik daudz brīvā laika ir pieejams)',
            KlaviyoBusyMultiTaskerMotivation: 'zem vidējā līmeņa (atkarīgs no tā, cik daudz brīvā laika ir pieejams)',
            KlaviyoIntensityTier1: 'augstāks (mēs strādāsim ar interesantāku un nestandarta saturu)',
            KlaviyoIntensityTier2: 'vidējs (3 mēnešu laikā mēs plānojam sasniegt līdz 2 atzīmēm augstāku rezultātu)',
            KlaviyoIntensityTier3: 'zemāks (plāno sasniegt atzīmju uzlabošanos par 2 tikai 2 mēnešos)',
            LiveLessonsPerWeek: 'tiešraides nedēļā'
        },
    },
})
export default i18n
