<script setup>
import { reactive, computed } from 'vue'
import { Collapse } from 'vue-collapsed'

import { store } from '../store'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import SectionCTA from './SecondBenefit.vue'
import ProgramSlide from './ProgramSlide.vue'
import { ref } from 'vue'
import { vElementVisibility } from '@vueuse/components'

const allPlansURL = 'https://app.digiklase.lt/plans/choose'

const selectedPlanURL = () => {
    let subjectsString
    let url
    let planID
    if (store.selectedSubjects.length === 1) {
        planID = 1
    } else if (store.selectedSubjects.length === 2) {
        planID = 5
    } else {
        planID = 4
    }
    if (store.selectedSubjects.length >= 3) {
        url = `https://app.digiklase.lt/plans/choose?class=${store.selectedClass}&plan=${planID}`
    } else {
        subjectsString = store.selectedSubjects.join(',')
        url = `https://app.digiklase.lt/plans/choose?class=${store.selectedClass}&plan=${planID}&subjects=${subjectsString}`
    }

    return url
}
const target = ref(null)
const isOfferVisible = ref(false)
function onOfferVisibility(state) {
    isOfferVisible.value = state
}
const footerTarget = ref(null)
const isFooterVisible = ref(false)
function onFooterVisibility(state) {
    isFooterVisible.value = state
}
// const fakeArr = [0, 1, 2, 3]
const settings = {
    itemsToShow: 4,
    snapAlign: 'start',
    breakpoints: {
        0: {
            itemsToShow: 1
        },
        // 700px and up
        700: {
            itemsToShow: 2
        },
        // 1024 and up
        1024: {
            itemsToShow: 4
        }
    }
}
const singleSlideSettings = {
    itemsToShow: 1,
    snapAlign: 'start',
    pauseAutoplayOnHover: true,
    autoplay: 3000,
    wrapAround: true
}
const storiesCarousel = {
    itemsToShow: 1,
    snapAlign: 'start',
    pauseAutoplayOnHover: true,
    autoplay: 3000,
    wrapAround: true
}
const testimSettings = {
    snapAlign: 'center',
    pauseAutoplayOnHover: true,
    autoplay: 3000,
    wrapAround: true,
    breakpoints: {
        0: {
            itemsToShow: 1.4
        },
        // 700px and up
        700: {
            itemsToShow: 2.8
        },
        // 1024 and up
        1024: {
            itemsToShow: 3.8
        }
    }
}

const playVideoHandler = () => {
    if (!document.getElementById('videoHow').playing) {
        document.querySelector('.play-btn').classList.add('isPlaying')
        document.querySelector('.pause-btn').classList.add('isPlaying')
        document.getElementById('videoHow').play()
    }
}
const pauseVideoHandler = () => {
    document.querySelector('.play-btn').classList.remove('isPlaying')
    document.querySelector('.pause-btn').classList.remove('isPlaying')
    document.getElementById('videoHow').pause()
}

const storiesArray = [
    {
        head: 'Patricijos mama:',
        body: 'Labai noriu pasidžiaugti atradusi Digiklasę. Po kelių Digiklasės pamokų mūsų Patricija mokykloje gavo pirmą dešimtuką iš matematikos. Rodės, kad iš laimės pakils iki dangaus, sakė, kad tai tik dėka Digiklasės. Mokytojai labai aiškiai išaiškina, moka įdomiai vesti pamokas, kurias tikrai įdomu klausytis! Aš, kaip mama, matydama vyresnėlės pažangą moksluose, užregistruosiu dar ir mažylę į Digiklasę. Ačiū Digiklasės mokytojams, kurie moka gerai išaiškinti, ko nesupranta vaikai ir motyvuoja kuo geriau mokytis.',
        foot: 'Patricijos (7 klasė) mama Vita'
    },
    {
        head: 'Ievos istorija',
        body: 'Per 2 metus išmokau labai daug, to net neįmanoma nusakyti žodžiais. Per visą laikotarpį man digiklasė tapo ne tik mokymosi priemone, bet ir viena didele šeima. Ne tik pagerinau savo pažymius ir tikrai padidinau savo egzaminų rezultatus, bet taip pat išmokau kai ko, kas yra daug vertingiau negu rezultatai ar skaičiai. Per tuos 2 metus išmokau vertinti mažus dalykus gyvenime, pasidžiaugti savo sėkme ir nenuvertinti savęs, net jei viskas vyksta ne pagal planą. Sutikau begalę nuostabių ir šiltų žmonių, kurie mane motyvavo kiekvieną dieną nepasiduoti ir siekti daugiau, negu pati galiu įsivaizduoti. Dar kartelį noriu iš visos širdies padėkoti visiems mokytojams už pagalbą, atsidavimą 1000% ir nuolatinį tikėjimą savo mokiniais.',
        foot: 'Ieva, Palangos senoji gimnazija, buvusi Digiklasės mokinė'
    },
    {
        head: 'Sibilės istorija',
        body: 'Šarūno matematikos pamokos mane įkvėpė nepasiduoti ir siekti geresnių rezultatų mokantis. Dėka šio mokytojo, vos per mėnesį sugebėjau savo matematikos pažymį pasikelti net trimis balais. Matydama tokius rezultatus, nusprendžiau mokytis daugiau dalykų Digiklasėje, o mokytojai mokykloje pastebėjo mano gerėjančius rezultatus. Digiklasėje ne tik įgyjau daugiau žinių, bet ir sutikau fainus žmones, kurie mane priimė kaip šeima.',
        foot: '11-okė Sibilė, Panevėžio Juozo Miltinio gimnazija'
    },
    {
        head: 'Karolis dalinasi',
        body: 'Devintoje klasėje pradėjau svajoti apie medicinos studijas, todėl labai džiaugiuosi, kad tokia motyvuotų ir išsilavinusių mokytojų komanda buvo šalia nuo pat pradžių. Įvairūs konspektai, virtualios pamokos ir jauki digiklasiečių kompanija tapo mano laisvalaikiu! Pauliaus pamokose dėstomais biologijos universitetinio lygio pagrindais buvo tikras malonumas, o į Austėjos sveikatos mokslų pamokas jungiausi iš įvairiausių pasaulio kraštų, kad tik galėčiau išnagrinėti dar vieno paciento ligą.',
        foot: 'Karolis, Kaišiadorių Algirdo Brazausko gimnazija, buvęs Digiklasės mokinys'
    },
    {
        head: 'Pauliaus istorija',
        body: 'Digiklasė yra nepakeičiamas mokymosi įrankis, kurį naudoju jau tris metus. Ši platforma padėjo man atrasti savo ateities karjerą ir rasti mane dominančias sritis, leisdama mokytis savo tempu. Jos interaktyvumas ir modernios technologijos pagerino mano pažymius - džiaugiuosi, kad per naudojimąsi Digiklase mano pažymiai pakilo net per du balus.',
        foot: 'Paulius, 11 klasė, Panevėžio Juozo Miltinio gimnazija'
    }
]

