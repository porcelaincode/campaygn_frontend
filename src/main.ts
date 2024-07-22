import './assets/main.css'

import { createApp } from 'vue'

// libraries being used
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import VueApexCharts from 'vue3-apexcharts'

import App from './App.vue'
import router from '@Config/router'

const app = createApp(App)
app.use(router)
app.use(VueApexCharts)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)

app.mount('#app')
