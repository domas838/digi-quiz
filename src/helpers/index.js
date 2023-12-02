export function pluck(array, property) {
    return array.map(item => item[property]);
}

export function changeUrlPath(path) {
    // Get the current URL
    let currentURL = window.location.href;

    // Extract the query parameters
    let url = new URL(currentURL);
    let searchParams = url.searchParams;

    window.history.pushState({}, document.title, path + '?' + searchParams.toString());
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
    'EN': 'quiz.mathups.com',
    'local': 'http://lt.localhost:8081'
}