const isFaqHidden = reactive({
    isFaqHidden: true
})
const questions = reactive([
    {
        title: 'Kiek kainuoja „Digiklasės“ pamokos?',
        answer: '<p>Yra 3 skirtingi planai. Galima pasirinkti:</p><p>– Vieną pamoką (nuo 22,00 EUR/mėn.)</p><p>– Dvi pamokas (nuo 44,00 EUR/mėn.)</p><p>– Visas pamokas ir visus būrelius (nuo 49,00 EUR/mėn.)</p><br/><p>Į kainą taip pat įskaičiuoti pamokų transliacijų įrašai ir papildoma asmeninė pagalba mokiniams.</p><br/>Atkreipkite dėmesį, kad pasirinkus apmokėjimą kortele, pinigai nuskaitomi automatiškai kas 30 dienų. Automatinius nuskaitymus galima atšaukti. <a href="https://help.memby.org/lt/articles/6265406-kas-yra-pasikartojantys-mokejimai" target="_blank">Sužinoti daugiau</a></p>',
        isExpanded: false // Initial value
    },
    {
        title: 'Kas tie pasikartojantys mokėjimai?',
        answer: '<p>Digiklasėje veikia pasikartojantys mokėjimai, kai pasirinkus apmokėjimą kortele pinigai nuskaičiuojami automatiškai kas 30 dienų. Žinoma, automatinius nuskaitimus galima atšaukti, o šį modelį pasirinkome tam, kad įsigijus Digiklasės narystę ir pasirinkus apmokėjimą kortele, jums nereikėtų rūpintis pasikartojančiais mokėjimais ir narystė tęstųsi be jokių trikdžių. <a href="https://help.memby.org/lt/articles/6265406-kas-yra-pasikartojantys-mokejimai" target="_blank" >Sužinoti daugiau</a></p>',
        isExpanded: false
    },
    {
        title: 'Ar „Digiklasėje“ mokomos temos sutampa su mokykloje mokomomis temomis?',
        answer: '<p>Per visus mokslo metus Digiklasėje praeiname visą bendrąją programą. Visgi, tai – individualus klausimas kiekvienam mokiniui. Viskas priklauso nuo mokyklos ir programos, kuria vadovaujamasi pačioje mokykloje.</p><p>Taip pat, dažniausiai mokiniams duodame balsuoti už kitos pamokos temą. Tokiu būdu tema bus paranki didžiajai daliai moksleivių. Jeigu pastebime, kad balsų pasiskirstymas per didelis – darome daugiau pamokų norint patenkinti visų grupių poreikius.</p>',
        isExpanded: false
    },
    {
        title: 'Ar galima užduoti klausimus pamokos metu?',
        answer: '<p>Taip! Yra 2 būdai:</p><p>1) Galima užduoti klausimą susirašinėjimo lange.</p><p>2) Galima pakelti ranką ir gyvai (balsu) užduoti klausimą mokytojui.</p>',
        isExpanded: false
    },
    {
        title: 'Kaip prisijungti į „Digiklasę“?',
        answer: '<p>1. Kai išsirinksite norimas pamokas, mūsų kainų puslapyje pasirinkite labiausiai patinkantį planą.</p><p>2. Atlikite saugų ir paprastą mokėjimą bei užbaikite nesudėtingą registraciją į mokymosi platformą.</p><p>3. Prisijunkite į pamokas ir džiaukitės gerėjančiais rezultatais.</p>',
        isExpanded: false
    },
    {
        title: 'Nuo kelintos klasės galima mokytis „Digiklasėje“?',
        answer: 'Mokome 1–12 klasių mokinius.',
        isExpanded: false
    },
    {
        title: 'Kaip prisijungti prie „Discord“ bendruomenės?',
        answer: '<p>Prisijungus prie savo <a href="https://app.digiklase.lt/login" target="_blank">paskyros</a>, puslapio apačioje rasite <a href="https://discord.com/invite/VqhjZeUNG4" target="_blank">„Discord“</a> programėlę ir dešinėje pusėje esantį mygtuką <a href="https://discord.com/invite/VqhjZeUNG4" target="_blank">„Connect“</a>.</p>',
        isExpanded: false
    },
    {
        title: 'Ar jau įvykusių pamokų įrašai kainuoja papildomai?',
        answer: '<p>Ne, viskas yra įskaičiuota į planą, tad drąsiai galite žiūrėti nusipirktų pamokų įrašus.</p>',
        isExpanded: false
    },
    {
        title: 'Ar pamokos vyksta grupėmis, ar individualiai?',
        answer: '<p>Pamokos vyksta nedidelėmis grupėmis.</p>',
        isExpanded: false
    },
    {
        title: 'Ar ruošiate valstybiniams brandos egzaminams?',
        answer: '<p>Taip, ruošiame. Dvyliktokai pas mus gali ruoštis specialiose VBE pamokose, skirtose anglų kalbos, biologijos, chemijos, fizikos, geografijos, istorijos, lietuvių kalbos ir matematikos egzaminų pasiruošimui.</p>',
        isExpanded: false
    },
    {
        title: 'Kokiu laiku vyksta pamokos?',
        answer: '<p>Pamokos vyksta darbo dienomis nuo 16:00 iki 20:00 val. Detalesnė informaciją rasite mūsų <a href="https://digiklase.lt/tvarkarastis" target="_blank">tvarkaraštyje</a>.</p><p>O šeštadieniais vykdome papildomas pamokas, skirtas VBE pasiruošimui. Jų metu sprendžiame ir analizuojame egzamino uždavinius.</p>',
        isExpanded: false
    },
    {
        title: 'Kaip nuskaičiuojami pinigai nuo kortelės?',
        answer: '<p>Pasirinkus 1 mėn. planą, po 30 d. planas bus atnaujinamas ir pinigai nuskaitomi automatiškai. Norint sustabdyti narystę, automatinį pratęsimą reikia atšaukti nustatymuose. Jei tavo planas yra terminuotas (3 ar 9 mėn.), pinigai bus automatiškai nuskaičiuojami kas 30 dienų iki kol planas pasibaigs. Terminuotam planui pasibaigus galite sustabdyti automatinį atnaujinimą arba tęsti dar mėnesiui už tą pačią mėnesinę kainą (ir taip kol nesustabdysite)! Daugiau apie <a href="https://help.memby.org/lt/articles/6265406-kas-yra-pasikartojantys-mokejimai" target="_blank">pasikartojančius mokėjimus</a>.</p><p>P.S. visa tai negalioja mokėjimams per „Paysera“.</p>',
        isExpanded: false
    },
    {
        title: 'Ar galima pasikeisti užsakytą planą?',
        answer: '<p>Galima tik pasikeisti iš pigesnio plano į brangesnį. Iš brangesnio plano pasikeisti į pigesnį galimybės nėra.</p>',
        isExpanded: false
    },
    {
        title: 'Kur pažiūrėti koks planas užsakytas ir kokia galiojimo trukmė?',
        answer: '<p>Tai gali pasitikrinti savo paskyros nustatymuose, jei nepavyksta – drąsiai rašyk mums ir padėsime tai padaryti.</p>',
        isExpanded: false
    }
])

