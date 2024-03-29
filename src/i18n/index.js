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
            Title: 'Digiklasės pasiūlymas!',
            Description: 'Užpildykite trumpą klausimyną ir gaukite specialiai JUMS pritaikytą pasiūlymą.',
            RecommendedPlan: '🙌 Viskas įtraukta į planą:',
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
            LiveLessonsPerWeek: 'GYVA pam./sav',
            LiveLessonsPerWeekPlural: 'GYVOS pam./sav',
            ReadMore: 'Daugiau',
            VimeoExplainerLink: 'https://player.vimeo.com/video/675895976?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
            CalculatingResults: 'Skaičiuojame rezultatus...',
            WeRecommendingThesePrograms: 'Rekomenduojame mokytis pagal šias programas:',
            AllPlansUrl: 'https://app.digiklase.lt/plans/choose',
            AllProgramsAreIncludedInPlan: 'Visos programos yra įtrauktos į plano kainą 🙌',
            ProgramsWhichYouGet: 'Programos, kurias gausi',
            NextLive: 'Kita <span class="italic">GYVA</span> pamoka: ',
            Timetable: 'Tvarkaraštis',
            TimetableNote: 'Suasmeninome tvarkaraštį pagal parinktas programas',
            MyTimetable: 'Mano tvarkaraštis',
            AllTimetable: 'Bendras tvarkaraštis',
            ReviewPlan: 'Peržiūrėti planą',
            TotalLessons: 'Viso pamokų: ',
            NineMonthsProgram: '9 mėn. trukmės pamoka',
            PromiseSubHeader: 'Sukūrėme tau mokymosi planą, kuris padės pasiekti užsibrėžtų tikslų!',
            ChooseYourPlan: 'Pasirinkti planą',
            ChooseYourPlanSubHeader: 'Nėra geresnio laiko negu DABAR pradėti siekti savo tikslų 🎯',
            SpecialOffer: 'Specialus pasiūlymas',
            WillBeChargedEveryMonth: 'will be charged every month',
            GetItNow: 'Pirkti dabar',
            SpecialDeal: 'Specialus -15 € pasiūlymas aktyvuotas!',
            OnlyFirstMonthDiscount: '*nuolaida taikoma pirmam mėnesiui',
            Now: 'dabar',
            Later: 'vėliau',
            ThisOfferValidFor: 'Šis pasiūlymas galioja: ',
            hours: 'h',
            minutes: 'min',
            seconds: 's',
            days: 'd',
            OneMonth: '1 mėnuo',
            ThreeMonths: '3 mėnesiai',
            NineMonths: '9 mėnesiai',
            NovemberDealTimer: '🔥 SPECIALUS PASIŪLYMAS -> Visi dalykai už 2-iejų kainą! 🔥',
            NovemberDealTimerFull: '🔥 Tik dabar -> visi dalykai už 2 kainą! 🔥'
        },
        lv: {
            Title: 'Mācību tiešsaistes nodarbības — Memby.lv',
            Description: 'Visu klašu skolēniem, laužam stereotipus par mācību tiešsaistes nodarbībām! Mācāmies matemātiku, bioloģiju, fiziku, ķīmiju un vēl citus priekšmetus ...',
            RecommendedPlan: '🙌 Viss iekļauts plānā:',
            CurrencyMonth: '€/mēnesī',
            OneSubjectPlan: '„1 mācību priekšmets“',
            TwoSubjectsPlan: '„2 mācību priekšmeti“',
            AllSubjectsPlan: '„Visi mācību priekšmeti“',
            From: 'No',
            SevenDaysTrial: '7 dienu izmēģinājums',
            AKlaviyoStudentLevel: 'augstāks (mēs strādāsim ar interesantāku un nestandarta saturu)',
            BKlaviyoStudentLevel: 'vidējs (3 mēnešu laikā mēs plānojam sasniegt līdz 2 atzīmēm augstāku rezultātu)',
            CKlaviyoStudentLevel: 'zemāks (plāno sasniegt atzīmju uzlabošanos par 2 tikai 2 mēnešos)',
            KlaviyoAmbitiousGoal: 'sagatavojieties eksāmeniem',
            KlaviyoExamOrientedGoal: 'lai uzlabotu atzīmes un aizpildītu zināšanu robus',
            KlaviyoStrugglingGoal: 'lai uzlabotu interesējošos priekšmetus',
            KlaviyoBusyMultiTaskerGoal: 'papildu mācīšanās līdzsvarošana ar hobijiem un citām aktivitātēm',
            KlaviyoAmbitiousMotivation: 'ideāls (vienmēr meklē kaut ko jaunu)',
            KlaviyoExamOrientedMotivation: 'labs (vairāk koncentrējas uz testiem, eksāmenu rezultātiem)',
            KlaviyoStrugglingMotivation: 'viduvējs (vēlas uzlabot atzīmes, bet ne vienmēr ir vēlme)',
            KlaviyoBusyMultiTaskerMotivation: 'zem vidējā līmeņa (atkarīgs no tā, cik daudz brīvā laika ir pieejams)',
            KlaviyoIntensityTier1: 'augstāks (mēs strādāsim ar interesantāku un nestandarta saturu)',
            KlaviyoIntensityTier2: 'vidējs (3 mēnešu laikā mēs plānojam sasniegt līdz 2 atzīmēm augstāku rezultātu)',
            KlaviyoIntensityTier3: 'zemāks (plāno sasniegt atzīmju uzlabošanos par 2 tikai 2 mēnešos)',
            LiveLessonsPerWeek: 'tiešraides nedēļā',
            LiveLessonsPerWeekPlural: 'tiešraides nedēļā',
            ReadMore: 'Lasīt vairāk',
            VimeoExplainerLink: 'https://player.vimeo.com/video/853296489?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
            CalculatingResults: 'Rezultāti tiek aprēķināti......',
            WeRecommendingThesePrograms: 'Mēs iesakam mācīties atbilstoši sekojošām programmām:',
            AllPlansUrl: 'https://app.memby.lv/plans/choose',
            AllProgramsAreIncludedInPlan: 'Visas programmas ir iekļautas plāna cenā 🙌',
            ProgramsWhichYouGet: 'Programmas, ko saņemsi',
            NextLive: 'Nākamā tiešraide: ',
            Timetable: 'Stundu saraksts',
            TimetableNote: 'Esam personalizējuši grafiku, balstoties uz Tavām programmām 🗓️',
            MyTimetable: 'Mans stundu saraksts',
            AllTimetable: 'Vispārējais stundu saraksts',
            ReviewPlan: 'Apskatīt manu plānu',
            TotalLessons: 'Nodarbības kopumā: ',
            NineMonthsProgram: '9 mēnešu programma',
            PromiseSubHeader: 'Esam izveidojuši mācību plānu tieši Tev, lai palīdzētu Tev sasniegt savus mērķus!',
            ChooseYourPlan: 'izvēlies savu plānu',
            ChooseYourPlanSubHeader: 'Nav labāka laika kā šodien lai sāktu strādāt pie savien mērķiem 🎯',
            SpecialOffer: 'Īpašais piedāvājums',
            WillBeChargedEveryMonth: 'will be charged every month',
            GetItNow: 'Saņemt tagad',
            SpecialDeal: 'Īpašā -15€ atlaide aktivizēta!',
            OnlyFirstMonthDiscount: '*atlaide attiecas tikai uz pirmo mēnesi',
            Now: 'tagad',
            Later: 'vēlāk',
            ThisOfferValidFor: 'Piedāvājums beidzas: ',
            hours: 'stundas',
            minutes: 'minūtes',
            seconds: 'sekundes',
            OneMonth: '1 mēn.',
            ThreeMonths: '3 mēn.',
            NineMonths: '9 mēn.',
            days: 'd',
            NovemberDealTimer: '🔥 ĪPAŠAIS PIEDĀVĀJUMS -> Visi priekšmeti par 2 cenu! 🔥',
            NovemberDealTimerFull: '🔥 Tikai tagad -> Visi priekšmeti par 2 cenu! 🔥'
        },
    },
})
export default i18n
