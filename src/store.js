import { reactive } from 'vue'

export const store = reactive({
    filteredPrograms: [],
    step: 0,
    lang: 'LT',
    showCTA: true,
    showRecomendations: false,
    showEmailForm: false,
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
    preferredTimeWorkdays: [],
    preferredTimeWeekends: [],
    childLevel: '',
    TIER: '',
    PROFILE1: [],
    PROFILE2: [],
    PROFILE3: [],
    PROFILE4: [],
    selectedPersona: null,
    selectedPlan: null,
    resultUrl: '',
    klaviyoGoal: '',
    klaviyoMotivation: '',
    klaviyoIntensity: '',
    klaviyoStudentLevel: '',
    klaviyoNeededLessons: '',
    openProgramId: null,
    cookieIsSet: false,
    quizAnswers: [],
    quiz: {
        LT: {
            child: [
                {
                    qNo: 1,
                    Q: 'Kurioje klasėje mokaisi?',
                    Ans: [
                        {title: '1 kl.'},
                        {title: '2 kl.'},
                        {title: '3 kl.'},
                        {title: '4 kl.'},
                        {title: '5 kl.'},
                        {title: '6 kl.'},
                        {title: '7 kl.'},
                        {title: '8 kl.'},
                        {title: '9 kl.'},
                        {title: '10 kl.'},
                        {title: '11 kl.'},
                        {title: '12 kl.'}
                    ], component: 'grid' },
                {
                    qNo: 2,
                    Q: 'Kaip vertini savo akademines žinias ir įgūdžius?',
                    Ans: [
                        {title: 'Puikiai, jokių problemų!', img: '/emoji/Q2_A.svg'},
                        {title: 'Viskas kaip ir tvarkoj, bet kartais pasitaiko problemų.', img: '/emoji/Q2_B.svg'},
                        {title: 'Prastai, nuolat stringu.', img: '/emoji/Q2_C.svg'}
                    ],
                    component: 'radio'
                },
                {
                    qNo: 3,
                    Q: 'Kuris iš šių tikslų tau aktualiausias?',
                    Ans: [
                        {title: 'Pasiruošimas egzaminui.'},
                        {title: 'Pažymių pagerinimas ir spragų taisymas.'},
                        {title: 'Asmeninis augimas mane dominančiuose dalykuose.'},
                        {title: 'Subalansuoti mokymąsi su kitais hobiais ir užsiėmimais – laiko valdymas svarbiausia!'}
                    ],
                    component: 'radio'
                },
                {
                  qNo: 4,
                  component: 'firstBenefit'
                },
                {
                    qNo: 5,
                    Q: 'Pažymėk visus dalykus, kurių norėtumei mokytis papildomai',
                    name: 'subjects',
                    Ans: [
                        {title: 'Matematika', value: 'Matematika'},
                        {title: 'Lietuvių k.', value: 'Lietuvių k.'}
                    ],
                    component: 'multi-select'
                },
                {
                    qNo: 6,
                    Q: 'Kaip vertini savo motyvaciją mokytis?',
                    Ans: [
                        {title: 'Labai aukšta, nuolat ieškau būdų tobulėti ir išmokti kažko naujo'},
                        {title: 'Aukšta, dėmesį skiriu kontroliniams, testams ar egzaminams'},
                        {title: 'Vidutinė, noriu pagerinti pažymius, bet kartais tingiu'},
                        {title: 'Prastoka, nebent grafikas labai lankstus'}
                        // 'Mokslai man nėra pagrindinis priorititetas' /// +++ (Socializer Question) +++ ///
                    ],
                    component: 'radio'
                },
                {
                    qNo: 7,
                    Q: 'Koks mokymosi formatas tau tinka labiausiai?',
                    Ans: [
                        {title: 'Pagal mokytojo sudarytą metinę programą.'},
                        {title: 'Pagal mokykloje einamus skyrius.'},
                        {title: 'Abu variantai vienodai svarbūs.'},
                        {title: 'Dar nežinau.'}
                    ],
                    component: 'radio'
                },
                {
                    qNo: 8,
                    Q: 'Kiek laiko per savaitę galėtum skirti vienam dalykui?',
                    Ans: [
                        {title: 'Maždaug 1 valandą per savaitę.'},
                        {title: 'Apie 2 valandas per savaitę.'},
                        {title: 'Daugiau nei 3 valandas per savaitę.'}
                    ],
                    component: 'radio'
                },
                {
                    qNo: 9,
                    Q: 'aaaa Kiek laiko per savaitę galėtum skirti vienam dalykui?',
                    Ans: [
                        {title: 'Maždaug 1 valandą per savaitę.'},
                        {title: 'Apie 2 valandas per savaitę.'},
                        {title: 'Daugiau nei 3 valandas per savaitę.'}
                    ],
                    component: 'radio'
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
                    Q: 'Kurš no šiem mērķiem visvairāk atbilst Tev?',
                    Ans: [
                        'Gribu gatavoties eksāmenam.',
                        'Vēlos uzlabot atzīmes un aizlāpīt zināšanu robus.',
                        'Vēlos veicināt personīgo izaugsmi mācību priekšmetā, kas mani tiešām interesē.',
                        'Gribu mācēt saplānot savu laiku tā, lai skolas dzīve un citas aktivitātes būtu balansā.'
                    ]
                },
                {
                    qNo: 4,
                    Q: 'Atzīmē visus priekšmetus, kurus Tu gribētu mācīties:',
                    Ans: ['Subjects in the template']
                },
                {
                    qNo: 5,
                    Q: 'Kā Tu vērtē savu motivāciju mācīties?',
                    Ans: [
                        'Ļoti augsta, es regulāri meklēju veidus, kā uzlabot zināšanas un iemācīties ko jaunu.',
                        'Augsta, es stundās cītīgi mācos un vienmēr gatavojos kontroldabiem un eksāmeniem.',
                        'Vidēja, es vēlos uzlabot savas atzīmes, bet dažreiz par daudz slinkoju.',
                        'Ne pārāk augsta, jo bieži pietrūkst laika, lai mācītos.'
                        // 'Mācīties nav mana galvenā prioritāte.'
                    ]
                },
                {
                    qNo: 6,
                    Q: 'Kāds mācīšanās formāts Tev der vislabāk?',
                    Ans: [
                        'Mācīties pēc skolotāja sagatavotas programmas.',
                        'Mācīties atbilstoši tematiem, kas šobrīd tiek apgūti skolā.',
                        'Abi augstāk minētie varianti ir vienlīdz labi.',
                        'Īsti nezinu.'
                    ]
                },
                {
                    qNo: 7,
                    Q: 'Cik daudz laika Tu varētu veltīt vienam mācību priekšmetam nedēļā?',
                    Ans: [
                        'Apmēram 1 stundu nedēļā.',
                        'Apmēram 2 stundas nedēļā.',
                        'Vairāk nekā 3 stundas nedēļā.'
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
                        'Abas iespējas ir vienlīdz svarīgas',
                        'Īsti nezinu'
                    ]
                },
                {
                    qNo: 7,
                    Q: 'Cik daudz laika nedēļā Jūsu bērns varētu veltīt vienam priekšmetam?',
                    Ans: [
                        'Apmēram 1 stundu nedēļā',
                        'Apmēram 2 stunas nedēļā',
                        'Vairāk nekā 3 stundas nedēļā'
                    ]
                }
            ]
        },
        EN_IE: {
            child: [
                {
                    id: 'grade',
                    qNo: 1,
                    Q: 'Select child\'s year',
                    Ans: [
                        {title: 'VII'},
                        {title: 'VIII'},
                        {title: 'IX'},
                        {title: 'X'},
                        {title: 'XI'},
                        {title: 'XII'},
                    ],
                    component: 'grid'
                },
                {
                    id: 'goal',
                    qNo: 2,
                    Q: 'What is your primary goal?',
                    Ans: [
                        {title: 'Improve Grades', img: '/emoji/🚀.svg'},
                        {title: 'Maintain High Grades', img: '/emoji/🤓.svg'},
                        {title: 'Certification Prep', img: '/emoji/📝.svg'},
                        {title: 'Prepare for Contest', img: '/emoji/🏅.svg'},
                        {title: 'Something Else', img: '/emoji/🤷_♂️.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'preferredTimeWorkdays',
                    qNo: 3,
                    Q: 'What times you can join lessons during workdays?',
                    component: 'timetable',
                    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                    times: [{from: 3, to: 5, dayPeriod: 'PM'}, {from: 5, to: 7, dayPeriod: 'PM'}, {from: 7, to: 9, dayPeriod: 'PM'}],
                    variableName: 'preferredTimeWorkdays'
                },
                {
                    id: 'preferredTimeWeekends',
                    qNo: 4,
                    Q: 'What times you can join lessons on weekends?',
                    component: 'timetable',
                    days: ['Sat', 'Sun'],
                    times: [{from: 10, to: 12, dayPeriod: 'AM'}, {from: 12, to: 2, dayPeriod: 'PM'}, {from: 2, to: 4, dayPeriod: 'PM'}],
                    variableName: 'preferredTimeWeekends'
                },
                {
                    qNo: 5,
                    component: 'loader'
                },
                { id: 'currentMark',
                    qNo: 6, Q: "Your Child's Current Mark", Ans: [
                        {title: 'A'},
                        {title: 'B'},
                        {title: 'C'},
                        {title: 'D'},
                        {title: 'E'},
                        {title: 'F'}
                    ], component: 'grid'
                },
                { id: 'targetMark',
                    qNo: 7, Q: "Your Child’s Target Mark", Ans: [
                        {title: 'A'},
                        {title: 'B'},
                        {title: 'C'},
                        {title: 'D'},
                        {title: 'E'},
                        {title: 'F'}
                    ], component: 'grid'
                },
                {
                    id: 'studyHours',
                    qNo: 8,
                    Q: 'How many hours a day your child study after school?',
                    Ans: [
                        {title: '0 hours, school is enough', img: '/emoji/😎.svg'},
                        {title: 'Around 1 - 2 hours/day', img: '/emoji/🤓.svg'},
                        {title: 'More than 3 hours/day', img: '/emoji/🔥.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'motivation',
                    qNo: 9,
                    Q: 'What motivates your kid to study?',
                    Ans: [
                        {title: 'Excitement about scoring goals in school', img: '/emoji/🏅.svg'},
                        {title: 'Loves exploring and discovering cool new stuff', img: '/emoji/🧪_.svg'},
                        {title: 'Gets a boost from happy encouragement at home', img: '/emoji/👨_👩_👧_👦.svg'},
                        {title: 'Dreams of awesome careers', img: '/emoji/💼.svg'},
                        {title: 'Having fun with friends while learning', img: '/emoji/🤪.svg'},
                        {title: 'Child is not motivated', img: '/emoji/😶.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'transformMotivation',
                    qNo: 10,
                    Q: 'In what way your child’s motivation transforms over time?',
                    Ans: [
                        {title: 'Motivation disappears', img: '/emoji/🌚.svg'},
                        {title: 'It has up’s and down’s', img: '/emoji/🎢_.svg'},
                        {title: 'It is constant', img: '/emoji/🌞.svg'}
                    ],
                    component: 'radio'
                },
                {
                    qNo: 11,
                    component: 'firstBenefit'
                },
                {
                    id: 'focus',
                    qNo: 12,
                    Q: 'How hard is to focus for your child?',
                    Ans: [
                        {title: 'Very easy', img: '/emoji/😊.svg'},
                        {title: 'Easy', img: '/emoji/🙂_.svg'},
                        {title: 'Neutral', img: '/emoji/😶.svg'},
                        {title: 'Hard', img: '/emoji/😑.svg'},
                        {title: 'Very hard', img: '/emoji/🫤.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'focusInClass',
                    qNo: 13,
                    Q: 'Does your kid gets distracted by other students in a class?',
                    Ans: [
                        {title: 'Strongly agree', img: '/emoji/😊.svg'},
                        {title: 'Agree', img: '/emoji/🙂_.svg'},
                        {title: 'Neither agree not disagree', img: '/emoji/😶.svg'},
                        {title: 'Disagree', img: '/emoji/😑.svg'},
                        {title: 'Strongly disagree', img: '/emoji/🫤.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'expectations',
                    qNo: 14,
                    Q: 'As I progress with Mathups I expect my children to feel:',
                    Ans: [
                        {title: 'Confident', img: '/emoji/😎.svg'},
                        {title: 'Happy', img: '/emoji/🤩_.svg'},
                        {title: 'Peaceful', img: '/emoji/😌.svg'},
                        {title: 'Energised', img: '/emoji/⚡️.svg'},
                        {title: 'Other', img: '/emoji/⏩️.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'sessions',
                    qNo: 15,
                    Q: 'How frequently and for what duration are you seeking tutoring sessions?',
                    Ans: [
                        {title: 'Daily', img: '/emoji/😎.svg'},
                        {title: 'Few times a week', img: '/emoji/🤩_.svg'},
                        {title: 'Weekends only', img: '/emoji/😌.svg'},
                        {title: 'Other', img: '/emoji/⏩️.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'learningStyle',
                    qNo: 16,
                    Q: 'Does your child have a preferred learning style?',
                    name: 'learning-styles',
                    Ans: [
                        {title: 'Visual learner', value: 'Visual learner', img: '/emoji/👀.svg'},
                        {title: 'Auditory learner', value: 'Auditory learner', img: '/emoji/👂.svg'},
                        {title: 'Kinesthetic/Tactile Learner', value: 'Kinesthetic/Tactile Learner', img: '/emoji/🫳.svg'},
                        {title: 'Reading/Writing Learner', value: 'Reading/Writing Learner', img: '/emoji/📚️.svg'},
                        {title: 'Social Learner', value: 'Social Learner', img: '/emoji/🙋_♂️️.svg'},
                        {title: 'Solitary/Individual Learner', value: 'Solitary/Individual Learner', img: '/emoji/☝️️.svg'},
                        {title: 'I don’t know', value: 'I don’t know', img: '/emoji/🤷_♀️️.svg'},
                    ],
                    component: 'multi-select'
                },
                {
                    qNo: 17,
                    component: 'final-results'
                }
            ],
            parent: [
                {
                    id: 'grade',
                    qNo: 1,
                    Q: 'Select child\'s year',
                    Ans: [
                        {title: 'VII'},
                        {title: 'VIII'},
                        {title: 'IX'},
                        {title: 'X'},
                        {title: 'XI'},
                        {title: 'XII'},
                    ],
                    component: 'grid'
                },
                {
                    id: 'goal',
                    qNo: 2,
                    Q: "What is your child's primary goal in math?",
                    Ans: [
                        {title: 'Improve Grades', img: '/emoji/🚀.svg'},
                        {title: 'Maintain High Grades', img: '/emoji/🤓.svg'},
                        {title: 'Certification Prep', img: '/emoji/📝.svg'},
                        {title: 'Prepare for Contest', img: '/emoji/🏅.svg'},
                        {title: 'To excel and achieve top performance', img: '/emoji/🔥.svg'},
                        {title: 'Something Else', img: '/emoji/🤷_♂️.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'preferredTimeWorkdays',
                    qNo: 3,
                    Q: 'What time can your child join lessons during workdays?',
                    component: 'timetable',
                    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                    times: [{from: 3, to: 5, dayPeriod: 'PM'}, {from: 5, to: 7, dayPeriod: 'PM'}, {from: 7, to: 9, dayPeriod: 'PM'}],
                    variableName: 'preferredTimeWorkdays'
                },
                {
                    id: 'preferredTimeWeekends',
                    qNo: 4,
                    Q: 'What time can your child join lessons during weekends?',
                    component: 'timetable',
                    days: ['Sat', 'Sun'],
                    times: [{from: 10, to: 12, dayPeriod: 'AM'}, {from: 12, to: 2, dayPeriod: 'PM'}, {from: 2, to: 4, dayPeriod: 'PM'}],
                    variableName: 'preferredTimeWeekends'
                },
                {
                    qNo: 5,
                    component: 'loader'
                },
                { id: 'currentMark',
                    qNo: 6, Q: "What is your child's current average grade in math?", Ans: [
                        {title: 'A (90-100%)'},
                        {title: 'B (80-90%)'},
                        {title: 'C (70-80%)'},
                        {title: 'D (60-70%)'},
                        {title: 'E (50-60%)'},
                        {title: 'F (below 50%)'}
                    ], component: 'grid'
                },
                { id: 'targetMark',
                    qNo: 7, Q: "What math grade do you want your child to achieve?", Ans: [
                        {title: 'A (90-100%)'},
                        {title: 'B (80-90%)'},
                        {title: 'C (70-80%)'},
                        {title: 'D (60-70%)'},
                        {title: 'E (50-60%)'},
                        {title: 'F (below 50%)'}
                    ], component: 'grid'
                },
                {
                    id: 'studyHours',
                    qNo: 8,
                    Q: 'How many hours a day your child study after school?',
                    Ans: [
                        {title: '0 hours, school is enough', img: '/emoji/😎.svg'},
                        {title: 'Around 1 - 2 hours/day', img: '/emoji/🤓.svg'},
                        {title: 'More than 3 hours/day', img: '/emoji/🔥.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'motivation',
                    qNo: 9,
                    Q: 'What motivates your kid to study?',
                    Ans: [
                        {title: 'Excitement about scoring goals in school', img: '/emoji/🏅.svg'},
                        {title: 'Loves exploring and discovering cool new stuff', img: '/emoji/🧪_.svg'},
                        {title: 'Gets a boost from happy encouragement at home', img: '/emoji/👨_👩_👧_👦.svg'},
                        {title: 'Dreams of awesome careers', img: '/emoji/💼.svg'},
                        {title: 'Having fun with friends while learning', img: '/emoji/🤪.svg'},
                        {title: 'Child is not motivated', img: '/emoji/😶.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'transformMotivation',
                    qNo: 10,
                    Q: 'In what way your child’s motivation transforms over time?',
                    Ans: [
                        {title: 'Motivation disappears', img: '/emoji/🌚.svg'},
                        {title: 'It has up’s and down’s', img: '/emoji/🎢_.svg'},
                        {title: 'It is constant', img: '/emoji/🌞.svg'}
                    ],
                    component: 'radio'
                },
                {
                    qNo: 11,
                    component: 'firstBenefit'
                },
                {
                    id: 'focus',
                    qNo: 12,
                    Q: 'How hard is to focus for your child?',
                    Ans: [
                        {title: 'Very easy', img: '/emoji/😊.svg'},
                        {title: 'Easy', img: '/emoji/🙂_.svg'},
                        {title: 'Neutral', img: '/emoji/😶.svg'},
                        {title: 'Hard', img: '/emoji/😑.svg'},
                        {title: 'Very hard', img: '/emoji/🫤.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'focusInClass',
                    qNo: 13,
                    Q: 'Does your kid get distracted by other students in a class?',
                    Ans: [
                        {title: 'Strongly agree', img: '/emoji/😊.svg'},
                        {title: 'Agree', img: '/emoji/🙂_.svg'},
                        {title: 'Neither agree nor disagree', img: '/emoji/😶.svg'},
                        {title: 'Disagree', img: '/emoji/😑.svg'},
                        {title: 'Strongly disagree', img: '/emoji/🫤.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'expectations',
                    qNo: 14,
                    Q: 'As I progress with Mathups I expect my children to feel:',
                    Ans: [
                        {title: 'Confident', img: '/emoji/😎.svg'},
                        {title: 'Happy', img: '/emoji/🤩_.svg'},
                        {title: 'Peaceful', img: '/emoji/😌.svg'},
                        {title: 'Energised', img: '/emoji/⚡️.svg'},
                        {title: 'Other', img: '/emoji/⏩️.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'sessions',
                    qNo: 15,
                    Q: 'How frequently and for what duration are you seeking tutoring sessions?',
                    Ans: [
                        {title: 'Daily', img: '/emoji/😎.svg'},
                        {title: 'Few times a week', img: '/emoji/🤩_.svg'},
                        {title: 'Weekends only', img: '/emoji/😌.svg'},
                        {title: 'Other', img: '/emoji/⏩️.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'learningStyle',
                    qNo: 16,
                    Q: 'Does your child have a preferred learning style?',
                    name: 'learning-styles',
                    Ans: [
                        {title: 'Visual learner', value: 'Visual learner', img: '/emoji/👀.svg'},
                        {title: 'Auditory learner', value: 'Auditory learner', img: '/emoji/👂.svg'},
                        {title: 'Kinesthetic/Tactile Learner', value: 'Kinesthetic/Tactile Learner', img: '/emoji/🫳.svg'},
                        {title: 'Reading/Writing Learner', value: 'Reading/Writing Learner', img: '/emoji/📚️.svg'},
                        {title: 'Social Learner', value: 'Social Learner', img: '/emoji/🙋_♂️️.svg'},
                        {title: 'Solitary/Individual Learner', value: 'Solitary/Individual Learner', img: '/emoji/☝️️.svg'},
                        {title: 'I don’t know', value: 'I don’t know', img: '/emoji/🤷_♀️️.svg'},
                    ],
                    component: 'multi-select'
                },
                {
                    qNo: 17,
                    component: 'final-results'
                }
            ]
        },
        EN_ZA: {
            child: [
                {
                    id: 'grade',
                    qNo: 1,
                    Q: 'Select your grade?',
                    Ans: [
                        {title: '5th'},
                        {title: '6th'},
                        {title: '7th'},
                        {title: '8th'},
                        {title: '9th'},
                        {title: '10th'},
                        {title: '11th'},
                        {title: '12th'},
                    ],
                    component: 'grid'
                },
                {
                    id: 'goal',
                    qNo: 2,
                    Q: "What program do you follow?",
                    Ans: [
                        {title: 'IEB (usually in private schools)', img: '/emoji/🔸.svg'},
                        {title: 'CAPS (usually in government schools)', img: '/emoji/🔹.svg'},
                        {title: 'I don\'t know', img: '/emoji/🔻.svg'},
                    ],
                    component: 'radio'
                },
                {
                    id: 'goal',
                    qNo: 3,
                    Q: 'What is your primary goal?',
                    Ans: [
                        {title: 'Improve Grades', img: '/emoji/🚀.svg'},
                        {title: 'Maintain High Grades', img: '/emoji/🤓.svg'},
                        {title: 'Test Prep', img: '/emoji/📝.svg'},
                        {title: 'Prepare for Contest', img: '/emoji/🏅.svg'},
                        {title: 'Something Else', img: '/emoji/🤷_♂️.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'preferredTimeWorkdays',
                    qNo: 4,
                    Q: 'What times you can join lessons during workdays?',
                    component: 'timetable',
                    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                    times: [{from: 3, to: 5, dayPeriod: 'PM'}, {from: 5, to: 7, dayPeriod: 'PM'}, {from: 7, to: 9, dayPeriod: 'PM'}],
                    variableName: 'preferredTimeWorkdays'
                },
                {
                    id: 'preferredTimeWeekends',
                    qNo: 5,
                    Q: 'What times you can join lessons on weekends?',
                    component: 'timetable',
                    days: ['Sat', 'Sun'],
                    times: [{from: 10, to: 12, dayPeriod: 'AM'}, {from: 12, to: 2, dayPeriod: 'PM'}, {from: 2, to: 4, dayPeriod: 'PM'}],
                    variableName: 'preferredTimeWeekends'
                },
                {
                    qNo: 6,
                    component: 'loader'
                },
                { id: 'currentMark',
                    qNo: 7, Q: "Your Child's Current Mark", Ans: [
                        {title: 'A'},
                        {title: 'B'},
                        {title: 'C'},
                        {title: 'D'},
                        {title: 'E'},
                        {title: 'F'}
                    ], component: 'grid'
                },
                { id: 'targetMark',
                    qNo: 8, Q: "Your Child’s Target Mark", Ans: [
                        {title: 'A'},
                        {title: 'B'},
                        {title: 'C'},
                        {title: 'D'},
                        {title: 'E'},
                        {title: 'F'}
                    ], component: 'grid'
                },
                {
                    id: 'studyHours',
                    qNo: 9,
                    Q: 'How many hours a day your child study after school?',
                    Ans: [
                        {title: '0 hours, school is enough', img: '/emoji/😎.svg'},
                        {title: 'Around 1 - 2 hours/day', img: '/emoji/🤓.svg'},
                        {title: 'More than 3 hours/day', img: '/emoji/🔥.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'motivation',
                    qNo: 10,
                    Q: 'What motivates your kid to study?',
                    Ans: [
                        {title: 'Excitement about scoring goals in school', img: '/emoji/🏅.svg'},
                        {title: 'Loves exploring and discovering cool new stuff', img: '/emoji/🧪_.svg'},
                        {title: 'Gets a boost from happy encouragement at home', img: '/emoji/👨_👩_👧_👦.svg'},
                        {title: 'Dreams of awesome careers', img: '/emoji/💼.svg'},
                        {title: 'Having fun with friends while learning', img: '/emoji/🤪.svg'},
                        {title: 'Child is not motivated', img: '/emoji/😶.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'transformMotivation',
                    qNo: 11,
                    Q: 'In what way your child’s motivation transforms over time?',
                    Ans: [
                        {title: 'Motivation disappears', img: '/emoji/🌚.svg'},
                        {title: 'It has up’s and down’s', img: '/emoji/🎢_.svg'},
                        {title: 'It is constant', img: '/emoji/🌞.svg'}
                    ],
                    component: 'radio'
                },
                {
                    qNo: 12,
                    component: 'firstBenefit'
                },
                {
                    id: 'focus',
                    qNo: 13,
                    Q: 'How hard is to focus for your child?',
                    Ans: [
                        {title: 'Very easy', img: '/emoji/😊.svg'},
                        {title: 'Easy', img: '/emoji/🙂_.svg'},
                        {title: 'Neutral', img: '/emoji/😶.svg'},
                        {title: 'Hard', img: '/emoji/😑.svg'},
                        {title: 'Very hard', img: '/emoji/🫤.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'focusInClass',
                    qNo: 14,
                    Q: 'Does your kid gets distracted by other students in a class?',
                    Ans: [
                        {title: 'Strongly agree', img: '/emoji/😊.svg'},
                        {title: 'Agree', img: '/emoji/🙂_.svg'},
                        {title: 'Neither agree not disagree', img: '/emoji/😶.svg'},
                        {title: 'Disagree', img: '/emoji/😑.svg'},
                        {title: 'Strongly disagree', img: '/emoji/🫤.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'expectations',
                    qNo: 15,
                    Q: 'As I progress with Mathups I expect my children to feel:',
                    Ans: [
                        {title: 'Confident', img: '/emoji/😎.svg'},
                        {title: 'Happy', img: '/emoji/🤩_.svg'},
                        {title: 'Peaceful', img: '/emoji/😌.svg'},
                        {title: 'Energised', img: '/emoji/⚡️.svg'},
                        {title: 'Other', img: '/emoji/⏩️.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'sessions',
                    qNo: 16,
                    Q: 'How frequently and for what duration are you seeking tutoring sessions?',
                    Ans: [
                        {title: 'Daily', img: '/emoji/😎.svg'},
                        {title: 'Few times a week', img: '/emoji/🤩_.svg'},
                        {title: 'Weekends only', img: '/emoji/😌.svg'},
                        {title: 'Other', img: '/emoji/⏩️.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'learningStyle',
                    qNo: 17,
                    Q: 'Does your child have a preferred learning style?',
                    name: 'learning-styles',
                    Ans: [
                        {title: 'Visual learner', value: 'Visual learner', img: '/emoji/👀.svg'},
                        {title: 'Auditory learner', value: 'Auditory learner', img: '/emoji/👂.svg'},
                        {title: 'Kinesthetic/Tactile Learner', value: 'Kinesthetic/Tactile Learner', img: '/emoji/🫳.svg'},
                        {title: 'Reading/Writing Learner', value: 'Reading/Writing Learner', img: '/emoji/📚️.svg'},
                        {title: 'Social Learner', value: 'Social Learner', img: '/emoji/🙋_♂️️.svg'},
                        {title: 'Solitary/Individual Learner', value: 'Solitary/Individual Learner', img: '/emoji/☝️️.svg'},
                        {title: 'I don’t know', value: 'I don’t know', img: '/emoji/🤷_♀️️.svg'},
                    ],
                    component: 'multi-select'
                },
                {
                    qNo: 18,
                    component: 'final-results'
                }
            ],
            parent: [
                {
                    id: 'grade',
                    qNo: 1,
                    Q: 'Select children\'s grade?',
                    Ans: [
                        {title: '7th'},
                        {title: '8th'},
                        {title: '9th'},
                        {title: '10th'},
                        {title: '11th'},
                        {title: '12th'},
                    ],
                    component: 'grid'
                },
                {
                    id: 'goal',
                    qNo: 2,
                    Q: "What program do you follow?",
                    Ans: [
                        {title: 'IEB (usually in private schools)', img: '/emoji/🔸.svg'},
                        {title: 'CAPS (usually in government schools)', img: '/emoji/🔹.svg'},
                        {title: 'I don\'t know', img: '/emoji/🔻.svg'},
                    ],
                    component: 'radio'
                },
                {
                    id: 'goal',
                    qNo: 3,
                    Q: "What is your child's primary goal in math?",
                    Ans: [
                        {title: 'Improve Grades', img: '/emoji/🚀.svg'},
                        {title: 'Maintain High Grades', img: '/emoji/🤓.svg'},
                        {title: 'Test Prep', img: '/emoji/📝.svg'},
                        {title: 'Prepare for Contest', img: '/emoji/🏅.svg'},
                        {title: 'To excel and achieve top performance', img: '/emoji/🔥.svg'},
                        {title: 'Something Else', img: '/emoji/🤷_♂️.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'preferredTimeWorkdays',
                    qNo: 4,
                    Q: 'What time can your child join lessons during workdays?',
                    component: 'timetable',
                    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                    times: [{from: 3, to: 5, dayPeriod: 'PM'}, {from: 5, to: 7, dayPeriod: 'PM'}, {from: 7, to: 9, dayPeriod: 'PM'}],
                    variableName: 'preferredTimeWorkdays'
                },
                {
                    id: 'preferredTimeWeekends',
                    qNo: 5,
                    Q: 'What time can your child join lessons during weekends?',
                    component: 'timetable',
                    days: ['Sat', 'Sun'],
                    times: [{from: 10, to: 12, dayPeriod: 'AM'}, {from: 12, to: 2, dayPeriod: 'PM'}, {from: 2, to: 4, dayPeriod: 'PM'}],
                    variableName: 'preferredTimeWeekends'
                },
                {
                    qNo: 6,
                    component: 'loader'
                },
                { id: 'currentMark',
                    qNo: 7, Q: "Your Child’s Current Mark", Ans: [
                        {title: '100-90%'},
                        {title: '89-80%'},
                        {title: '79-70%'},
                        {title: '69-60%'},
                        {title: '59-50%'},
                        {title: '49-40%'},
                        {title: '39-0%'},
                    ], component: 'grid'
                },
                { id: 'targetMark',
                    qNo: 8, Q: "Your Child’s Target Mark?", Ans: [
                        {title: '100-90%'},
                        {title: '89-80%'},
                        {title: '79-70%'},
                        {title: '69-60%'},
                        {title: '59-50%'},
                        {title: '49-40%'},
                        {title: '39-0%'},
                    ], component: 'grid'
                },
                {
                    id: 'studyHours',
                    qNo: 9,
                    Q: 'How many hours a day your child study after school?',
                    Ans: [
                        {title: '0 hours, school is enough', img: '/emoji/😎.svg'},
                        {title: 'Around 1 - 2 hours/day', img: '/emoji/🤓.svg'},
                        {title: 'More than 3 hours/day', img: '/emoji/🔥.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'motivation',
                    qNo: 10,
                    Q: 'What motivates your kid to study?',
                    Ans: [
                        {title: 'Excitement about scoring goals in school', img: '/emoji/🏅.svg'},
                        {title: 'Loves exploring and discovering cool new stuff', img: '/emoji/🧪_.svg'},
                        {title: 'Gets a boost from happy encouragement at home', img: '/emoji/👨_👩_👧_👦.svg'},
                        {title: 'Dreams of awesome careers', img: '/emoji/💼.svg'},
                        {title: 'Having fun with friends while learning', img: '/emoji/🤪.svg'},
                        {title: 'Child is not motivated', img: '/emoji/😶.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'transformMotivation',
                    qNo: 11,
                    Q: 'In what way your child’s motivation transforms over time?',
                    Ans: [
                        {title: 'Motivation disappears', img: '/emoji/🌚.svg'},
                        {title: 'It has up’s and down’s', img: '/emoji/🎢_.svg'},
                        {title: 'It is constant', img: '/emoji/🌞.svg'}
                    ],
                    component: 'radio'
                },
                {
                    qNo: 12,
                    component: 'firstBenefit'
                },
                {
                    id: 'focus',
                    qNo: 13,
                    Q: 'How hard is to focus for your child?',
                    Ans: [
                        {title: 'Very easy', img: '/emoji/😊.svg'},
                        {title: 'Easy', img: '/emoji/🙂_.svg'},
                        {title: 'Neutral', img: '/emoji/😶.svg'},
                        {title: 'Hard', img: '/emoji/😑.svg'},
                        {title: 'Very hard', img: '/emoji/🫤.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'focusInClass',
                    qNo: 14,
                    Q: 'Does your kid get distracted by other students in a class?',
                    Ans: [
                        {title: 'Strongly agree', img: '/emoji/😊.svg'},
                        {title: 'Agree', img: '/emoji/🙂_.svg'},
                        {title: 'Neither agree nor disagree', img: '/emoji/😶.svg'},
                        {title: 'Disagree', img: '/emoji/😑.svg'},
                        {title: 'Strongly disagree', img: '/emoji/🫤.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'expectations',
                    qNo: 15,
                    Q: 'As I progress with Mathups I expect my children to feel:',
                    Ans: [
                        {title: 'Confident', img: '/emoji/😎.svg'},
                        {title: 'Happy', img: '/emoji/🤩_.svg'},
                        {title: 'Peaceful', img: '/emoji/😌.svg'},
                        {title: 'Energised', img: '/emoji/⚡️.svg'},
                        {title: 'Other', img: '/emoji/⏩️.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'sessions',
                    qNo: 16,
                    Q: 'How frequently and for what duration are you seeking tutoring sessions?',
                    Ans: [
                        {title: 'Daily', img: '/emoji/😎.svg'},
                        {title: 'Few times a week', img: '/emoji/🤩_.svg'},
                        {title: 'Weekends only', img: '/emoji/😌.svg'},
                        {title: 'Other', img: '/emoji/⏩️.svg'}
                    ],
                    component: 'radio'
                },
                {
                    id: 'learningStyle',
                    qNo: 17,
                    Q: 'Does your child have a preferred learning style?',
                    name: 'learning-styles',
                    Ans: [
                        {title: 'Visual learner', value: 'Visual learner', img: '/emoji/👀.svg'},
                        {title: 'Auditory learner', value: 'Auditory learner', img: '/emoji/👂.svg'},
                        {title: 'Kinesthetic/Tactile Learner', value: 'Kinesthetic/Tactile Learner', img: '/emoji/🫳.svg'},
                        {title: 'Reading/Writing Learner', value: 'Reading/Writing Learner', img: '/emoji/📚️.svg'},
                        {title: 'Social Learner', value: 'Social Learner', img: '/emoji/🙋_♂️️.svg'},
                        {title: 'Solitary/Individual Learner', value: 'Solitary/Individual Learner', img: '/emoji/☝️️.svg'},
                        {title: 'I don’t know', value: 'I don’t know', img: '/emoji/🤷_♀️️.svg'},
                    ],
                    component: 'multi-select'
                },
                {
                    qNo: 18,
                    component: 'final-results'
                }
            ]
        },
    }
})