const isOnlyOneTier = () => {
    if (
        store.TIER0.length > 0 &&
        store.TIER1.length === 0 &&
        store.TIER2.length === 0 &&
        store.TIER3.length === 0
    ) {
        return true
    }

    if (
        store.TIER0.length === 0 &&
        store.TIER1.length > 0 &&
        store.TIER2.length === 0 &&
        store.TIER3.length === 0
    ) {
        return true
    }

    if (
        store.TIER0.length === 0 &&
        store.TIER1.length === 0 &&
        store.TIER2.length > 0 &&
        store.TIER3.length === 0
    ) {
        return true
    }

    if (
        store.TIER0.length === 0 &&
        store.TIER1.length === 0 &&
        store.TIER2.length === 0 &&
        store.TIER3.length > 0
    ) {
        return true
    }
    return false
}
const isTopRecomendation = computed(() => {
    const TIER0 = () => {
        if (isOnlyOneTier()) {
            return true
        }
    }
    const TIER1 = () => {
        if (isOnlyOneTier()) {
            return true
        } else if (store.TIER0.length === 0 && store.TIER1.length > 0) {
            return true
        } else {
            return false
        }
    }
    const TIER2 = () => {
        if (isOnlyOneTier()) {
            return true
        }
    }
    const TIER3 = () => {
        if (isOnlyOneTier()) {
            return true
        }
    }
    return {
        TIER0,
        TIER1,
        TIER2,
        TIER3
    }
})

switch (store.selectedPersona) {
    case 'Ambitious student':
        store.selectedPersonaLT = 'Ambicinga(-s)'
        break
    case 'Exam-oriented':
        store.selectedPersonaLT = 'Orientuota(-s) į egzaminus'
        break

    case 'Busy multitasker':
        store.selectedPersonaLT = 'Užsiėmusi(-ęs) devyndarbė(-is)'
        break
    case 'Struggling':
        store.selectedPersonaLT = 'Sunkiai sekasi'
        break
    default:
        break
}

const handleAccordion = (selectedIndex) => {
    questions.forEach((_, index) => {
        questions[index].isExpanded = index === selectedIndex ? !questions[index].isExpanded : false
    })
}
const showAllFaqs = (event) => {
    event.target.style.display = 'none'
    isFaqHidden.isFaqHidden = false
}
const getCurrentYear = () => {
    const dateobj = new Date()

    return dateobj.getFullYear()
}
</script>

