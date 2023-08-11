import { reactive } from 'vue'

export const store = reactive({
    step: 0,
    lang: 'LT',
    showCTA: true,
    showRecomendations: false,
    isLoading: false,
    aggreeWithPrivacy: true,
    olderThanThirteen: true,
    isShowingBenefit: false,
    isSubjectNotSelected: true,
    TIER0isRecomended: false,
    TIER1isRecomended: false,
    TIER2isRecomended: false,
    TIER3isRecomended: false,
    EVERYONEisRecomended: false,
    respondent: null,
    selectedClass: null,
    showFirstBenefit: false,
    showSecondBenefit: false,
    childEmail: '',
    isChildEmailEntered: false,
    parentEmail: '',
    selectedSubjects: [],
    childLevel: '',
    TIER: '',
    PROFILE1: [],
    PROFILE2: [],
    PROFILE3: [],
    TIER0: null,
    TIER1: null,
    TIER2: null,
    TIER3: null,
    selectedPersona: null,
    selectedPersonaLT: '',
    recomendationsArrTIER0: [],
    recomendationsArrTIER1: [],
    recomendationsArrTIER2: [],
    recomendationsArrTIER3: [],
    recomendationsArrEVERYONE: [],
    membyIDsArray: [],
    resultUrl: '',
    klaviyoGoal: '',
    klaviyoMotivation: '',
    klaviyoIntensity: '',
    klaviyoStudentLevel: '',
    klaviyoNeededLessons: '',
    quiz: {
        LT: {
            child: [
                { qNo: 1, Q: 'Kurioje klasėje mokaisi?' },
                {
                    qNo: 2,
                    Q: 'Kaip vertini savo akademines žinias ir įgūdžius?',
                    Ans: [
                        'Puikiai, jokių problemų!',
                        'Viskas kaip ir tvarkoj, bet kartais pasitaiko problemų.',
                        'Prastai, nuolat stringu.'
                    ]
                },
                {
                    qNo: 3,
                    Q: 'Kuris iš šių tikslų tau aktualiausias?',
                    Ans: [
                        'Pasiruošimas egzaminui.',
                        'Pažymių pagerinimas ir spragų taisymas.',
                        'Asmeninis augimas mane dominančiuose dalykuose.',
                        'Subalansuoti mokymąsi su kitais hobiais ir užsiėmimais – laiko valdymas svarbiausia!'
                    ]
                },
                {
                    qNo: 4,
                    Q: 'Pažymėk visus dalykus, kurių norėtumei mokytis papildomai',
                    Ans: ['Subjects in the template']
                },
                {
                    qNo: 5,
                    Q: 'Kaip vertini savo motyvaciją mokytis?',
                    Ans: [
                        'Labai aukšta, nuolat ieškau būdų tobulėti ir išmokti kažko naujo',
                        'Aukšta, dėmesį skiriu kontroliniams, testams ar egzaminams',
                        'Vidutinė, noriu pagerinti pažymius, bet kartais tingiu',
                        'Prastoka, nebent grafikas labai lankstus'
                        // 'Mokslai man nėra pagrindinis priorititetas' /// +++ (Socializer Question) +++ ///
                    ]
                },
                {
                    qNo: 6,
                    Q: 'Koks mokymosi formatas tau tinka labiausiai?',
                    Ans: [
                        'Pagal mokytojo sudarytą metinę programą.',
                        'Pagal mokykloje einamus skyrius.',
                        'Abu variantai vienodai svarbūs.',
                        'Dar nežinau.'
                    ]
                },
                {
                    qNo: 7,
                    Q: 'Kiek laiko per savaitę galėtum skirti vienam dalykui?',
                    Ans: [
                        'Maždaug 1 valandą per savaitę.',
                        'Apie 2 valandas per savaitę.',
                        'Daugiau nei 3 valandas per savaitę.'
                    ]
                }
            ],
            parent: [
                { qNo: 1, Q: 'Kurioje klasėje mokosi jūsų vaikas?' },
                {
                    qNo: 2,
                    Q: 'Kaip įvertintumėte savo vaiko akademines žinias ir įgūdžius?',
                    Ans: [
                        'Puikiai, jokių problemų!',
                        'Viskas kaip ir tvarkoj, bet kartais pasitaiko problemų.',
                        'Reikia nuolatinio įdirbio, problematiška.'
                    ]
                },
                {
                    qNo: 3,
                    Q: 'Kuris tikslas aktualiausias Jūsų vaikui?',
                    Ans: [
                        'Pasiruošimas egzaminui.',
                        'Pažymių pagerinimas ir spragų ištaisymas.',
                        'Asmeninis augimas dominančiuose dalykuose.',
                        'Subalansuoti mokymąsi su kitais hobiais ir užsiėmimais – laiko valdymas svarbiausia!'
                    ]
                },
                {
                    qNo: 4,
                    Q: 'Pažymėkite visus dalykus, kurių papildomos pamokos jus domina:',
                    Ans: ['Matematika', 'Lietuvių kalba', 'Anglų kalba', 'Fizika', 'Chemija']
                },
                {
                    qNo: 5,
                    Q: 'Kaip įvertintumėte savo vaiko motyvaciją mokytis?',
                    Ans: [
                        'Ideali, nuolat ieško ko nors naujo',
                        'Gerai. Daugiausiai dėmesio skiria testų, egzaminų rezultatams.',
                        'Vidutiniškai. Nori pasigerinti pažymius, bet ne visada turi pakankamai noro.',
                        'Priklauso nuo to, kiek laisvo laiko turi nuo kitų veiklų.'
                        // 'Mokslai - ne pagrindinis prioritetas.'
                    ]
                },
                {
                    qNo: 6,
                    Q: 'Koks mokymosi formatas jums tinkantis labiausiai?',
                    Ans: [
                        'Pagal mokytojo sudarytą metinę programą.',
                        'Pagal mokykloje einamus skyrius.',
                        'Abu variantai vienodai svarbūs.',
                        'Nežinau, nėra svarbu.'
                    ]
                },
                {
                    qNo: 7,
                    Q: 'Kiek laiko per savaitę jūsų vaikas galėtų skirti vienam dalykui?',
                    Ans: [
                        'Maždaug po 1 valandą per savaitę.',
                        'Apie 2 valandas per savaitę.',
                        'Daugiau nei 3 valandas per savaitę.'
                    ]
                }
            ]
        },
        LV: {
            child: [
                {
                    qNo: 1,
                    Q: 'Kurā klasē Tu mācies?'
                },
                {
                    qNo: 2,
                    Q: 'Kā Tu vērtē savas mācību zināšanas un prasmes?',
                    Ans: [
                        'Viss lieliski, bez problēmām!',
                        'Viss ir kārtībā, taču dažreiz rodas problēmas.',
                        'Viss slikti, man turpina neveikties.'
                    ]
                },
                {
                    qNo: 3,
                    Q: 'Kurš no šiem mērķiem ir vairāk par Tevi?',
                    Ans: [
                        'Gatavoties eksāmenam',
                        'Uzlabot atzīmes un aizlāpīt citus caurumus',
                        'Personīgā izaugsme lietās, kas mani tiešām interesē',
                        'Balansēt skolu ar citām aktivitātēm - mācēt plānot savu laiku ir atslēga visam!'
                    ]
                },
                {
                    qNo: 4,
                    Q: 'Atzīmē visus priekšmetus, kurus Tu gribētu mācīties:',
                    Ans: ['Subjects in the template']
                },
                {
                    qNo: 5,
                    Q: 'Kā Tu pats vērtē savu motivāciju mācīties?',
                    Ans: [
                        'Ļoti augstu, es regulāri meklēju veidus, kā uzlabot zināšanas un iemācīties ko jaunu.',
                        'Augstu, es pievēršu uzmanību un vienmēr mācos priekš kontroldarbiem un eksāmeniem',
                        'Vidēji, es vēlos uzlabot savas atzīmes, bet citreiz slinkoju par daudz.',
                        'Ne ļoti augstu, ja vien atliek kādreiz vairāk laika, lai mācītos.'
                        // 'Mācīties nav mana galvenā prioritāte.'
                    ]
                },
                {
                    qNo: 6,
                    Q: 'Kāds mācīšanās formāts Tev der vislabāk?',
                    Ans: [
                        'Mācīties pēc pasniedzēja sagatavotas programmas',
                        'Mācīties atbilstoši tematiem, ko šobrīd mācos skolā',
                        'Abas opcijas ir vienlīdz svarīgas',
                        'Īsti nezinu'
                    ]
                },
                {
                    qNo: 7,
                    Q: 'Cik daudz laika Tu varētu veltīt vienam priekšmetam nedēļā?',
                    Ans: [
                        'Apmēram 1 stundu nedēļā',
                        'Apmēram 2 stundas nedēļā',
                        'Vairāk kā 3 stundas nedēļā'
                    ]
                }
            ],
            parent: [
                { qNo: 1, Q: 'Kurā klasē iet Jūsu bērns?' },
                {
                    qNo: 2,
                    Q: 'Kā Jūs vērtētu sava bērna mācību zināšanas un prasmes?',
                    Ans: [
                        'Viss lieliski, bez problēmām!',
                        'Viss ir kārtībā, bet dažreiz rodas problēmas.',
                        'Problemātiski, nepieciešama konstanta mācīšanās.'
                    ]
                },
                {
                    qNo: 3,
                    Q: 'Kuri no šiem mērķiem vairāk attiecas uz Jūsu bērnu?',
                    Ans: [
                        'Gatavoties eksāmenam',
                        'Uzlabot atzīmes un aizlāpīt zināšanu robus',
                        'Personīgā izaugsme lietās, kas tiešām interesē',
                        'Balansēt skolu ar citām aktivitātēm - mācēt plānot savu laiku ir atslēga visam!'
                    ]
                },
                {
                    qNo: 4,
                    Q: 'Atzīmē visus priekšmetus, kuros Jūsu bērns ir ļoti ieinteresēts',
                    Ans: ['Subjects in the template']
                },
                {
                    qNo: 5,
                    Q: 'Kā Jūs vērtētu sava bērna motivāciju mācīties?',
                    Ans: [
                        'Ideāla, vienmēr meklē kā iemācīties kaut ko jaunu.',
                        'Laba. Vislielāko uzmanību pievērš, lai būtu augsti rezultāti kontroldarbos un eksāmenos.',
                        'Vidēja. Bērns vēlas uzlabot savas atzīmes, bet ne vienmēr ir vēlēšanas, ko darīt lietas labā.',
                        'Atkarīgs no tā, cik daudz brīvā laika bērnam atliek no citām aktivitātēm.'
                        // 'Mācīšanās nav galvenā prioritāte.'
                    ]
                },
                {
                    qNo: 6,
                    Q: 'Kāds mācīšanās formāts Jūsu bērnam būtu vispiemērotākais?',
                    Ans: [
                        'Mācīties pēc pasniedzēja sagatavotas programmas',
                        'Mācīties atbilstoši tematiem, ko bērns mācās skolā',
                        'Abas opcijas ir vienlīdz svarīgas',
                        'Īsti nezinu'
                    ]
                },
                {
                    qNo: 7,
                    Q: 'Cik daudz laika nedēļā Jūsu bērns varētu veltīt vienam priekšmetam?',
                    Ans: [
                        'Apmēram 1 stundu nedēļā',
                        'Apmēram 2 stunas nedēļā',
                        'Vairāk kā 3 stundas nedēļā'
                    ]
                }
            ]
        }
    }
})
