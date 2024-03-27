export const LOCALE_URL_LANG_MAP = {
    'sa': 'EN_ZA',
    'br': 'PT_BR'
}

export function pluck(array, property) {
    return array.map(item => item[property]);
}

export function getLocaleFromURL(url) {
    let urlObj = new URL(url);
    let pathname = urlObj.pathname;
    let firstPath = pathname.split('/')[1];

    if (! LOCALE_URL_LANG_MAP[firstPath]) {
        firstPath = Object.keys(LOCALE_URL_LANG_MAP)[0]
    }

    return firstPath;
}

export function changeUrlPath(path) {
    // Get the current URL
    let currentURL = window.location.href;
    const locale = getLocaleFromURL(currentURL);

    // Prepend locale to the path
    path = '/' + locale + path; // Adjust this based on your URL structure

    // Extract the query parameters
    let url = new URL(currentURL);
    let searchParams = url.searchParams;
    if (searchParams.toString()) {
        path = path + '?' + searchParams.toString();
    }

    window.history.pushState({}, document.title, path);
}

export const Personas = {
    AMBITIOUS: 'Ambitious student',
    EXAM_ORIENTED: 'Exam-oriented',
    BUSY_MULTI_TASKER: 'Busy multitasker',
    STRUGGLING: 'Struggling'
}

export const SUBJECTS = {
    'LT': ['Matematika', 'Lietuvių kalba', 'Anglų kalba', 'Fizika', 'Chemija', 'Geografija', 'Pasaulio pažinimas', 'Gamta ir žmogus'],
    'LV': ['Matemātika', 'Vēsture', 'Ķīmija', 'Bioloģija', 'Fizika', 'Latviešu valoda', 'Vēsture un sociālās zinātnes']
}

export const SUBJECT_PLAN_MAP = {
    'LT': {"Fizika": "fizikas", "Chemija": "chemikas", "Istorija": "istorikas", "Biologija": "biologas", "Geografija": "geografija", "Matematika": "matematikas", "Anglų kalba": "anglu", "Lietuvių kalba": "lietuviu", "Gyvūnų mokslas": "gyvunu-mokslas", "Pasaulio pažinimas": "pasaulio-pazinimas", "Finansinis raštingumas": "finansinis-rastingumas"},
    'LV': ['Matemātika', 'Vēsture', 'Ķīmija', 'Bioloģija', 'Fizika', 'Latviešu valoda', 'Vēsture un sociālās zinātnes']
}

export const BASE_APP_DOMAIN = {
    'LT': 'https://app.digiklase.lt',
    'LV': 'https://app.memby.lv',
    'EN_IE': 'https://app.memby.org',
    'EN_ZA': 'https://za.memby.org',
    'local': 'http://lt.localhost:8081'
}