<template>
    <header>
        <div class="content">
            <img class="logo" src="../assets/images/digiklase.svg" alt="" />
            <div>
                <a :href="selectedPlanURL()" target="_blank" class="cta-btn"
                    >Įsigyti narystę<img src="../assets/images/arrow-right.svg" alt=""
                /></a>
            </div>
        </div>
    </header>
    <div class="wrapper yellow">
        <div class="container">
            <h1>Rekomenduojame mokytis pagal šias programas:</h1>
            <carousel v-bind="settings" class="carousel">
                <slide v-for="item in store.recomendationsArrTIER0" :key="item">
                    <ProgramSlide
                        :isTopRecomendation="isTopRecomendation.TIER0"
                        :picture="item.values.Picture"
                        :subject="item.values.Subject"
                        :programTitle="item.values.ProgramName"
                        :teacherName="item.values.TeacherName"
                        :teacherImage="item.values.TeacherImage"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur magnam impedit voluptates nihil consectetur, expedita nulla nostrum sed voluptate facere soluta earum dolores nesciunt ut."
                        :lessonsCount="item.values.LessonsPerWeek"
                    />
                </slide>

                <slide v-for="item in store.recomendationsArrTIER1" :key="item">
                    <ProgramSlide
                        :isTopRecomendation="isTopRecomendation.TIER1"
                        :picture="item.values.Picture"
                        :subject="item.values.Subject"
                        :programTitle="item.values.ProgramName"
                        :teacherName="item.values.TeacherName"
                        :teacherImage="item.values.TeacherImage"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur magnam impedit voluptates nihil consectetur, expedita nulla nostrum sed voluptate facere soluta earum dolores nesciunt ut."
                        :lessonsCount="item.values.LessonsPerWeek"
                    />
                </slide>

                <slide v-for="item in store.recomendationsArrTIER2" :key="item">
                    <ProgramSlide
                        :isTopRecomendation="isTopRecomendation.TIER2"
                        :picture="item.values.Picture"
                        :subject="item.values.Subject"
                        :programTitle="item.values.ProgramName"
                        :teacherName="item.values.TeacherName"
                        :teacherImage="item.values.TeacherImage"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur magnam impedit voluptates nihil consectetur, expedita nulla nostrum sed voluptate facere soluta earum dolores nesciunt ut."
                        :lessonsCount="item.values.LessonsPerWeek"
                    />
                </slide>

                <slide v-for="item in store.recomendationsArrTIER3" :key="item">
                    <ProgramSlide
                        :isTopRecomendation="isTopRecomendation.TIER3"
                        :picture="item.values.Picture"
                        :subject="item.values.Subject"
                        :programTitle="item.values.ProgramName"
                        :teacherName="item.values.TeacherName"
                        :teacherImage="item.values.TeacherImage"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur magnam impedit voluptates nihil consectetur, expedita nulla nostrum sed voluptate facere soluta earum dolores nesciunt ut."
                        :lessonsCount="item.values.LessonsPerWeek"
                    />
                </slide>

                <!-- <slide v-for="slide in fakeArr" :key="slide">
                    <ProgramSlide
                        :isTopRecomendation="false"
                        subject="Matematika"
                        programTitle="Title"
                        teacherName="Vardas Pavardė"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur magnam impedit voluptates nihil consectetur, expedita nulla nostrum sed voluptate facere soluta earum dolores nesciunt ut."
                        lessonsCount="2"
                    />
                </slide> -->

                <template #addons>
                    <navigation />
                </template>
            </carousel>
            <div class="content--flex last-section-block" v-if="store.childLevel === 'A'">
                <div class="content--left">
                    <h2>
                        <span>Pagerinsime tavo žinias</span> su įdomesniu ir nestandartiniu turiniu
                    </h2>
                    <p>
                        Tavo pažymiai jau dabar yra neblogi. Todėl mūsų tikslas bus tave dar labiau
                        sudominti ir įtraukti į mokslą su nauja mokymosi medžiaga
                    </p>
                    <a :href="selectedPlanURL()" target="_blank" class="cta-btn"
                        >Įsigyti narystę<img src="../assets/images/arrow-right.svg" alt=""
                    /></a>
                </div>
                <div class="content--right">
                    <img src="../assets/images/your-level-A.svg" class="level-image" alt="" />
                </div>
            </div>
            <div class="content--flex last-section-block" v-if="store.childLevel === 'B'">
                <div class="content--left">
                    <h2>
                        Pasieksi <span>0,5-2 balų geresnius pažymius,</span> vos per 3 mėnesius!
                    </h2>
                    <p>Tavo rezultatą apskaičiavome remdamiesi 7348 panašių mokinių atsakymais</p>
                    <a :href="selectedPlanURL()" target="_blank" class="cta-btn"
                        >Įsigyti narystę<img src="../assets/images/arrow-right.svg" alt=""
                    /></a>
                </div>
                <div class="content--right">
                    <img src="../assets/images/your-level-B.svg" class="level-image" alt="" />
                </div>
            </div>
            <div class="content--flex last-section-block" v-if="store.childLevel === 'C'">
                <div class="content--left">
                    <h2>
                        Pasieksi <span>iki 2 balų geresnius pažymius,</span> vos per 2 mėnesius!
                    </h2>
                    <p>Tavo rezultatą apskaičiavome remdamiesi 5124 panašių mokinių atsakymais</p>
                    <a :href="selectedPlanURL()" target="_blank" class="cta-btn"
                        >Įsigyti narystę<img src="../assets/images/arrow-right.svg" alt=""
                    /></a>
                </div>
                <div class="content--right">
                    <img src="../assets/images/your-level-C.svg" class="level-image" alt="" />
                </div>
            </div>
        </div>
        <img src="../assets/images/bottomVector.svg" class="bottom-vector" alt="Vector" />
    </div>
    <div class="wrapper light">
        <div class="flex-container cards-wrapper">
            <div class="card card--left">
                <h3>Tau reikės:</h3>

                <p>Bent <span>2 val./sav.</span>papildomų grupinių pamokų</p>
                <img src="../assets/images/heart.svg" alt="Heart" />
            </div>
            <div class="card card--middle">
                <p>Bent <span>1 val./sav.</span>praeėjusių pamokų vaizdo įrašų peržiūrėjimo</p>
            </div>
            <div class="card card--right">
                <p>Iki <span>1 val./sav.</span>darbo su asistentais</p>
                <img src="../assets/images/time.svg" alt="Time" />
            </div>
        </div>
    </div>
    <div
        class="wrapper light sticky"
        :class="{ hidden: isFooterVisible }"
        ref="target"
        v-element-visibility="onOfferVisibility"
    >
        <div class="cta-card">
            <div class="header">
                <p>Rekomenduojamas planas:</p>
            </div>
            <div class="content">
                <div class="title">
                    <h3>„Visi mokykliniai dalykai ir visi būreliai“</h3>
                </div>
                <div class="price">
                    <p>Nuo &nbsp;</p>
                    <p><span>49,00 </span>€/mėn.</p>
                </div>
                <div class="action">
                    <a :href="selectedPlanURL()" target="_blank" class="cta-btn"
                        >Įsigyti narystę<img src="../assets/images/arrow-right.svg" alt=""
                    /></a>
                    <a :href="allPlansURL" target="_blank" class="cta-link">Žiūrėti visus planus</a>
                </div>
            </div>
        </div>
    </div>
    <div class="wrapper light">
        <div class="container">
            <h2 class="section-title--small">
                Remdamiesi apklausa nustatėme ir tavo asmenybės tipą:
            </h2>
            <img src="../assets/images/personality.svg" alt="Personality" class="personality-img" />
            <h2 class="section-title blue">{{ store.selectedPersonaLT }}</h2>
            <p class="p-narrow" v-if="store.selectedPersona === 'Ambitious student'">
                You are the Ambitious Student, passionate about science subjects and mathematics.
                Your ambition drives you to seek academic success and personal growth, fueled by
                discipline and determination. You aim for top exam scores and acceptance into your
                dream school or university, using online resources and extracurricular activities to
                pursue your goals.
            </p>
            <p class="p-narrow" v-if="store.selectedPersona === 'Exam-oriented'">
                The Exam Achiever is focused on scoring high marks in exams and getting accepted
                into a dream school or university. Valuing academic success, discipline, and
                self-improvement, they are often frustrated by limited access to quality resources
                and teachers. Actively participating in online sessions and group discussions, they
                seek to excel despite the challenges, blending a love for science, mathematics, and
                non-fiction with a determination to achieve their goals.
            </p>

            <p class="p-narrow" v-if="store.selectedPersona === 'Busy multitasker'">
                You're the Busy Multitasker, always juggling various activities, clubs, and hobbies
                outside of your academics. Success in your interests and passions fuels you, but
                balancing academics can be a challenge. With so much on your plate, efficient
                learning and time management are essential to go from average to high grades. Your
                driven spirit is admirable, but remember, focusing on the quality of what you do can
                sometimes be more beneficial than the quantity.
            </p>
            <p class="p-narrow" v-if="store.selectedPersona === 'Struggling'">
                The Aspiring Achiever seeks academic success but often feels lost without clear
                guidance. They are quick to join lessons if relevant but may lose interest without
                continuous engagement. Balancing a love for gaming or spending time with friends
                with a desire to improve, they need targeted support to thrive.
            </p>
        </div>
    </div>
    <div class="wrapper light">
        <div class="container pb0">
            <h2 class="section-title">Kaip tai veikia?</h2>
            <p>Šis vaizdo įrašas trumpai ir aiškiai papasakos, kaip veikia Digiklasė</p>
            <div class="video-wrapper">
                <div class="play-btn" @click="playVideoHandler">
                    <img src="../assets/images/play-btn.svg" alt="" />
                </div>
                <video id="videoHow" width="100%" height="100%" preload="none">
                    <source src="../assets/video/demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div class="pause-btn" @click="pauseVideoHandler">
                    <img src="../assets/images/pause-btn.svg" alt="" />
                </div>
            </div>
        </div>

        <img class="blue-line-vector" src="../assets/images/blue-line-vector.svg" alt="" />
    </div>
    <div class="wrapper light">
        <div class="flex-container list-section">
            <div class="content--left">
                <img src="../assets/images/pupil.svg" alt="" />
            </div>
            <div class="content--right list-content">
                <h3>Papildomos grupinės<br />pamokos internetu:</h3>
                <ul>
                    <li>Įtraukiantys mokytojai</li>
                    <li>Individualus mokymosi planas</li>
                    <li>Pamokų vaizdo įrašai</li>
                    <li>Prizai už mokymąsi</li>
                    <li>Draugiška kaina</li>
                </ul>
                <SectionCTA :allPlansURL="allPlansURL" :selectedPlanURL="selectedPlanURL" />
                <div class="testimonial">
                    <div class="author">
                        <img src="../assets/images/testimonial-author.svg" alt="" />
                    </div>
                    <div class="text">
                        <p>
                            „Vos per mėnesį sugebėjau savo matematikos pažymį pasikelti net trimis
                            balais“
                        </p>
                        <p><strong>11-okė Sibilė, Panevėžys</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="wrapper yellow overflow-hidden">
        <img class="blue-vector-left-top" src="../assets/images/blue-line-left.svg" alt="" />
        <div class="container container--narrow teachers">
            <h2 class="section-title">Susipažink, tavo būsimi mokytojai:</h2>
            <carousel v-bind="singleSlideSettings" class="teacher-carousel">
                <slide :key="0">
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcset="../assets/images/teachers/Sarunas.png"
                        />
                        <source
                            media="(min-width: 100px)"
                            srcset="../assets/images/teachers/Sarunas-mobile.png"
                        />
                        <img src="../assets/images/teachers/Sarunas.png" alt="Sarunas" />
                    </picture>
                </slide>
                <slide :key="1">
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcset="../assets/images/teachers/Alius.png"
                        />
                        <source
                            media="(min-width: 100px)"
                            srcset="../assets/images/teachers/Alius-mobile.png"
                        />
                        <img src="../assets/images/teachers/Alius.png" alt="Alius" />
                    </picture>
                </slide>
                <slide :key="2">
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcset="../assets/images/teachers/Paulius.png"
                        />
                        <source
                            media="(min-width: 100px)"
                            srcset="../assets/images/teachers/Paulius-mobile.png"
                        />
                        <img src="../assets/images/teachers/Paulius.png" alt="Paulius" />
                    </picture>
                </slide>
                <slide :key="3">
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcset="../assets/images/teachers/Egle.png"
                        />
                        <source
                            media="(min-width: 100px)"
                            srcset="../assets/images/teachers/Egle-mobile.png"
                        />
                        <img src="../assets/images/teachers/Egle.png" alt="Egle" />
                    </picture>
                </slide>
                <slide :key="4">
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcset="../assets/images/teachers/Algis.png"
                        />
                        <source
                            media="(min-width: 100px)"
                            srcset="../assets/images/teachers/Algis-mobile.png"
                        />
                        <img src="../assets/images/teachers/Algis.png" alt="Algis" />
                    </picture>
                </slide>
                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>
            <SectionCTA :allPlansURL="allPlansURL" :selectedPlanURL="selectedPlanURL" />
        </div>
    </div>
    <div class="wrapper light-grey">
        <div class="container container--narrow">
            <div class="review">
                <div class="image">
                    <img src="../assets/images/reviewer.svg" alt="" />
                </div>
                <div class="content">
                    <p>
                        „Devintoje klasėje pradėjau svajoti apie medicinos studijas, todėl labai
                        džiaugiuosi, kad tokia motyvuotų ir išsilavinusių mokytojų komanda buvo
                        šalia nuo pat pradžių. Įvairūs konspektai, virtualios pamokos ir jauki
                        digiklasiečių kompanija tapo mano laisvalaikiu! Pauliaus pamokose dėstomais
                        biologijos universitetinio lygio pagrindais buvo tikras malonumas, o į
                        Austėjos sveikatos mokslų pamokas jungiausi iš įvairiausių pasaulio kraštų,
                        kad tik galėčiau išnagrinėti dar vieno paciento ligą.“
                    </p>
                    <p>
                        <strong
                            >Karolis, Kaišiadorių Algirdo Brazausko gimnazija, buvęs Digiklasės
                            mokinys</strong
                        >
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="wrapper dark">
        <img src="../assets/images/oval-vector.svg" class="oval-vector" alt="" />
        <img src="../assets/images/vector-arrow.svg" class="vector-arrow" alt="" />
        <div class="container pb">
            <h2 class="section-title">Į narystę telpa tiek daug!</h2>
        </div>
        <div class="flex-container container--narrow">
            <div class="membership-card">
                <div class="membership-icon">
                    <img src="../assets/images/emoji/icon-play.svg" alt="" />
                </div>
                <div class="membership-content">
                    <h3>Individualus mokymosi planas</h3>
                </div>
            </div>
            <div class="membership-card">
                <div class="membership-icon">
                    <img src="../assets/images/emoji/icon-book.svg" alt="" />
                </div>
                <div class="membership-content">
                    <h3>Namų darbų pagalba</h3>
                </div>
            </div>
            <div class="membership-card">
                <div class="membership-icon">
                    <img src="../assets/images/emoji/icon-video.svg" alt="" />
                </div>
                <div class="membership-content">
                    <h3>Pamokų įrašai</h3>
                </div>
            </div>
            <div class="membership-card">
                <div class="membership-icon">
                    <img src="../assets/images/emoji/icon-stats.svg" alt="" />
                </div>
                <div class="membership-content">
                    <h3>Lankomumo peržiūra</h3>
                </div>
            </div>
            <div class="membership-card">
                <div class="membership-icon">
                    <img src="../assets/images/emoji/icon-prize.svg" alt="" />
                </div>
                <div class="membership-content">
                    <h3>Taškai ir apdovanojimai</h3>
                </div>
            </div>
            <div class="membership-card">
                <div class="membership-icon">
                    <img src="../assets/images/emoji/icon-hands.svg" alt="" />
                </div>
                <div class="membership-content">
                    <h3>Motyvuojanti bendruomenė</h3>
                </div>
            </div>
        </div>
        <div class="container container--narrow stories-carousel">
            <carousel v-bind="storiesCarousel">
                <slide v-for="(item, index) in storiesArray" :key="item">
                    <div class="story-slide">
                        <div class="story-image">
                            <img :src="'/storiesImages/story-' + index + '.png'" alt="" />
                        </div>
                        <div class="story-body">
                            <h4>{{ item.head }}</h4>
                            <p>{{ item.body }}</p>
                            <h5>{{ item.foot }}</h5>
                        </div>
                    </div>
                </slide>
                <template #addons>
                    <navigation>
                        <template #next>
                            <img src="../assets/images/next-carousel.svg" alt="" />
                        </template>
                        <template #prev>
                            <img src="../assets/images/prev-carousel.svg" alt="" />
                        </template>
                    </navigation>
                </template>
            </carousel>
        </div>
        <div class="container container--narrow">
            <h2 class="section-title">
                <span>Net 98% mokinių sako,</span> kad „Digiklasė“ – veiksmingas būdas efektyviai
                pagerinti akademinius rezultatus.
            </h2>
        </div>
    </div>
    <div class="wrapper dark inner">
        <carousel v-bind="testimSettings" class="testimonials-carousel">
            <slide :key="1">
                <img src="../assets/images/reviews/Review-1.svg" alt="" />
            </slide>
            <slide :key="2">
                <img src="../assets/images/reviews/Review-2.svg" alt="" />
            </slide>
            <slide :key="3">
                <img src="../assets/images/reviews/Review-3.svg" alt="" />
            </slide>
            <slide :key="4">
                <img src="../assets/images/reviews/Review-4.svg" alt="" />
            </slide>
            <slide :key="5">
                <img src="../assets/images/reviews/Review-5.svg" alt="" />
            </slide>
            <slide :key="6">
                <img src="../assets/images/reviews/Review-6.svg" alt="" />
            </slide>
            <template #addons>
                <pagination />
            </template>
        </carousel>
    </div>
    <div class="wrapper dark inner">
        <div class="container container--narrow pb">
            <SectionCTA :allPlansURL="allPlansURL" :selectedPlanURL="selectedPlanURL" />
        </div>
    </div>
    <div class="wrapper light pt page-bottom">
        <div class="container container--narrow">
            <h2 class="section-title">
                Atsakymai į <span>Dažniausiai <br />Užduodamus Klausimus (D.U.K.)</span>
            </h2>
            <div
                v-for="(question, index) in questions"
                :key="question.title"
                class="faq-accordion"
                :class="{ hidden: index >= 3 && isFaqHidden.isFaqHidden }"
            >
                <button @click="() => handleAccordion(index)" class="faq-header">
                    <div>
                        <p>{{ question.title }}</p>
                    </div>
                    <div>
                        <img src="../assets/images/arrow-bottom.svg" alt="V" />
                    </div>
                </button>
                <Collapse :when="questions[index].isExpanded" class="collapse">
                    <div class="faq-body" v-html="question.answer"></div>
                </Collapse>
            </div>
            <button class="btn--secondary" @click="showAllFaqs">Žiūrėti visus</button>
            <h2 class="section-title last-section">
                Prisijunk prie daugiau nei <span>15 000 bendraminčių</span> bendruomenės!
            </h2>
            <div class="pb">
                <SectionCTA :allPlansURL="allPlansURL" :selectedPlanURL="selectedPlanURL" />
            </div>
        </div>
        <img src="../assets/images/elipses.svg" class="footer-elipses" alt="" />
    </div>
    <footer ref="footerTarget" v-element-visibility="onFooterVisibility">
        <div class="container d-flex">
            <div>
                <p>© {{ getCurrentYear() }} Digiklasė. Visos teisės saugomos</p>
            </div>
            <div class="footer-nav">
                <a
                    href="https://digiklase.lt/privatumo-politika"
                    target="_blank"
                    class="footer-link"
                    >Privatumo politika</a
                >
                <a href="https://digiklase.lt/slapukai" target="_blank" class="footer-link"
                    >Slapukų politika</a
                >
            </div>
        </div>
    </footer>
