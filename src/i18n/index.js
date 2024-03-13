import { createI18n } from 'vue-i18n'

const host = window.location.hostname;
const domainLocaleMap = {
    'quiz.memby.lv': 'lv',
    'quiz.digiklase.lt': 'lt',
    'quiz.mathups.com': 'en_ie',
    'quiz.mathsup.co.za': 'en_za',
    'quiz2.memby.org': 'en_za',
    'localhost': 'en_za'
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
            NovemberDealTimer: '💣 JUODASIS <span style="color: #6B6B6B; text-decoration: line-through">PENKTADIENIS</span> LAPKRITIS -> 60% nuolaida!',
            NovemberDealTimerFull: '💣 JUODASIS <span style="color: #6B6B6B; text-decoration: line-through">PENKTADIENIS</span> LAPKRITIS -> 60% nuolaida visų dalykų planui!',
            SelectAll: 'Pasirinkti visus',
            SelectState: '-- Select state --',
            JustAMoment: 'Just a moment...',
            GettingThingsReady: 'Getting things ready for you',
            JourneyBegins: 'A Journey Through Infinite Learning Begins',
            TrustedBy: 'Trusted by <b>15 554</b> students',
            KidHatedMath: 'My kid hated math, but Mathups made it a breeze. Now, they get it, and I get less stress. Win-win!',
            CollectingResults: 'Collecting your results',
            AnalysingYourResults: 'Analysing your results',
            GeneratingPersonalisedPlan: 'Generating personalised plan',
            ExpertCare: 'You are in expert care',
            MathsUpHelped: 'Mathups has helped more than <b>5 554</b> students all over Ireland',
            WelcomeH1: 'Užpildykite trumpą klausimyną ir <br /> gaukite specialiai JUMS <span>Digiklasės <br />pasiūlymą</span>',
            ChooseRole: 'Pasirinkite, kas esate',
            StudentRole: 'Esu mokinys',
            ParentRole: 'Esu tėvelis/globėjas',
            EmailFormH1: 'Rekomenduosime planą, kuris padėtų pasiekti visų užsibrėžtų tikslų',
            EmailFormWhereToSentResults: 'Kur atsiųsti rezultatus?',
            EmailFormShareResults: 'Pasidalink rezultatais su tėveliais/globėjais ir gauk <span>15 EUR nuolaidą</span> narystei įsigyti!',
            EmailFormWeWillRecommendPlan: 'Rekomenduosime planą, kuris padėtų pasiekti visų užsibrėžtų tikslų',
            EmailFormYourEmail: 'Tavo el. paštas',
            EmailFormYourParentEmail: 'Tėvelio/globėjo el. paštas',
            EmailFormPrivacyNotice: 'Jūsų asmens duomenys pas mus yra saugūs. Beje, nesiunčiame šlamšto ir nesidaliname el. pašto adresais su trečiosiomis šalimis.',
            EmailFormPrivacyValue: 'Sutinku su privatumo politika ir naudojimosi taisyklėmis',
            EmailPrivacyLabel: 'Sutinku su<a href="https://digiklase.lt/privatumo-politika" target="_blank">privatumo politika ir naudojimosi taisyklėmis</a>',
            EmailForm13YearsValue: 'Man jau yra 13 metų',
            EmailForm13YearsLabel: 'Man jau yra 13 metų',
            EmailFormNoticeIfLessThan13Years: '*Jeigu tau mažiau nei 13 m., paprašyk tėvelių/globėjų pagalbos užpildyti apklausą.',
            Continue: 'Tęsti',
            Skip: 'Praleisti',
            BenefitPageH1: 'Pamokos, kurių nesinorės pramiegoti',
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
            ThisOfferValidFor: 'Šis piedāvājums ir spēkā: ',
            hours: 'stundas',
            minutes: 'minūtes',
            seconds: 'sekundes',
            OneMonth: '1 mēn.',
            ThreeMonths: '3 mēn.',
            NineMonths: '9 mēn.',
            days: 'd',
            NovemberDealTimer: '💣  Melnā <span style="color: #6B6B6B; text-decoration: line-through">PIEKTDIENA</span> NOVEMBRIS -> 60% atlaide!',
            NovemberDealTimerFull: '💣  Melnā <span style="color: #6B6B6B; text-decoration: line-through">PIEKTDIENA</span> NOVEMBRIS -> 60% atlaide visu priekšmetu plānam!',
            SelectAll: 'Select all',
            SelectState: '-- Select state --',
            JustAMoment: 'Just a moment...',
            GettingThingsReady: 'Getting things ready for you',
            JourneyBegins: 'A Journey Through Infinite Learning Begins',
            TrustedBy: 'Trusted by <b>15 554</b> students',
            KidHatedMath: 'My kid hated math, but Mathups made it a breeze. Now, they get it, and I get less stress. Win-win!',
            CollectingResults: 'Collecting your results',
            AnalysingYourResults: 'Analysing your results',
            GeneratingPersonalisedPlan: 'Generating personalised plan',
            ExpertCare: 'You are in expert care',
            MathsUpHelped: 'Mathups has helped more than <b>5 554</b> students all over Ireland',
            WelcomeH1: 'Šī ir visefektīvākā mācību programma, <br /> lai uzlabotu savas sekmes –<span>lai uzlabotu <br> savas atzīmes</span>',
            ChooseRole: 'Izveido mācību plānu',
            StudentRole: 'Esmu skolēns',
            ParentRole: 'Esmu vecāks/ aizbildnis',
            EmailFormH1: 'Mēs esam izveidojuši personalizētu mācību programmu, kas palīdzēs Tev sasniegt savus mērķus.',
            EmailFormWhereToSentResults: 'Kādu e-pastu Tu vēlies izmantot, lai pieslēgtos?',
            EmailFormShareResults: 'Aizsūti vecākiem savus rezultātus un saņem <span>15 EUR atlaides</span> kodu abonementam!',
            EmailFormWeWillRecommendPlan: 'Mēs esam izveidojuši personalizētu mācīšanās programmu, kas palīdzēs Jūsu bērnam sasniegt mērķus.',
            EmailFormYourEmail: 'E-pasts',
            EmailFormYourParentEmail: 'Vecāku / aizbildņa e-pasts',
            EmailFormPrivacyNotice: 'Tavi personīgie dati ir drošībā ar mums. Kā arī mēs nesūtām SPAM ziņas un nedalāmies ar e-pastu adresēm, ar trešajām personām.',
            EmailFormPrivacyValue: 'Es piekrītu lietošanas nosacījumiem un privātuma politikai',
            EmailPrivacyLabel: 'Es piekrītu<a href="https://memby.lv/privatuma-politika" target="_blank">lietošanas nosacījumiem un privātuma politikai</a>',
            EmailForm13YearsValue: 'Es esmu jau 14 gadus vecs',
            EmailForm13YearsLabel: 'Es esmu jau 14 gadus vecs',
            EmailFormNoticeIfLessThan13Years: '*Ja Tev vēl nav 14 gadu, palūdz vecākam/aizbildnim aizpildīt aptauju par Tevi',
            Continue: 'Turpināt',
            Skip: 'Izlais',
            BenefitPageH1: 'Nodarbības, kuras Tu negribēsi palaist garām',
        },
        en_ie: {
            Title: 'Mathups - quiz',
            Description: 'Quiz',
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
            NovemberDealTimer: '💣 JUODASIS <span style="color: #6B6B6B; text-decoration: line-through">PENKTADIENIS</span> LAPKRITIS -> 60% nuolaida!',
            NovemberDealTimerFull: '💣 JUODASIS <span style="color: #6B6B6B; text-decoration: line-through">PENKTADIENIS</span> LAPKRITIS -> 60% nuolaida visų dalykų planui!',
            WelcomeH1: 'Fill out a short questionnaire <br /> and get specially <span>MathUps <br />offer</span>',
            ChooseRole: 'Choose role',
            StudentRole: 'Student',
            ParentRole: 'Parent',
            EmailFormH1: 'We’ve created a personalised plan that will help your child to achieve their goal.',
            EmailFormWhereToSentResults: 'What email would you like to use to access it?',
            EmailFormWeWillRecommendPlan: 'We’ve created a personalised plan that will help you to achieve your goal.',
            EmailFormYourEmail: 'Your email',
            EmailFormYourParentEmail: 'Email',
            EmailFormPrivacyNotice: 'Your personal data is safe with us. By the way, we do not send spam or share emails. email addresses with third parties.',
            EmailFormPrivacyValue: 'I agree to get future information from Mathups',
            EmailPrivacyLabel: 'I agree to the <a href="https://mathups.com/privacy-policy" target="_blank">Privacy policy</a>',
            EmailForm13YearsValue: 'I agree to get future information from Mathups',
            EmailForm13YearsLabel: 'I agree to get future information from Mathups',
            EmailFormNoticeIfLessThan13Years: '',
            Continue: 'Continue',
            Skip: 'Skip',
            SelectAll: 'Select all',
            SelectState: '-- Select state --',
            JustAMoment: 'Just a moment...',
            GettingThingsReady: 'Getting things ready for you',
            JourneyBegins: ' A Journey Through Infinite Learning Begins',
            TrustedBy: 'Trusted by <b>5 554</b> students',
            KidHatedMath: 'My kid hated math, but Mathups made it a breeze. Now, they get it, and I get less stress. Win-win!',
            CollectingResults: 'Collecting your results',
            AnalysingYourResults: 'Analysing your results',
            GeneratingPersonalisedPlan: 'Generating personalised plan',
            ExpertCare: 'You are in expert care',
            MathsUpHelped: 'Mathups has helped more than <b>5 554</b> students all over Ireland',
            BenefitPageH1: 'Tutors who help your child to achieve their goals'
        },
        en_za: {
            Title: 'Mathsup - quiz',
            Description: 'Quiz',
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
            NovemberDealTimer: '💣 JUODASIS <span style="color: #6B6B6B; text-decoration: line-through">PENKTADIENIS</span> LAPKRITIS -> 60% nuolaida!',
            NovemberDealTimerFull: '💣 JUODASIS <span style="color: #6B6B6B; text-decoration: line-through">PENKTADIENIS</span> LAPKRITIS -> 60% nuolaida visų dalykų planui!',
            WelcomeH1: 'Fill out a short questionnaire <br /> and get specially <span>MathsUp <br />offer</span>',
            ChooseRole: 'Choose role',
            StudentRole: 'Student',
            ParentRole: 'Parent',
            EmailFormH1: 'We’ve created a personalised plan that will help your child to achieve their goal.',
            EmailFormWhereToSentResults: 'What email would you like to use to access it?',
            EmailFormWeWillRecommendPlan: 'We’ve created a personalised plan that will help you to achieve your goal.',
            EmailFormYourEmail: 'Your email',
            EmailFormYourParentEmail: 'Email',
            EmailFormPrivacyNotice: 'Your personal data is safe with us. By the way, we do not send spam or share emails. email addresses with third parties.',
            EmailFormPrivacyValue: 'I agree to get future information from MathsUp',
            EmailPrivacyLabel: 'I agree to the <a href="https://mathsup.co.za/privacy-policy" target="_blank">Privacy policy</a>',
            EmailForm13YearsValue: 'I agree to get future information from MathsUp',
            EmailForm13YearsLabel: 'I agree to get future information from MathsUp',
            EmailFormNoticeIfLessThan13Years: '',
            Continue: 'Continue',
            ContinueWithTrial: 'Continue and Start Free Trial',
            ContinueWithPaidTrial: 'Try 7 days for R20!',
            Skip: 'Skip',
            SelectAll: 'Select all',
            SelectState: '-- Select state --',
            JustAMoment: 'Just a moment...',
            GettingThingsReady: 'Getting things ready for you',
            JourneyBegins: ' A Journey Through Infinite Learning Begins',
            TrustedBy: 'Trusted by <b>5 554</b> students',
            KidHatedMath: 'My kid hated math, but MathsUp made it a breeze. Now, they get it, and I get less stress. Win-win!',
            CollectingResults: 'Collecting your results',
            AnalysingYourResults: 'Analysing your results',
            GeneratingPersonalisedPlan: 'Generating personalised plan',
            ExpertCare: 'You are in expert care',
            MathsUpHelped: 'MathsUp has helped more than <b>5 554</b> students all over South Africa',
            BenefitPageH1: 'Your teacher: <span class="text-blue">Sandile Mathebula</span>'
        }
    },
})
export default i18n
