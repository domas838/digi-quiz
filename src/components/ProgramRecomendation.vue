<script setup>
import { reactive } from 'vue'
import { store } from '../store'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import SectionCTA from './SectionCTA.vue'
import ProgramSlide from './ProgramSlide.vue'
import { ref } from 'vue'
import { vElementVisibility } from '@vueuse/components'
import AccordionFAQ from './AccordionFAQ.vue'
import SuggestedPlan from "./SuggestedPlan.vue";

const allPlansURL = 'https://app.digiklase.lt/plans/choose'

const url = new URL(window.location.href)

const selectedPlanURL = () => {
    let subjectsString
    let url
    let planID
    let baseDomain
    if (store.selectedSubjects.length === 1) {
        if (store.lang === 'LT') {
            planID = 1
        }
        if (store.lang === 'LV') {
            planID = 3
        }
    } else if (store.selectedSubjects.length === 2) {
        if (store.lang === 'LT') {
            planID = 5
        }
        if (store.lang === 'LV') {
            planID = 4
        }
    } else {
        if (store.lang === 'LT') {
            planID = 4
        }
        if (store.lang === 'LV') {
            planID = 6
        }
    }

    if (store.lang === 'LT') {
        baseDomain = 'https://app.digiklase.lt'
    }
    if (store.lang === 'LV') {
        baseDomain = 'https://app.memby.lv'
    }
    if (store.selectedSubjects.length === 1) {
        subjectsString = store.selectedSubjects[0]
        url = `${baseDomain}/plans/choose?class=${store.selectedClass}&planId=${planID}&subject[]=${subjectsString}`
    } else if (store.selectedSubjects.length === 2) {
        subjectsString = store.selectedSubjects.join('&subject[]=')
        url = `${baseDomain}/plans/choose?class=${store.selectedClass}&planId=${planID}&subject[]=${subjectsString}`
    } else {
        url = `${baseDomain}/plans/choose?class=${store.selectedClass}&planId=${planID}`
    }

    return url
}
const target = ref(null)
const isVisible = ref(false)

