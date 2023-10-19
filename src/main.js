import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from "./i18n";
import VueGtag from "vue-gtag";
import { createHead } from '@unhead/vue'
import VueCountdown from '@chenfengyuan/vue-countdown';

const app = createApp(App);

app.component(VueCountdown.name, VueCountdown);

app.use(i18n)

const head = createHead()
app.use(head)

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
