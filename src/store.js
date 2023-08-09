import { reactive } from 'vue'

export const store = reactive({
    step: 0,
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

    quiz: {
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
                Ans: ['Matematika', 'Lietuvių kalba', 'Anglų kalba', 'Fizika', 'Chemija']
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
    }
})