</template>

<style scoped>
header {
    padding: 0 5%;
    height: 65px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 74px;
}
header .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
}
header .logo {
    display: block;
    max-width: 185px;
}
@media (max-width: 576px) {
    header .logo {
        max-width: 125px;
        width: 50%;
    }
    header .content > div {
        width: 50%;
    }
    header .cta-btn {
        white-space: nowrap;
        font-size: 12px;
    }
    header .cta-btn img {
        width: 16px;
    }
}
.carousel {
    margin-bottom: 125px;
}
@media (max-width: 576px) {
    .carousel {
        max-width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
}
.wrapper.pt {
    padding-top: 125px;
}
.wrapper.overflow-hidden {
    overflow: hidden;
}
.wrapper.light {
    background-color: #ffffff;
    position: relative;
    padding-bottom: 10px;
}
.wrapper.yellow {
    position: relative;
}
.wrapper.light-grey {
    position: relative;
    background-color: #eeeff4;
}
.wrapper.dark {
    position: relative;
    background-color: #18191f;
    padding-top: 125px;
}
.wrapper.dark.inner {
    padding-top: 0;
}
.wrapper.dark.inner .carousel {
    width: 100%;
    max-width: 100%;
}
.wrapper.dark.inner .carousel {
    margin-bottom: 0;
}
.wrapper.dark .section-title {
    color: #ffffff;
}
.section-title span {
    color: #4a74eb;
}
.flex-container {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 90%;
    max-width: 1200px;
    padding-bottom: 50px;
    z-index: 10;
}
.container--narrow {
    width: 90%;
    padding: 0;
}
@media (min-width: 992px) {
    .container--narrow {
        width: 65%;
    }
}
.section-title {
    font-size: 42px;
    font-style: normal;
    font-weight: 570;
    line-height: 56px; /* 133.333% */
    z-index: 10;
    position: relative;
}
.section-title--small {
    font-size: 26px;
    font-style: normal;
    font-weight: 570;
    line-height: 36px; /* 138.462% */
    max-width: 750px;
    margin: 0 auto;
}
.section-title.blue {
    color: #4a74eb;
}
.section-title + p {
    text-align: center;
    margin-top: 16px;
}
.blue-line-vector {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
}
.vector-arrow {
    position: absolute;
    left: 0;
    top: 215px;
}
.oval-vector {
    position: absolute;
    top: 120px;
    right: 0;
}
.personality-img {
    display: block;
    margin: 50px auto;
}
.footer-elipses {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    z-index: 1;
}

.video-wrapper {
    position: relative;
    border-radius: 24px;
    box-shadow: 0px 28px 76px 0px rgba(39, 52, 80, 0.12);
    overflow: hidden;
    min-height: 550px;
    margin-top: 50px;
    background-image: url(../assets/images/poster.png);
    background-position: center;
    z-index: 5;
}
@media (max-width: 576px) {
    .video-wrapper {
        min-height: 350px;
    }
}
video {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    /* transform: translate(-50%, -50%); */
    z-index: 10;
    min-width: 100% !important;

    height: 550px !important;
    object-fit: cover;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
}
.p-narrow {
    max-width: 750px;
    margin: 0 auto;
}
.play-btn,
.pause-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
}
.play-btn.isPlaying {
    display: none;
}
.pause-btn {
    display: none;
}
.pause-btn.isPlaying {
    display: block;
}
.btn--secondary {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: #000000;
    border-radius: 56px;
    background-color: transparent;
    border: 1px solid #000;
    padding: 12px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 70px auto 0 auto;
}
.last-section {
    margin-top: 180px;
}
.card {
    width: 100%;
    margin-bottom: 32px;
    border-radius: 12px;
    border: 0.481px solid #d9dbe1;
    box-shadow: 0px 4.809886455535889px 9.619772911071777px 0px rgba(41, 41, 42, 0.07);
    padding: 45px;
    text-align: center;
    transform: translateY(-120px);
}

