import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from "./i18n";
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(i18n)

const host = window.location.hostname;
const analyticsMap = {
    'quiz.memby.lv': 'G-QFS0LJGESV',
    'quiz.digiklase.lt': 'G-L98Z3SJY5M',
    'localhost': ''
};

const detectedAnalytics = analyticsMap[host] || '';

app.use(VueGtag, {
    config: { id: detectedAnalytics }
}).mount('#app')
