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
    respondent: null,
    selectedClass: null,
    showFirstBenefit: false,
    showSecondBenefit: false,
    childEmail: '',
    isChildEmailEntered: false,
    parentEmail: '',
    selectedSubjects: [],
    TIER: '',
    PROFILE1: [],
    PROFILE2: [],
    PROFILE3: [],
    TIER0: null,
    TIER1: null,
    TIER2: null,
    TIER3: null,
    selectedPersona: null,
    recomendationsArrTIER0: [],
    recomendationsArrTIER1: [],
    recomendationsArrTIER2: [],
    recomendationsArrTIER3: [],
    quiz: {
        child: [
            { qNo: 1, Q: 'Kurioje klasėje mokaisi?' },
            {
                qNo: 2,
                Q: 'Kaip vertini savo matematikos žinias ir įgūdžius?',
                Ans: [
                    'Matematika ir aš puikiai sutariame, jokių problemų!',
                    'Viskas kaip ir tvarkoj, bet kartais pasitaiko problemų.',
                    'Visiškai atskiri pasauliai, nuolat stringu.'
                ]
            },
            {
                qNo: 3,
                Q: 'Kuris iš šių tikslų labiausiai atitinka tave?',
                Ans: [
                    'Siekiu asmeninio augimo dalykuose, kurie mane domina ir sekasi.',
                    'Noriu patikras ir egzaminus išlaikyti aukščiausiais balais, kad įstočiau į svajonių universitetą.',
                    'Stengiuosi pasigerinti pažymius ir užlopyti mokslo metų eigoje atsiradančias spragas.',
                    'Tikiuosi subalansuoti mokymąsi su kitais hobiais ir užsiėmimais - laiko valdymas svarbiausia!'
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
                    'Motyvacija - mano antras vardas! Nuolat ieškau būtų tobulėti ir išmokti ką nors naujo.',
                    'Neblogai. Daugiausiai dėmesio skiriu geriems kontrolinių, testų, egzaminų rezultatams.',
                    'Vidutiniškai, kaip kada. Noriu pasigerinti pažymius, bet ne visada turiu pakankamai noro. Padėkit!',
                    'Priklauso nuo to, kiek laisvo laiko turiu. Daugiausia motyvacijos jaučiu kai mano grafikas lankstus.'
                ]
            },
            {
                qNo: 6,
                Q: 'Kokio pamokų kurso tipo tikiesi?',
                Ans: [
                    'Svarbu, kad kursas užtikrintų rezultatus, net jei ne visiškai atitinka temas, kurias dabar einu mokykloje.',
                    'Norėčiau, kad pamokos atitiktų mokykloje einamas temas, kad galėčiau geriau joms pasiruošti.',
                    'Abu variantai skamba gerai.',
                    'Dar nežinau.'
                ]
            },
            {
                qNo: 7,
                Q: 'Kokio intensyvumo mokymosi norėtum?',
                Ans: [
                    'Ne intensyvaus. Planuoju mokytis 1-2 kartus per savaitę, kad liktų laiko kitoms veikloms.',
                    'Vidutiniško. Noriu subalansuoto mokymo plano, kuris padėtų siekti savo tikslų, bet esu pasiruošęs padirbėt!',
                    'Intensyvaus! Esu pasiryžęs siekti progreso ir noriu tam skirti tiek laiko, kiek reikės.'
                ]
            }
        ],
        parent: [
            { qNo: 1, Q: 'Kurioje klasėje mokosi jūsų vaikas?' },
            {
                qNo: 2,
                Q: 'Kaip įvertintumėte savo vaiko matematikos žinias ir įgūdžius?',
                Ans: [
                    'Puikiai, jokių problemų!',
                    'Neblogai, tik kartais pasitaiko problemų.',
                    'Reikia nuolatinio įdirbio, problematiška.'
                ]
            },
            {
                qNo: 3,
                Q: 'Su kuriuo iš akademinių tikslų savo vaikui norėtumėte padėti labiausiai?',
                Ans: [
                    'Paskatinti augimą dalykuose, kurie vaikui sekasi ir domina.',
                    'Patikras ir egzaminus išlaikyti aukščiausiais balais, kad įstotų į svajonių universitetą.',
                    'Pasigerinti pažymius ir užlopyti mokslo metų eigoje atsirandančias spragas.',
                    'Subalansuoti mokymąsi su kitais hobiais ir užsiėmimais!'
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
                    'Nebloga. Daugiausiai dėmesio skiria testų, egzaminų rezultatams.',
                    'Vidutiniškai. Nori pasigerinti pažymius, bet ne visada turi pakankamai noro.',
                    'Priklauso nuo to, kiek laisvo laiko turi nuo kitų veiklų.',
                    'Mokslai - ne pagrindinis prioritetas.'
                ]
            },
            {
                qNo: 6,
                Q: 'Kokio pamokų kurso tikitės?',
                Ans: [
                    'Svarbu, kad kursas užtikrintų rezultatus, net jei ne visiškai atitinka temas, kurios dabar mokomos mokykloje.',
                    'Norėčiau, kad pamokos atitiktų mokykloje einamas temas, kad vaikas galėtų geriau joms pasiruošti.',
                    'Abu variantai skamba gerai.',
                    'Nežinau, nėra svarbu.'
                ]
            },
            {
                qNo: 7,
                Q: 'Kokio pamokų intensyvumo tikitės?',
                Ans: [
                    'Ne intensyvaus. Mokytis 1-2 kartus per savaitę, kad liktų laiko kitoms veikloms.',
                    'Vidutiniško. Subalansuotas mokymo planas, kuris padėtų siekti tikslų.',
                    'Intensyvaus! Vaikas yra pasiryžęs siekti progreso ir skirs tiek laiko, kiek reikės'
                ]
            }
        ]
    }
})