.card--left {
    background-color: #ffffff;
    position: relative;
}
.card--left img {
    position: absolute;
    left: 32px;
    bottom: -32px;
}
.card--left h3 {
    display: none;
}
@media (min-width: 1025px) {
    .card--left h3 {
        display: block;
        position: absolute;
        left: 0;
        top: -50px;
        font-size: 26px;
        font-weight: 570;
        line-height: 36px;
    }
}

.card--left span {
    color: #ff714b;
}
.card--middle {
    background-color: #f4e140;
}
.card--right {
    background-color: #ff714b;
}
.card.card--right p {
    color: #f4e140;
    display: block;
}
.card--right img {
    position: absolute;
    top: -32px;
    right: 32px;
}
.card p {
    font-size: 16px;
    font-style: normal;
    font-weight: 550;
    line-height: 20px;
    margin: 0;
}
.card p span {
    display: block;
    font-size: 45px;
    font-style: normal;
    font-weight: 570;
    line-height: 50px;
    margin: 8px 0 16px 0;
}
.card:last-child {
    margin-right: 0;
}
@media screen and (max-width: 992px) {
    .cards-wrapper {
        margin-bottom: -100px;
    }
}
@media screen and (min-width: 992px) {
    .cards-wrapper .card {
        width: calc(33.3333% - 32px);
        margin-right: 32px;
        margin-bottom: 0;
    }
}