function onElementVisibility(state) {
  isVisible.value = state
}
const isOfferVisible = ref(false)
function onOfferVisibility(state) {
    isOfferVisible.value = state
}
const footerTarget = ref(null)
const isFooterVisible = ref(false)
function onFooterVisibility(state) {
    isFooterVisible.value = state
}
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
      bodyMobile: '„Po kelių Digiklasės pamokų mūsų Patricija mokykloje gavo pirmą dešimtuką iš matematikos. Digiklasės mokytojai labai aiškiai išaiškina, moka įdomiai vesti pamokas, kurias tikrai įdomu klausytis! Aš, kaip mama, matydama vyresnėlės pažangą moksluose, užregistruosiu dar ir mažylę į Digiklasę. Ačiū Digiklasės mokytojams, kurie moka gerai išaiškinti, ko nesupranta vaikai ir motyvuoja kuo geriau mokytis.',
      foot: 'Patricijos (7 klasė) mama Vita'
    },
    {
        head: 'Ievos istorija',
        body: 'Per 2 metus išmokau labai daug, to net neįmanoma nusakyti žodžiais. Per visą laikotarpį man digiklasė tapo ne tik mokymosi priemone, bet ir viena didele šeima. Ne tik pagerinau savo pažymius ir tikrai padidinau savo egzaminų rezultatus, bet taip pat išmokau kai ko, kas yra daug vertingiau negu rezultatai ar skaičiai. Per tuos 2 metus išmokau vertinti mažus dalykus gyvenime, pasidžiaugti savo sėkme ir nenuvertinti savęs, net jei viskas vyksta ne pagal planą. Sutikau begalę nuostabių ir šiltų žmonių, kurie mane motyvavo kiekvieną dieną nepasiduoti ir siekti daugiau, negu pati galiu įsivaizduoti. Dar kartelį noriu iš visos širdies padėkoti visiems mokytojams už pagalbą, atsidavimą 1000% ir nuolatinį tikėjimą savo mokiniais.',
      bodyMobile: '„Per 2 metus išmokau labai daug, to net neįmanoma nusakyti žodžiais. Per visą laikotarpį man digiklasė tapo ne tik mokymosi priemone, bet ir viena didele šeima. Ne tik pagerinau savo pažymius ir tikrai padidinau savo egzaminų rezultatus, bet taip pat išmokau kai ko, kas yra daug vertingiau negu rezultatai ar skaičiai.“',
      foot: 'Ieva, Palangos senoji gimnazija, buvusi Digiklasės mokinė'
    },
    {
        head: 'Sibilės istorija',
        body: 'Šarūno matematikos pamokos mane įkvėpė nepasiduoti ir siekti geresnių rezultatų mokantis. Dėka šio mokytojo, vos per mėnesį sugebėjau savo matematikos pažymį pasikelti net trimis balais. Matydama tokius rezultatus, nusprendžiau mokytis daugiau dalykų Digiklasėje, o mokytojai mokykloje pastebėjo mano gerėjančius rezultatus. Digiklasėje ne tik įgyjau daugiau žinių, bet ir sutikau fainus žmones, kurie mane priimė kaip šeima.',
        bodyMobile: '„Šarūno matematikos pamokos mane įkvėpė nepasiduoti ir siekti geresnių rezultatų mokantis. Dėka šio mokytojo, vos per mėnesį sugebėjau savo matematikos pažymį pasikelti net trimis balais. Digiklasėje ne tik įgyjau daugiau žinių, bet ir sutikau fainus žmones, kurie mane priimė kaip šeima.”',
      foot: '11-okė Sibilė, Panevėžio Juozo Miltinio gimnazija'
    },
    {
        head: 'Karolis dalinasi',
        body: 'Devintoje klasėje pradėjau svajoti apie medicinos studijas, todėl labai džiaugiuosi, kad tokia motyvuotų ir išsilavinusių mokytojų komanda buvo šalia nuo pat pradžių. Įvairūs konspektai, virtualios pamokos ir jauki digiklasiečių kompanija tapo mano laisvalaikiu! Pauliaus pamokose dėstomais biologijos universitetinio lygio pagrindais buvo tikras malonumas, o į Austėjos sveikatos mokslų pamokas jungiausi iš įvairiausių pasaulio kraštų, kad tik galėčiau išnagrinėti dar vieno paciento ligą.',
      bodyMobile: '„Pauliaus pamokose dėstomais biologijos universitetinio lygio pagrindais buvo tikras malonumas, o į Austėjos sveikatos mokslų pamokas jungiausi iš įvairiausių pasaulio kraštų, kad tik galėčiau išnagrinėti dar vieno paciento ligą.”',
      foot: 'Karolis, Kaišiadorių Algirdo Brazausko gimnazija, buvęs Digiklasės mokinys'
    },
    {
        head: 'Pauliaus istorija',
        body: 'Digiklasė yra nepakeičiamas mokymosi įrankis, kurį naudoju jau tris metus. Ši platforma padėjo man atrasti savo ateities karjerą ir rasti mane dominančias sritis, leisdama mokytis savo tempu. Jos interaktyvumas ir modernios technologijos pagerino mano pažymius - džiaugiuosi, kad per naudojimąsi Digiklase mano pažymiai pakilo net per du balus.',
      bodyMobile: '„Digiklasė yra nepakeičiamas mokymosi įrankis, kurį naudoju jau tris metus. Ši platforma padėjo man atrasti savo ateities karjerą ir rasti mane dominančias sritis, leisdama mokytis savo tempu. Jos interaktyvumas ir modernios technologijos pagerino mano pažymius - džiaugiuosi, kad per naudojimąsi Digiklase mano pažymiai pakilo net per du balus.”',
      foot: 'Paulius, 11 klasė, Panevėžio Juozo Miltinio gimnazija'
    }
]
const storiesArrayLV = [
    {
        head: 'Anija:',
        body: 'Liela daļa zina, ka attālinātās mācības nav vieglas un tur ir vajadzīga liela motivācija. Pirms pāris gadiem pie mums ieradās kovids. Es biju spiesta iet mācīties attālināti, un pēdējā gadā (12klase) lielas grūtības sagādāja matemātika, bet par laimi es ieraudzīju reklāmu par matemātikas apgūšanu platformā Memby. Manuprāt, bez šo pasniedzēju palīdzības es nebūtu nokārtojusi valsts eksāmenus. Viņi iemācīja man visnesaprotamākos piemērus un formulas. Saku viņiem lielu paldies un iesaku ik vienam, kuram ir grūtības ar matemātikas piemēriem pamēģināt! Mēneša laikā jau vari apgūt diezgan daudz!',
      bodyMobile: '“Manuprāt, bez šo pasniedzēju palīdzības es nebūtu nokārtojusi valsts eksāmenus. Viņi iemācīja man visnesaprotamākos piemērus un formulas. Saku viņiem lielu paldies un iesaku ik vienam, kuram ir grūtības ar matemātikas piemēriem pamēģināt! Mēneša laikā jau vari apgūt diezgan daudz!”',
      foot: '- Anija Apermane'
    },
    {
        head: 'Elīna:',
        body: 'Pasniedzēji ir jauki, atsaucīgi un izpalīdzīgi. Vienmēr pārliecinājās vai visi saprot tēmu.b Brīžos kad kāds no mācekļiem nesaprot, nebija grūtības izskaidrot tēmu daudz reizes līdz ir iebraucis. Man, kā 12. klases absolventam, ļoti viegli mācīšanos padarija sastādītais grafiks, kas bija 3x nedēļa un ierakstītās stundas, kuras pēc tam pastāvīgi varēju skatīties',
      bodyMobile: '“Pasniedzēji ir jauki, atsaucīgi un izpalīdzīgi. Brīžos kad kāds no mācekļiem nesaprot, nebija grūtības izskaidrot tēmu daudz reizes līdz ir iebraucis. Man, kā 12. klases absolventam, ļoti viegli mācīšanos padarija sastādītais grafiks, kas bija 3x nedēļa un ierakstītās stundas, kuras pēc tam pastāvīgi varēju skatīties”',
      foot: '- Elīna Gailuma'
    },
    {
        head: 'Miks:',
        body: 'Mana pieredze ar Memby ir bijusi ļoti patīkama. Tiešsaistes stundas bijušas aktīvas, saprotamas, interesantas. Pasniedzēji vienmēr paskaidroja katru uzdevumu, ja nu tas nebija skaidrs. Izcils serviss',
      bodyMobile: '“Mana pieredze ar Memby ir bijusi ļoti patīkama. Tiešsaistes stundas bijušas aktīvas, saprotamas, interesantas. Pasniedzēji vienmēr paskaidroja katru uzdevumu, ja nu tas nebija skaidrs. Izcils serviss”',
      foot: '- Miks Kelle'
    },
    {
        head: 'Anija:',
        body: 'Manas zināšanas un pašpārliecība matemātikā uzlabojās ievērojami, kā arī es esmu pārliecināta, ka, bez skolotāja Rolanda palīdzības, man nebūtu izdevies tik veiksmīgi nokārtot matemātikas eksāmenu. Es ļoti novērtēju šīs nodarbības un patiešām priecājos, ka tās izvēlējos!',
      bodyMobile: '“Manas zināšanas un pašpārliecība matemātikā uzlabojās ievērojami, kā arī es esmu pārliecināta, ka, bez skolotāja Rolanda palīdzības, man nebūtu izdevies tik veiksmīgi nokārtot matemātikas eksāmenu. Es ļoti novērtēju šīs nodarbības un patiešām priecājos, ka tās izvēlējos!”',
      foot: '- Anija Siksna, Zentas Mauriņas Grobiņas vidusskola, 12. klase'
    }
]
const faqLT = reactive([
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
const faqLV = reactive([
    {
        title: 'Kad ir vispiemērotākais laiks sākt mācīties Memby?',
        answer: '<p>Tam pavisam nav nozīmes! Memby vari pievienoties mācību sākumā, vidū vai pat uz pašām mācību gada beigām. Mūsu tiešsaistes nodarbības notiek saskaņā ar skolas mācību programmu, taču ir iespēja piekļūt arī iepriekšējo nodarbību ierakstiem pēc nepieciešamības.</p>',
        isExpanded: false
    },
    {
        title: 'Vai nodarbības notiek grupās vai individuāli?',
        answer: '<p>Nodarbības notiek mazās grupās.</p>',
        isExpanded: false
    },
    {
        title: 'Vai Memby apgūstamās tēmas atbilst skolā mācītajam?',
        answer: '<p>Mācību gada laikā mēs Memby ejam cauri visai vispārējai programmai. Tomēr, šis ir jautājums individuāli katram skolēnam atsevišķi. Viss ir atkarīgs no skolas un kādu programmu tā izmanto.</p>',
        isExpanded: false
    },
    {
        title: 'Vai es varu mainīt iegādāto abonementu uz kādu citu?',
        answer: '<p>Ir iespējams samainīt tikai no lētākā abonementa uz dārgāku. Nav opciju samainīt dārgāko abonementu uz lētāku.</p>',
        isExpanded: false
    },
    {
        title: 'Kā tiek nauda noņemta no kartes?',
        answer: '<p>Izvēloties 1 mēneša abonementu, pēc 30 dienām tas tiks atjaunots un nauda tiks automātiski noskaitīta. Lai apturētu abonementu, to nepieciešams atcelt iestatījumos. Ja Jūsu abonements ir fiksēts (3 vai 9 mēneši), tad nauda tiks noskaitīta automātiski ik pēc 30 dienām, līdz beigsies fiksētais termiņš. Kad Jūsu abonements beidzas, Jūs varat apturēt automātisko samaksas ieturēšanu vai turpināt uz vēl vienu mēnesi, par to pašu cenu (kamēr Jūs to apturēsiet)!</p>',
        isExpanded: false
    },
    {
        title: 'Cikos notiek nodarbības?',
        answer: '<p>Nodarbības notiek darba dienās no 16:00 līdz 20:00. Apskati mūsu grafiku plašākai informācijai. Sestdienās notiek centralizēto eksāmenu gatavošanās nodarbības, kur tiek risināti un analizēti eksāmenu uzdevumi.</p>',
        isExpanded: false
    },
    {
        title: 'Vai mēs sagatavojam valsts centralizētajiem eksāmeniem?',
        answer: '<p>Jā, protams, mēs sagatavojam. 12. klases skolēni var sagatavoties ar mums ar speciālizētām CE nodarbībām, priekš bioloģijas, ķīmijas, fizikas, vēstures, latviešu valodas un matemātikas eksāmena.</p>',
        isExpanded: false
    },
    {
        title: 'Vai nodarbību ieraksti, kas ir jau notikuši, ir par papildus samaksu?',
        answer: '<p>Nē, tas viss ir iekļauts abonementā, lai pēc tam droši varētu atkārtoti skatīties iegādātās nodarbības.</p>',
        isExpanded: false
    },
    {
        title: 'Kā es varu pievienoties Discord kopienai?',
        answer: '<p>Kad būsi pieslēdzies ar savu profilu, lapas augšdaļā atradīsi Discord aplikāciju un pogu ‘’pieslēgties’’ pa labi.</p>',
        isExpanded: false
    },
    {
        title: 'Vai ir iespējams mācīties ar Memby no pirmās klases?',
        answer: '<p>Mēs apmācām skolēnus 5.-12. klasei.</p>',
        isExpanded: false
    },
    {
        title: 'Kā pievienoties Memby?',
        answer: '<p>1.Izvēlies, kuras nodarbības vēlēsies apgūt un kurš abonementa veids uzrunā vislabāk mūsu izcenojuma lapā.</p><p>2.Veic drošu, vienkāršu maksājumu un pabeidz ar reģistrēšanos mācīšanās platformā.</p><p>3.Pievienojies nodarbībām un izbaudi kā tas ir - uzlabot rezultātus.</p>',
        isExpanded: false
    },
    {
        title: 'Vai es drīkstu uzdot jautājumus nodarbības laikā?',
        answer: '<p>Jā! Tam ir divi veidi:</p><p>1)Tu vari uzdot jautājumu ziņojumu lodziņā.</p><p>2)Tu vari pacelt roku un uzdot pasniedzējam jautājumu tiešraidē (ar balsi).</p>',
        isExpanded: false
    },
    {
        title: 'Kādi ir periodiskie maksājumi?',
        answer: '<p>Memby ir pieejami periodiskie maksājumi, kad nauda tiek automātiski noskaitīta ik pēc 30 dienām, ja tiek veikta samaksa ar karti. Protams, automātiskie maksājumi var tikt atcelti. Mēs esam izvēlējušies šādu modeli, jo kad Jūs veicat Memby abonementa pirkumu un izvēlaties apmaksāt to ar karti, tad Jums vairs nebūs jāuztraucas par maksājumiem un</p>',
        isExpanded: false
    },
    {
        title: 'Cik maksā nodarbības?',
        answer: '<p>Ir 3 dažādi plāni, no kuriem varat izvēlēties:</p><p>- Viens priekšmets (no EUR 22.00/mēnesī)</p><p>-Divi priekšmeti (no EUR 44.00/mēnesī)</p><p>-Neierobežots skaits priekšmetu ( no EUR 49.00/mēnesī)</p><p>Cenā ir iekļauti arī nodarbību ieraksti un skolēnam individuāla palīdzība pēc nepieciešamības.</p><p>Ņem vērā, ka, ja izvēlies maksāt ar karti, nauda tik noskaitīta automātiski ik pēc 30 dienām. Automātisko maksājumu var atcelt.</p>',
        isExpanded: false
    }
])

const btnLabel = reactive({
    buyNow: 'Įsigyti narystę',
    showAll: 'Žiūrėti visus planus',
    btnLink: selectedPlanURL()
})

if (store.lang === 'LV') {
    btnLabel.buyNow = url.searchParams.has('lmt') ? 'Izmēģināt par 1 EUR' : 'Pirkt abonementu'
    btnLabel.showAll = 'Apskatīt visus'
    btnLabel.btnLink = url.searchParams.has('lmt') ? 'https://app.memby.lv/trial' : selectedPlanURL()
}
switch (store.selectedPersona) {
    case 'Ambitious student':
        if (store.lang === 'LT') {
            store.selectedPersonaTranslation = 'Ambicingasis'
        }
        if (store.lang === 'LV') {
            store.selectedPersonaTranslation = 'Ambiciozs skolēns'
        }
        break
    case 'Exam-oriented':
        if (store.lang === 'LT') {
            store.selectedPersonaTranslation = 'Būsimas šimtukininkas'
        }
        if (store.lang === 'LV') {
            store.selectedPersonaTranslation = 'Eksāmenu iekarotājs'
        }
        break

    case 'Busy multitasker':
        if (store.lang === 'LT') {
            store.selectedPersonaTranslation = 'Amžinai užsiėmęs'
        }
        if (store.lang === 'LV') {
            store.selectedPersonaTranslation = 'Vienlaikus vairāku uzdevumu darītājs'
        }
        break
    case 'Struggling':
        if (store.lang === 'LT') {
            store.selectedPersonaTranslation = 'Atkaklius siekėjas'
        }
        if (store.lang === 'LV') {
            store.selectedPersonaTranslation = 'Centīgais mērķu sasniedzējs'
        }
        break
    default:
        break
}

const getCurrentYear = () => {
    const dateobj = new Date()

    return dateobj.getFullYear()
}
</script>

<template>
  <div>
    <header>
        <div class="content">
            <img v-if="store.lang === 'LT'" class="logo" src="../assets/images/digiklase.svg" alt="" />
            <img v-if="store.lang === 'LV'" class="logo" src="../assets/images/memby.svg" alt="" />
            <div>
                <a :href="selectedPlanURL()" target="_blank" class="cta-btn"
                    >{{ btnLabel.buyNow }}<img src="../assets/images/arrow-right.svg" alt=""
                /></a>
            </div>
        </div>
    </header>
    <div class="wrapper yellow">
        <div class="container">
            <h1 v-if="store.lang === 'LT'">Rekomenduojame mokytis pagal šias programas:</h1>
            <h1 v-if="store.lang === 'LV'">
                Mēs iesakam mācīties atbilstoši sekojošām programmām:
            </h1>
            <carousel v-bind="settings" class="carousel">
                <slide v-for="(item, index) in store.recomendationsArrTIER0" :key="index">
                    <ProgramSlide
                        :index="index"
                        :isTopRecomendation="store.TIER0isRecomended"
                        :picture="item.values.Picture"
                        :subject="item.values.Subject"
                        :programTitle="item.values.ProgramName"
                        :teacherName="item.values.TeacherName"
                        :teacherImage="item.values.TeacherImage"
                        :description="item.values.Description"
                        :lessonsCount="item.values.LessonsPerWeek"
                    />
                </slide>

                <slide v-for="(item, index) in store.recomendationsArrTIER1" :key="index">
                    <ProgramSlide
                        :index="index"
                        :isTopRecomendation="store.TIER1isRecomended"
                        :picture="item.values.Picture"
                        :subject="item.values.Subject"
                        :programTitle="item.values.ProgramName"
                        :teacherName="item.values.TeacherName"
                        :teacherImage="item.values.TeacherImage"
                        :description="item.values.Description"
                        :lessonsCount="item.values.LessonsPerWeek"
                    />
                </slide>

                <slide v-for="(item, index) in store.recomendationsArrTIER2" :key="index">
                    <ProgramSlide
                        :index="index"
                        :isTopRecomendation="store.TIER2isRecomended"
                        :picture="item.values.Picture"
                        :subject="item.values.Subject"
                        :programTitle="item.values.ProgramName"
                        :teacherName="item.values.TeacherName"
                        :teacherImage="item.values.TeacherImage"
                        :description="item.values.Description"
                        :lessonsCount="item.values.LessonsPerWeek"
                    />
                </slide>

                <slide v-for="(item, index) in store.recomendationsArrTIER3" :key="index">
                    <ProgramSlide
                        :index="index"
                        :isTopRecomendation="store.TIER3isRecomended"
                        :picture="item.values.Picture"
                        :subject="item.values.Subject"
                        :programTitle="item.values.ProgramName"
                        :teacherName="item.values.TeacherName"
                        :teacherImage="item.values.TeacherImage"
                        :description="item.values.Description"
                        :lessonsCount="item.values.LessonsPerWeek"
                    />
                </slide>
                <slide v-for="(item, index) in store.recomendationsArrEVERYONE" :key="index">
                    <ProgramSlide
                        :index="index"
                        :isTopRecomendation="store.EVERYONEisRecomended"
                        :picture="item.values.Picture"
                        :subject="item.values.Subject"
                        :programTitle="item.values.ProgramName"
                        :teacherName="item.values.TeacherName"
                        :teacherImage="item.values.TeacherImage"
                        :description="item.values.Description"
                        :lessonsCount="item.values.LessonsPerWeek"
                    />
                </slide>

                <template #addons>
                    <navigation />
                </template>
            </carousel>
            <div
                class="content--flex last-section-block"
                v-if="store.lang === 'LT' && store.childLevel === 'A'"
            >
                <div class="content--left">
                    <h2>
                        <span>Pagerinsime tavo žinias</span> su įdomesniu ir nestandartiniu turiniu
                    </h2>
                    <p>
                        Tavo pažymiai jau dabar yra neblogi. Todėl mūsų tikslas bus tave dar labiau
                        sudominti ir įtraukti į mokslą su nauja mokymosi medžiaga
                    </p>
                    <a :href="selectedPlanURL()" target="_blank" class="cta-btn"
                        >{{ btnLabel.buyNow }}<img src="../assets/images/arrow-right.svg" alt=""
                    /></a>
                </div>
                <div class="content--right">
                    <img src="../assets/images/your-level-A.svg" class="level-image" alt="" />
                </div>
            </div>
            <div
                class="content--flex last-section-block"
                v-if="store.lang === 'LV' && store.childLevel === 'A'"
            >
                <div class="content--left">
                    <h2>
                        <span>Mēs uzlabosim Tavas zināšanas</span> ar daudz interesantāku un
                        nestandarta saturu.
                    </h2>
                    <p>
                        Tavas atzīmes jau ir augstas. Tāpēc mūsu mērķis būs noturēt Tavu interesi un
                        iesaistīt mācīties ar jauniem materiāliem.
                    </p>
                    <a :href="selectedPlanURL()" target="_blank" class="cta-btn"
                        >{{ btnLabel.buyNow }}<img src="../assets/images/arrow-right.svg" alt=""
                    /></a>
                </div>
                <div class="content--right">
                    <img src="../assets/images/your-level-A-LV.svg" class="level-image" alt="" />
                </div>
            </div>
            <div
                class="content--flex last-section-block"
                v-if="store.lang === 'LT' && store.childLevel === 'B'"
            >
                <div class="content--left">
                    <h2>
                        Pasieksi <span>0,5-2 balų geresnius pažymius,</span> vos per 3 mėnesius!
                    </h2>
                    <p>
                        Tavo rezultatą apskaičiavome remdamiesi <strong>7348</strong> panašių
                        mokinių atsakymais
                    </p>
                    <a :href="selectedPlanURL()" target="_blank" class="cta-btn"
                        >{{ btnLabel.buyNow }}<img src="../assets/images/arrow-right.svg" alt=""
                    /></a>
                </div>
                <div class="content--right">
                    <img src="../assets/images/your-level-B.svg" class="level-image" alt="" />
                </div>
            </div>
            <div
                class="content--flex last-section-block"
                v-if="store.lang === 'LV' && store.childLevel === 'B'"
            >
                <div class="content--left">
                    <h2>
                        Tu sasniegsi par <span>0.5-2 atzīmēm augstākus vērtējumus,</span> tikai 3
                        mēnešu laikā!
                    </h2>
                    <p>
                        Mēs izrēķinājām Tavu rezultātu balstoties uz atbildēm no
                        <strong>7348</strong> līdzīgiem skolēniem.
                    </p>
                    <a :href="selectedPlanURL()" target="_blank" class="cta-btn"
                        >{{ btnLabel.buyNow }}<img src="../assets/images/arrow-right.svg" alt=""
                    /></a>
                </div>
                <div class="content--right">
                    <img src="../assets/images/your-level-B-LV.svg" class="level-image" alt="" />
                </div>
            </div>
            <div
                class="content--flex last-section-block"
                v-if="store.lang === 'LT' && store.childLevel === 'C'"
            >
                <div class="content--left">
                    <h2>
                        Pasieksi <span>iki 2 balų geresnius pažymius,</span> vos per 2 mėnesius!
                    </h2>
                    <p>
                        Tavo rezultatą apskaičiavome remdamiesi <strong>5124</strong> panašių
                        mokinių atsakymais
                    </p>
                    <a :href="selectedPlanURL()" target="_blank" class="cta-btn"
                        >{{ btnLabel.buyNow }}<img src="../assets/images/arrow-right.svg" alt=""
                    /></a>
                </div>
                <div class="content--right">
                    <img src="../assets/images/your-level-C.svg" class="level-image" alt="" />
                </div>
            </div>
            <div
                class="content--flex last-section-block"
                v-if="store.lang === 'LV' && store.childLevel === 'C'"
            >
                <div class="content--left">
                    <h2>
                        Tu sasniegsi <span>par 2 atzīmēm augstākus vērtējumus,</span> tikai 2 mēnešu
                        laikā!
                    </h2>
                    <p>
                        Mēs izrēķinājām Tavu rezultātu balstoties uz atbildēm no
                        <strong>5124</strong> līdzīgiem skolēniem.
                    </p>
                    <a :href="selectedPlanURL()" target="_blank" class="cta-btn"
                        >{{ btnLabel.buyNow }}<img src="../assets/images/arrow-right.svg" alt=""
                    /></a>
                </div>
                <div class="content--right">
                    <img src="../assets/images/your-level-C-LV.svg" class="level-image" alt="" />
                </div>
            </div>
        </div>
        <img src="../assets/images/bottomVector.svg" class="bottom-vector" alt="Vector" />
    </div>
    <div class="wrapper light">
        <div class="flex-container cards-wrapper">
            <div class="card card--left">
                <h3 v-if="store.lang === 'LT'">Tau reikės:</h3>
                <h3 v-if="store.lang === 'LV'">Tev vajadzēs</h3>

                <p v-if="store.lang === 'LT'">
                    Bent <span>2 val./sav.</span>papildomų grupinių pamokų
                </p>
                <p v-if="store.lang === 'LV'">Vismaz <span>2h/ nedēļā</span>grupu nodarbībām</p>
                <img src="../assets/images/heart.svg" alt="Heart" />
            </div>
            <div class="card card--middle">
                <p v-if="store.lang === 'LT'">
                    Bent <span>1 val./sav.</span>praeėjusių pamokų vaizdo įrašų peržiūrėjimo
                </p>
                <p v-if="store.lang === 'LV'">
                    Vismaz <span>1h/ nedēļā</span>lai skatītos nodarbību ierakstu video
                </p>
            </div>
            <div class="card card--right">
                <p v-if="store.lang === 'LT'">Iki <span>1 val./sav.</span>darbo su asistentais</p>
                <p v-if="store.lang === 'LV'">Līdz <span>1h/ nedēļā</span>lai strādātu ar asistentiem</p>
                <img src="../assets/images/time.svg" alt="Time" />
            </div>
        </div>
    </div>
  </div>

  <div>

  <SuggestedPlan
      ref="target"
      :btn="btnLabel"
      :is-paid-trial="url.searchParams.has('lmt')"
      v-element-visibility="onElementVisibility"
      :selected-subjects-length="store.selectedSubjects.length"
  />

<!--  <div class="wrapper light">-->
<!--    <div-->
<!--        class="container"-->
<!--        :class="{ sticky: isVisible }"-->
<!--        ref="target"-->
<!--        v-element-visibility="onElementVisibility"-->
<!--    >-->
<!--        <div class="cta-card">-->
<!--            <div class="header">-->
<!--                <p v-if="store.lang === 'LT'">Rekomenduojamas planas:</p>-->
<!--                <p v-if="store.lang === 'LV'">Abonements, ko iesakām</p>-->
<!--            </div>-->
<!--            <div class="content">-->
<!--                <div class="title" v-if="store.lang === 'LT'">-->
<!--                    <h3 v-if="store.selectedSubjects.length === 1">„1 dalyko planas“</h3>-->
<!--                    <h3 v-if="store.selectedSubjects.length === 2">„2 dalykų planas“</h3>-->
<!--                    <h3 v-if="store.selectedSubjects.length >= 3">-->
<!--                        „Visi mokykliniai dalykai ir visi būreliai“-->
<!--                    </h3>-->
<!--                </div>-->
<!--                <div class="title" v-if="store.lang === 'LV'">-->
<!--                    <h3 v-if="store.selectedSubjects.length === 1">„1 TO-DO“</h3>-->
<!--                    <h3 v-if="store.selectedSubjects.length === 2">„2 To-DO“</h3>-->
<!--                    <h3 v-if="store.selectedSubjects.length >= 3">„Visi mokykliniai TO-DO“</h3>-->
<!--                </div>-->
<!--                <div class="price" v-if="store.lang === 'LT'">-->
<!--                    <p>Nuo &nbsp;</p>-->
<!--                    <p v-if="store.selectedSubjects.length === 1"><span>24,45 </span>€/mėn.</p>-->
<!--                    <p v-if="store.selectedSubjects.length === 2"><span>48,90 </span>€/mėn.</p>-->
<!--                    <p v-if="store.selectedSubjects.length >= 3"><span>54,90 </span>€/mėn.</p>-->
<!--                </div>-->
<!--                <div class="price" v-if="store.lang === 'LV'">-->
<!--                    <p>No &nbsp;</p>-->
<!--                    <p v-if="store.selectedSubjects.length === 1"><span>24,45 </span>€/mēnesī</p>-->
<!--                    <p v-if="store.selectedSubjects.length === 2"><span>48,90 </span>€/mēnesī</p>-->
<!--                    <p v-if="store.selectedSubjects.length >= 3"><span>54,90 </span>€/mēnesī</p>-->
<!--                </div>-->
<!--                <div class="action">-->
<!--                    <a :href="selectedPlanURL()" target="_blank" class="cta-btn"-->
<!--                        >{{ btnLabel.buyNow }}<img src="../assets/images/arrow-right.svg" alt=""-->
<!--                    /></a>-->
<!--                    <a :href="allPlansURL" target="_blank" class="cta-link">{{-->
<!--                        btnLabel.showAll-->
<!--                    }}</a>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--  </div>-->
    <div class="wrapper light">
        <div class="container">
            <h2 class="section-title--small" v-if="store.lang === 'LT'">
                Remdamiesi apklausa nustatėme ir tavo asmenybės tipą:
            </h2>
            <h2 class="section-title--small" v-if="store.lang === 'LV'">
                Balstoties uz aptauju, mēs arī noteicām Tavu personības tipu:
            </h2>
            <img
                v-if="store.selectedPersona === 'Ambitious student'"
                src="../assets/images/personality-ambitious.svg"
                alt="Personality"
                class="personality-img"
            />
            <img
                v-if="store.selectedPersona === 'Exam-oriented'"
                src="../assets/images/exam-oriented.svg"
                alt="Personality"
                class="personality-img"
            />
            <img
                v-if="store.selectedPersona === 'Busy multitasker'"
                src="../assets/images/personality-busy-multitasker.svg"
                alt="Personality"
                class="personality-img"
            />
            <img
                v-if="store.selectedPersona === 'Struggling'"
                src="../assets/images/personality-struggling.svg"
                alt="Personality"
                class="personality-img"
            />
            <h2 class="section-title blue">{{ store.selectedPersonaTranslation }}</h2>
            <p
                class="p-narrow"
                v-if="store.lang === 'LT' && store.selectedPersona === 'Ambitious student'"
            >
                Tu esi ambicingasis, mėgstantis gamtos mokslus ir matematiką. Tavo ambicijos skatina
                siekti aukščiausių rezultatų ir nuolatinio asmeninio tobulėjimo. Tam pasitelkiama
                disciplina ir ryžtas. Sieki geriausių egzaminų rezultatų ir įstoti į savo svajonių
                mokyklą ar universitetą. Siekdamas savo tikslų naudojies internetiniais šaltiniais
                ir resursais ar užklasine veikla.
            </p>
            <p
                class="p-narrow"
                v-if="store.lang === 'LV' && store.selectedPersona === 'Ambitious student'"
            >
                Tu esi ambiciozs skolēns, kas aizraujas ar dabaszinātņu priekšmetiem un matemātiku.
                Tavas ambīcijas mudina Tevi tiekties pēc augstiem mācību sasniegumiem un personīgās
                izaugsmes, ko papildina disciplīna un apņēmība. Tavs mērķis ir iegūt maksimāli
                augstākos eksāmenu rezultātus un tikt uzņemtam savā sapņu skolā vai universitātē,
                izmantojot tiešsaistes mācīšanos un papildus skolai nodarbības, lai sasniegtu
                mērķus.
            </p>
            <p
                class="p-narrow"
                v-if="store.lang === 'LT' && store.selectedPersona === 'Exam-oriented'"
            >
                Būsimas šimtukininkas siekia gauti aukštus egzaminų įvertinimus ir įstoti į svajonių
                mokyklą ar universitetą. Vertina akademinę sėkmę, discipliną ir nuolatinį savęs
                tobulinimą. Jie dažnai nusivilia ribotomis galimybėmis gauti kokybiškus resursus ar
                nekvalifikuotą mokytojų pagalbą. Aktyviai dalyvaudami internetiniuose užsiėmimuose
                ir grupinėse diskusijose, jie siekia tobulėti, nepaisydami iššūkių. Meilę gamtos
                mokslams, matematikai ir negrožinei literatūrai derina su ryžtu siekti savo tikslų.
            </p>
            <p
                class="p-narrow"
                v-if="store.lang === 'LV' && store.selectedPersona === 'Exam-oriented'"
            >
                Eksāmenu iekarotājs ir fokusēts sasniegt augstus rezultātus eksāmenos, lai tiktu
                pieņemts savā sapņu skolā vai universitātē. Augstu vērtē mācību panākumus,
                disciplīnu un sevis pilnveidošanu. Bieži ir neapmierinātība, ja nav plaša pieeja
                kvalitatīviem mācīšanās materiāliem un skolotājiem. Aktīvi piedalās tiešsaistes
                nodarbībās un grupu diskusijās. Bieži cenšas izcelties, neskatoties uz
                izaicinājumiem. Apvieno mīlestību pret zinātni, matemātiku, zinātnisko literatūru,
                ar milzīgu apņemšanos sasniegt savus mērķus.
            </p>

            <p
                class="p-narrow"
                v-if="store.lang === 'LT' && store.selectedPersona === 'Busy multitasker'"
            >
                Amžinai užsiėmęs, nuolat žongliruoja įvairiomis veiklomis, būreliais ir pomėgiais -
                dažniai, nesusijusiais su mokslais. Sėkmė tavo pomėgiuose ir užsiėmimuose tave
                skatina tobulėti, tačiau tai suderinti su mokslais gali būti iššūkis. Turint tiek
                daug veiklų, efektyvus mokymasis ir laiko planavimas yra būtinas, kad nuo vidutinių
                pažymių pereitum prie aukštų. Tavo užsidegimas yra žavintis, tačiau nepamiršk, kad
                kartais daugiau dėmesio reikėtų skirti to, ką darai, kokybei, o ne kiekybei.
            </p>
            <p
                class="p-narrow"
                v-if="store.lang === 'LV' && store.selectedPersona === 'Busy multitasker'"
            >
                Tu esi vienlaikus vairāku uzdevumu darītājs, kas vienmēr dara vairākas aktivitātes
                vienlaikus, kā ārpusskolas pulciņi un dažādi hobiji. Panākumi šajās aktivitātēs
                piepilda Tevi, bet apvienot to visu ar mācībām var būt izaicinājums. Tā kā Tev ir
                daudz šo nodarbošanos, efektīva mācīšanās un laika plānošana ir ļoti būtiska, lai no
                viduvējām skolas atzīmēm varētu sasniegt augsta vērtējuma atzīmes. Tava
                nenogurdināmā personība ir apbrīnojama, taču atceries, ka fokusējoties darīt lietas
                kvalitatīvi, var būt vērtīgāk kā uz kvantitāti.
            </p>
            <p
                class="p-narrow"
                v-if="store.lang === 'LT' && store.selectedPersona === 'Struggling'"
            >
                Atkaklus siekėjas siekia akademinės sėkmės, bet dažnai jaučiasi pasimetęs, kai
                neturi aiškių gairių. Jie greitai įsitraukia į pamokas, jei jos yra svarbios ir
                įdomios, tačiau be nuolatinio skatinimo gali greitai prarasti susidomėjimą.
                Subalansuojant meilę žaidimams ar leidžiant laiką su draugais siekiant tobulėti
                kartu, jiems vis tiek reikės tikslinės pagalbos, kad pasiektų savo tikslų.
            </p>
            <p
                class="p-narrow"
                v-if="store.lang === 'LV' && store.selectedPersona === 'Struggling'"
            >
                Centīgais mērķu sasniedzējs tiecas pēc labiem mācību sasniegumiem, taču bieži
                pazaudē uzmanību, ja nav skaidri norādījumi. Ātri spēj pieslēgties mācību procesam,
                taču var pazaudēt interesi, ja nav nepieciešama nepārtraukta iesaiste. Spēj apvienot
                mīlestību pret datorspēlēm ar kvalitatīvu laika pavadīšanu ar draugiem. Ir konstanta
                vēlme sevi pilnveidot, tikai ik pa laikam vajadzīgs mērķtiecīga cilvēka atbalsts,
                lai lietas attīstītos uz priekšu.
            </p>
        </div>
    </div>
    <div class="wrapper light">
        <div class="container pb0">
            <h2 class="section-title" v-if="store.lang === 'LT'">Kaip tai veikia?</h2>
            <h2 class="section-title" v-if="store.lang === 'LV'">Kā strādā Memby?</h2>
            <p v-if="store.lang === 'LT'">
                Šis vaizdo įrašas trumpai ir aiškiai papasakos, kaip veikia Digiklasė
            </p>
            <p v-if="store.lang === 'LV'">
                Šis video īsi un skaidri izskaidros, kā darbojas Memby.
            </p>

            <div class="mt-16 rounded-lg">
              <div style="padding:56.25% 0 0 0;position:relative;"><iframe :src="$t('VimeoExplainerLink')" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Memby - aiskinamasis video - video - 5.0v.mp4"></iframe></div>
            </div>
<!--            <div class="video-wrapper" v-if="store.lang === 'LT'">-->
<!--                <div class="play-btn" @click="playVideoHandler">-->
<!--                    <img-->
<!--                        src="../assets/images/play-btn.svg"-->
<!--                        alt="Video Placeholder"-->
<!--                        loading="lazy"-->
<!--                    />-->
<!--                </div>-->
<!--                <video id="videoHow" width="100%" height="100%" preload="none">-->
<!--                    <source src="https://player.vimeo.com/progressive_redirect/playback/675895976/rendition/1080p/file.mp4?loc=external&log_user=0&signature=3eebbf6e5f7292607f082f979d4781f7d57ddb7e374eb8b052c15e901c485822" type="video/mp4" />-->
<!--                    Your browser does not support the video tag.-->
<!--                </video>-->

<!--                <div class="pause-btn" @click="pauseVideoHandler">-->
<!--                    <img src="../assets/images/pause-btn.svg" alt="" />-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="video-wrapper" v-if="store.lang === 'LV'">-->
<!--              <div class="play-btn" @click="playVideoHandler">-->
<!--                <img-->
<!--                    src="../assets/images/play-btn.svg"-->
<!--                    alt="Video Placeholder"-->
<!--                    loading="lazy"-->
<!--                />-->
<!--              </div>-->
<!--              <video id="videoHow" width="100%" height="100%" preload="none">-->
<!--                <source src="https://player.vimeo.com/progressive_redirect/playback/853296489/rendition/1080p/file.mp4?loc=external&log_user=0&signature=ec359ee8b0e2f1fd8a34a49d24f215ad11002514507daa97b6ae49372321e18d" type="video/mp4" />-->
<!--                Your browser does not support the video tag.-->
<!--              </video>-->

<!--              <div class="pause-btn" @click="pauseVideoHandler">-->
<!--                <img src="../assets/images/pause-btn.svg" alt="" />-->
<!--              </div>-->
<!--            </div>-->
        </div>

        <img class="blue-line-vector" src="../assets/images/blue-line-vector.svg" alt="" />
    </div>
    <div class="wrapper light">
        <div class="flex-container list-section">
            <div class="content--left">
                <img src="../assets/images/pupil.svg" alt="" />
            </div>
            <div class="content--right list-content">
                <h3 v-if="store.lang === 'LT'">Papildomos grupinės<br />pamokos internetu:</h3>
                <h3 v-if="store.lang === 'LV'">Tiešsaistes grupu apmācību nodarbības:</h3>
                <ul v-if="store.lang === 'LT'">
                    <li>Įtraukiantys mokytojai</li>
                    <li>Individualus mokymosi planas</li>
                    <li>Pamokų vaizdo įrašai</li>
                    <li>Prizai už mokymąsi</li>
                    <li>Draugiška kaina</li>
                </ul>
                <ul v-if="store.lang === 'LV'">
                    <li>Iesaistoši pasniedzēji</li>
                    <li>Individuāls mācīšanās plāns</li>
                    <li>Nodarbību video ieraksti</li>
                    <li>Apbalvojumi par mācīšanos</li>
                    <li>Draudzīga cena</li>
                </ul>
                <SectionCTA :allPlansURL="allPlansURL" :selectedPlanURL="btnLabel.btnLink" />
                <div class="testimonial">
                    <div class="author">
                        <img src="../assets/images/testimonial-author.svg" alt="" />
                    </div>
                    <div class="text">
                        <p v-if="store.lang === 'LT'">
                            „Vos per mėnesį sugebėjau savo matematikos pažymį pasikelti net trimis
                            balais“
                        </p>
                        <p v-if="store.lang === 'LV'">
                            Man sanāca uzlabot savu matemātikas vidējo atzīmi par 3 ballēm tikai
                            mēneša laikā
                        </p>
                        <p v-if="store.lang === 'LT'">
                          <strong>11-okė Sibilė, Panevėžys</strong>
                        </p>
                        <p v-if="store.lang === 'LV'">
                            <strong>Sibile, 11. kl.</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="wrapper yellow overflow-hidden">
        <img class="blue-vector-left-top" src="../assets/images/blue-line-left.svg" alt="" />
        <div class="container container--narrow teachers">
            <h2 class="section-title" v-if="store.lang === 'LT'">
                Susipažink, tavo būsimi mokytojai:
            </h2>
            <h2 class="section-title" v-if="store.lang === 'LV'">
                Iepazīsties ar saviem nākotnes pasniedzējiem:
            </h2>
            <carousel
                v-bind="singleSlideSettings"
                class="teacher-carousel"
                v-if="store.lang === 'LT'"
            >
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
            <carousel
                v-bind="singleSlideSettings"
                class="teacher-carousel"
                v-if="store.lang === 'LV'"
            >
                <slide :key="0">
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcset="../assets/images/teachersLV/Raivis.png"
                        />
                        <source
                            media="(min-width: 100px)"
                            srcset="../assets/images/teachersLV/Raivis-mobile.png"
                        />
                        <img src="../assets/images/teachersLV/Raivis.png" alt="Raivis" />
                    </picture>
                </slide>
                <slide :key="1">
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcset="../assets/images/teachersLV/Virginija.png"
                        />
                        <source
                            media="(min-width: 100px)"
                            srcset="../assets/images/teachersLV/Virginija-mobile.png"
                        />
                        <img src="../assets/images/teachersLV/Virginija.png" alt="Virginija" />
                    </picture>
                </slide>
                <slide :key="2">
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcset="../assets/images/teachersLV/Liga.png"
                        />
                        <source
                            media="(min-width: 100px)"
                            srcset="../assets/images/teachersLV/Liga-mobile.png"
                        />
                        <img src="../assets/images/teachersLV/Liga.png" alt="Liga" />
                    </picture>
                </slide>

                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>
            <SectionCTA :allPlansURL="allPlansURL" :selectedPlanURL="btnLabel.btnLink" />
        </div>
    </div>
    <div class="wrapper light-grey">
        <div class="container container--narrow">
            <div class="review" v-if="store.lang === 'LT'">
                <div class="image min-w-[100px]">
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
            <div class="review" v-if="store.lang === 'LV'">
                <div class="image min-w-[100px]">
                    <img src="../assets/images/reviewerLV.svg" alt="" />
                </div>
                <div class="content">
                    <p>
                        „Es biju pārsteigta par to, cik pozitīva un produktīva pieredze man bija ar
                        Memby tiešsaistes matemātikas nodarbībām. Skolotājs Rolands ne tikai bija
                        ļoti prasmīgs un rūpīgs, bet arī radīja ērtu un atklātu vidi, kas ļāva man
                        justies droši, lai uzdotu jautājumus un izprastu sarežģītākās matemātikas
                        tēmas. Katram audzēknim tika pievērsta ļoti individuāla uzmanība un tika
                        atbildēts uz katru pat vismuļķīgāko jautājumu. Manas zināšanas un
                        pašpārliecība matemātikā uzlabojās ievērojami, kā arī es esmu pārliecināta,
                        ka, bez skolotāja Rolanda palīdzības, man nebūtu izdevies tik veiksmīgi
                        nokārtot matemātikas eksāmenu. Es ļoti novērtēju šīs nodarbības un patiešām
                        priecājos, ka tās izvēlējos!“
                    </p>
                    <p>
                        <strong
                            >Anija Siksna, Zentas Mauriņas Grobiņas vidusskola, 12. klase</strong
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
            <h2 class="section-title" v-if="store.lang === 'LT'">Į narystę telpa tiek daug!</h2>
            <h2 class="section-title" v-if="store.lang === 'LV'">Abonements ir visērtākais!</h2>
        </div>
        <div class="flex-container container--narrow">
            <div class="membership-card">
                <div class="membership-icon">
                    <img src="../assets/images/emoji/icon-play.svg" alt="" />
                </div>
                <div class="membership-content">
                    <h3 v-if="store.lang === 'LT'">Individualus mokymosi planas</h3>
                    <h3 v-if="store.lang === 'LV'">Individuāls mācīšanās plāns</h3>
                </div>
            </div>
            <div class="membership-card">
                <div class="membership-icon">
                    <img src="../assets/images/emoji/icon-book.svg" alt="" />
                </div>
                <div class="membership-content">
                    <h3 v-if="store.lang === 'LT'">Namų darbų pagalba</h3>
                    <h3 v-if="store.lang === 'LV'">Palīdzība ar mājasdarbiem</h3>
                </div>
            </div>
            <div class="membership-card">
                <div class="membership-icon">
                    <img src="../assets/images/emoji/icon-video.svg" alt="" />
                </div>
                <div class="membership-content">
                    <h3 v-if="store.lang === 'LT'">Pamokų įrašai</h3>
                    <h3 v-if="store.lang === 'LV'">Nodarbību video ieraksti</h3>
                </div>
            </div>
            <div class="membership-card">
                <div class="membership-icon">
                    <img src="../assets/images/emoji/icon-stats.svg" alt="" />
                </div>
                <div class="membership-content">
                    <h3 v-if="store.lang === 'LT'">Lankomumo peržiūra</h3>
                    <h3 v-if="store.lang === 'LV'">Apmeklējuma apskats</h3>
                </div>
            </div>
            <div class="membership-card">
                <div class="membership-icon">
                    <img src="../assets/images/emoji/icon-prize.svg" alt="" />
                </div>
                <div class="membership-content">
                    <h3 v-if="store.lang === 'LT'">Taškai ir apdovanojimai</h3>
                    <h3 v-if="store.lang === 'LV'">Punkti un balvas</h3>
                </div>
            </div>
            <div class="membership-card">
                <div class="membership-icon">
                    <img src="../assets/images/emoji/icon-hands.svg" alt="" />
                </div>
                <div class="membership-content">
                    <h3 v-if="store.lang === 'LT'">Motyvuojanti bendruomenė</h3>
                    <h3 v-if="store.lang === 'LV'">Motivējoša kopiena</h3>
                </div>
            </div>
        </div>
        <div class="container container--narrow stories-carousel">
            <carousel v-bind="storiesCarousel" v-if="store.lang === 'LT'">
                <slide v-for="(item, index) in storiesArray" :key="item">
                    <div class="story-slide">
                        <div class="story-image hidden md:block">
                            <img :src="'/storiesImages/story-' + index + '.png'" alt="" />
                        </div>
                        <div class="story-image md:hidden">
                          <img :src="'/storiesImages/story-mobile-' + index + '.png'" alt="" />
                        </div>
                        <div class="story-body">
                            <h4>{{ item.head }}</h4>
                            <p class="hidden md:block">{{ item.body }}</p>
                            <p class="md:hidden">{{ item.bodyMobile }}</p>
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
            <carousel v-bind="storiesCarousel" v-if="store.lang === 'LV'">
                <slide v-for="(item, index) in storiesArrayLV" :key="item">
                    <div class="story-slide">
                      <div class="story-image hidden md:block">
                        <img :src="'/storiesImagesLV/story-' + index + '.png'" alt="" />
                      </div>
                      <div class="story-image md:hidden">
                        <img :src="'/storiesImagesLV/story-mobile-' + index + '.png'" alt="" />
                      </div>
                        <div class="story-body">
                            <h4>{{ item.head }}</h4>
                            <p class="hidden md:block">{{ item.body }}</p>
                            <p class="md:hidden">{{ item.bodyMobile }}</p>
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
            <h2 class="section-title" v-if="store.lang === 'LT'">
                <span>Net 98% mokinių sako,</span> kad „Digiklasė“ – veiksmingas būdas efektyviai
                pagerinti akademinius rezultatus.
            </h2>
            <h2 class="section-title" v-if="store.lang === 'LV'">
                <span>98% skolēnu apgalvo,</span> ka Memby ir visefektīvākais veids kā uzlabot savas
                mācību sekmes.
            </h2>
        </div>
    </div>
    <div class="wrapper dark inner">
        <carousel v-bind="testimSettings" class="testimonials-carousel" v-if="store.lang === 'LT'">
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
        <carousel v-bind="testimSettings" class="testimonials-carousel" v-if="store.lang === 'LV'">
            <slide :key="1">
                <img src="../assets/images/reviewsLV/Review-1.svg" alt="" />
            </slide>
            <slide :key="2">
                <img src="../assets/images/reviewsLV/Review-2.svg" alt="" />
            </slide>
            <slide :key="3">
                <img src="../assets/images/reviewsLV/Review-3.svg" alt="" />
            </slide>
            <slide :key="4">
                <img src="../assets/images/reviewsLV/Review-4.svg" alt="" />
            </slide>
            <slide :key="5">
                <img src="../assets/images/reviewsLV/Review-5.svg" alt="" />
            </slide>

            <template #addons>
                <pagination />
            </template>
        </carousel>
    </div>
    <div class="wrapper dark inner">
        <div class="container container--narrow pb">
            <SectionCTA :allPlansURL="allPlansURL" :selectedPlanURL="btnLabel.btnLink" />
        </div>
    </div>
    <div class="wrapper light pt page-bottom">
        <div class="container container--narrow">
            <h2 class="section-title" v-if="store.lang === 'LT'">
                Atsakymai į <span>Dažniausiai <br />Užduodamus Klausimus (D.U.K.)</span>
            </h2>
            <h2 class="section-title" v-if="store.lang === 'LV'">
                Atbildes uz biežāk uzdotajiem jautājumiem
            </h2>
            <AccordionFAQ :content="faqLT" v-if="store.lang === 'LT'" />
            <AccordionFAQ :content="faqLV" v-if="store.lang === 'LV'" />
            <h2 class="section-title last-section" v-if="store.lang === 'LT'">
                Prisijunk prie daugiau nei <span>15 000 bendraminčių</span> bendruomenės!
            </h2>
            <h2 class="section-title last-section" v-if="store.lang === 'LV'">
                Pievienojies kopienai ar vairāk kā <span>15,000</span> līdzīgi domājošiem cilvēkiem!
            </h2>
            <div class="pb">
                <SectionCTA :allPlansURL="allPlansURL" :selectedPlanURL="btnLabel.btnLink" />
            </div>
        </div>
        <img src="../assets/images/elipses.svg" class="footer-elipses" alt="" />
    </div>
    <footer ref="footerTarget" v-element-visibility="onFooterVisibility">
        <div class="container d-flex">
            <div>
                <p v-if="store.lang === 'LT'">
                    © {{ getCurrentYear() }} Digiklasė. Visos teisės saugomos
                </p>
                <p v-if="store.lang === 'LV'">
                    © {{ getCurrentYear() }} Memby. Visas tiesības aizsargātas.
                </p>
            </div>
            <div class="footer-nav" v-if="store.lang === 'LT'">
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
            <div class="footer-nav" v-if="store.lang === 'LV'">
                <a href="https://memby.lv/privatuma-politika" target="_blank" class="footer-link"
                    >Privātuma politika</a
                >
                <a href="https://memby.lv/sikdatnu-politika" target="_blank" class="footer-link"
                    >Sīkdatņu politika</a
                >
            </div>
        </div>
    </footer>
  </div>
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
        position: sticky !important;
        bottom: 0px;
        z-index: 100;
        margin-bottom: 0;
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
.carousel__viewport {
    padding-bottom: 22px;
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
