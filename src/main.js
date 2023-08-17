import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from "./i18n";
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(i18n)

app.use(VueGtag, {
    config: { id: "G-L98Z3SJY5M" }
}).mount('#app')
