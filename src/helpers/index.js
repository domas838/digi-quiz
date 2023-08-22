export function pluck(array, property) {
    return array.map(item => item[property]);
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
