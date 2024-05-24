import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config"
import router from './router'

import Toolbar from "primevue/toolbar";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import IconField from "primevue/iconfield";
import Menu from "primevue/menu";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import Card from "primevue/card";

import "primeicons/primeicons.css";
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App)
.use(router)
.use(PrimeVue, { ripple: true })
.component("pv-toolbar", Toolbar)
.component("pv-textarea", Textarea)
.component("pv-button", Button)
.component("pv-icon-field", IconField)
.component("pv-menu", Menu)
.component("pv-dialog", Dialog)
.component("pv-toast", Toast)
.component("pv-dropdown", Dropdown)
.component("pv-tag", Tag)
.component("pv-card", Card)
.mount('#app')