.sticky {
    transition: 0.5s ease-in-out;
    padding-bottom: 0 !important;
}

@media (max-width: 767.89px) {
    .cta-card {
        padding: 10px 20px !important;
    }
}
.sticky.hidden {
    opacity: 0;
    z-index: -1;
}
@media (min-width: 767.99px) {
    .sticky {
        position: fixed !important;
        bottom: 0px;
        z-index: 100;
        margin-bottom: 0;
        margin: 0 auto;
        width: 100%;
        background-color: transparent !important;
        padding-bottom: 0;
    }

    .sticky .container {
        padding-bottom: 0;
        width: 100%;
    }
    .page-bottom {
        padding-bottom: 150px !important;
    }
}

.cta-card {
    background: #fff;
    box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.1);
    padding: 28px 36px;
    z-index: 10;
    position: relative;
}
.cta-card .title {
    width: 40%;
}
.cta-card .price,
.cta-card .action {
    width: 30%;
}
.cta-card .action {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cta-card .action .cta-btn {
    margin-bottom: 16px;
}
.cta-card .content {
    display: flex;
    flex-wrap: wrap;
}
.cta-card p {
    font-size: 20px;
    line-height: 30px;
}
.cta-card h3 {
    font-size: 30px;
    font-style: normal;
    font-weight: 570;
    line-height: 42px;
}
.cta-card p span {
    font-size: 50px;
    font-weight: 570;
    line-height: 38px;
}
@media screen and (max-width: 1200px) {
    .cta-card .title {
        width: 60%;
        padding-right: 48px;
    }
    .cta-card .price {
        width: 40%;
    }
    .cta-card .action {
        width: 100%;
        flex-direction: row;
        margin-top: 48px;
    }
    .cta-card .action .cta-btn {
        margin-bottom: 0;
        margin-right: 32px;
    }
}
@media screen and (max-width: 768px) {
    .cta-card .title {
        width: 100%;
        padding-right: 0;
        margin-bottom: 48px;
    }
    .cta-card .price {
        width: 100%;
    }
    .cta-card .action {
        width: 100%;
        align-items: center;
    }
    .cta-card .action .cta-btn {
        margin-right: 32px;
    }
}
@media screen and (max-width: 576px) {
    .cta-card .action {
        flex-direction: column;
        align-items: flex-start;
    }
    .cta-card .action .cta-btn {
        margin-right: 0;
        margin-bottom: 32px;
    }
}
.list-section {
    padding-top: 100px;
}
.last-section-block {
    margin-bottom: 150px;
    align-items: center;
}
@media screen and (max-width: 1024px) {
    .last-section-block {
        padding-bottom: 150px;
        margin-bottom: 0;
    }
}
.content--flex {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.content--left {
    width: 100%;
    text-align: left;
    margin-bottom: 48px;
}
.content--left img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
}
.content--left .cta-btn img {
    margin-right: unset;
    margin-left: 16px;
}
.content--left h2 {
    text-align: left;
    font-size: 42px;
    font-style: normal;
    font-weight: 570;
    line-height: 56px;
    margin-bottom: 20px;
}
.content--left h2 span {
    color: #4a74eb;
}
.content--left p {
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
}
.content--left p strong {
    font-weight: 570;
}
.content--right {
    width: 100%;
}
@media (max-width: 576px) {
    .section-title,
    .content--left h2 {
        font-size: 30px;
        line-height: 1.3;
    }
}
@media screen and (min-width: 768px) {
    .content--left {
        width: 50%;
        padding-right: 24px;
        margin-bottom: 0;
    }
    .content--right {
        width: 50%;
    }
}
@media screen and (max-width: 992px) {
    .d-flex.y-center {
        flex-direction: column;
        align-items: flex-start;
    }
    .d-flex.y-center .cta-link {
        margin-top: 16px;
    }
}
.list-content h3 {
    font-size: 32px;
    font-weight: 570;
    line-height: 46px;
}
ul {
    list-style: none;
    margin-top: 30px;
}
ul li {
    padding-left: 32px;
    position: relative;
    min-height: 50px;
    font-size: 18px;
    font-style: normal;
    font-weight: 570;
    line-height: 30px; /* 166.667% */
}
ul li::before {
    content: '';
    background-image: url(../assets/images/tick.svg);
    background-size: 100% 100%;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 0;
}
@media (max-width: 576px) {
    .list-content h3 {
        font-size: 30px;
        line-height: 1.3;
    }
    .list-content .cta-buttons {
        flex-direction: column;
    }
}
@media (min-width: 576px) {
    .list-content .cta-buttons {
        justify-content: flex-start;
    }
}
@media (min-width: 768px) {
    ul li {
        padding-left: 42px;
    }
    ul li::before {
        width: 32px;
        height: 32px;
    }

    .list-content .cta-buttons .cta-btn {
        margin-right: 0;
        margin-top: 32px;
    }
}
.stories-carousel .carousel {
    width: 100%;
    max-width: 100%;
}
.story-slide {
    width: 100%;
}
.story-image {
    width: 100%;
    margin-bottom: 20px;
}
.story-image img {
    width: 100%;
}
.story-body {
    border-radius: 12px;
    background-color: #333;
    padding: 30px;
    text-align: left;
}
.story-body h4 {
    font-size: 26px;
    font-weight: 570;
    line-height: 40px;
    color: #fff;
    margin-top: 0;
}
.story-body p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #fff;
    margin-bottom: 16px;
}
.story-body h5 {
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    color: #fff;
}
@media (min-width: 768px) {
    .story-slide {
        display: flex;
        position: relative;
    }
    .story-image,
    .story-body {
        min-width: 50%;
    }

    .story-body {
        height: fit-content;
        min-width: 60%;
        transform: translate(-90px, 70px);
    }
}
.testimonial {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border-radius: 12px;
    background: rgba(74, 116, 235, 0.1);
    margin-top: 30px;
    margin-bottom: 100px;
}
.testimonial .author {
    margin-right: 20px;
    border-radius: 50%;
    overflow: hidden;
    width: 90px;
}
.testimonial .author img {
    display: block;
    width: 100%;
    width: 55px;
    height: 55px;
}
.testimonial .text p {
    font-size: 16px;
    font-style: normal;

    font-weight: 400;
    line-height: 22px;
    margin-bottom: 8px;
}
.testimonial .text p span {
    font-size: 17px;
    font-style: normal;
    font-weight: 570;
    line-height: 28px;
}
.testimonials-carousel {
    padding-top: 100px;
}
.testimonials-carousel .carousel__viewport {
    overflow: visible;
}
.testimonials-carousel .carousel__slide {
    padding: 16px;
}

.testimonials-carousel .carousel__viewport {
    perspective: 2000px;
}
.testimonials-carousel .carousel__track {
    transform-style: preserve-3d;
}

.testimonials-carousel .carousel__slide--sliding {
    transition: 0.5s;
}

.testimonials-carousel .carousel__slide {
    opacity: 0.6;
    transform: scale(0.9);
}

.testimonials-carousel .carousel__slide--active ~ .carousel__slide {
    transform: scale(0.9);
}

.testimonials-carousel .carousel__slide--prev {
    opacity: 0.6;
    transform: scale(0.95);
}

.testimonials-carousel .carousel__slide--next {
    opacity: 0/6;
    transform: scale(0.95);
}

.testimonials-carousel .carousel__slide--active {
    opacity: 1;
    transform: scale(1.1);
}
@media screen and (max-width: 768px) {
    .testimonial {
        margin-bottom: 0;
    }
}
.review {
    display: flex;
    align-items: center;
    margin: auto;
    padding: 100px 0;
}
.review .image {
    margin-right: 20px;
}
@media screen and (max-width: 576px) {
    .review {
        flex-direction: column;
    }
    .review .image {
        margin-bottom: 32px;
    }
}
.level-image {
    display: block;
    width: 100%;
}
.teachers {
    margin-top: 125px;
    padding-bottom: 150px;
}
.teacher-carousel {
    margin: 50px auto 50px auto;
}
@media screen and (max-width: 768px) {
    .teachers {
        margin-top: 100px;
        padding-bottom: 100px;
    }
}
.membership-card {
    display: flex;
    align-items: center;
    border-radius: 12px;
    border: 2px solid #f4e140;
    background: #fff;
    /* Dark Shadow */
    box-shadow: 0px 10px 20px 0px rgba(41, 41, 42, 0.07);
    min-height: 80px;
    margin-bottom: 12px;
    width: 100%;
    padding: 10px 20px;
    position: relative;
    z-index: 10;
}

.membership-icon {
    margin-right: 16px;
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.membership-content {
    min-height: 60px;
    display: flex;
    align-items: center;
}
.membership-content h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 570;
    line-height: 20px;
}
@media screen and (min-width: 768px) {
    .membership-card {
        width: calc(50% - 36px);
        margin: 0 18px 12px 18px;
    }
}
.faq-accordion:first-of-type {
    margin-top: 80px;
}
.faq-accordion {
    border-bottom: 2px solid #eeeff4;
}
.faq-accordion.hidden {
    display: none;
}
.faq-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    min-height: 70px;
    text-align: left;
}
.faq-header p {
    font-family: 'obviously', sans-serif;

    font-size: 18px;
    font-weight: 570;
    line-height: 30px;
}
.faq-body {
    padding-bottom: 32px !important;
}

h5 {
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 133.333% */
}
.bottom-vector {
    position: absolute;
}
.blue-vector-left-top {
    position: absolute;
    left: 0;
    top: 55px;
}
.d-flex {
    display: flex;
    position: relative;
    z-index: 10;
}
.justify-center {
    justify-content: center;
    align-items: center;
}

.y-center {
    align-items: center;
}
.collapse {
    transition: height 600ms cubic-bezier(0.3, 0, 0.6, 1);
}
footer {
    min-height: 100px;
    background-color: #000000;
    display: flex;
    align-items: center;
}
footer .container {
    padding-bottom: 0;
    display: flex;
    justify-content: space-between;
}
footer p,
footer a {
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    text-decoration: none;
}
footer a:hover {
    text-decoration: underline;
}
.footer-link:first-child {
    margin-right: 60px;
}
@media (max-width: 768px) {
    footer {
        padding: 16px 0;
    }
    footer .container {
        flex-direction: column;
    }
    .footer-link {
        display: block;
        margin: 8px 0;
    }
    .footer-nav {
        order: -1;
        margin-bottom: 16px;
    }
}
.pb {
    padding-bottom: 100px;
}
.pb0 {
    padding-bottom: 0;
}
@media (min-width: 992px) {
    h1 {
        font-size: 32px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 70%;
    }
}
</style>
