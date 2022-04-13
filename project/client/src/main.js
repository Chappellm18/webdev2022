import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// use dotenv to import environment variables
require('dotenv').config()
import VueGoogleMaps from '@fawmi/vue-google-maps'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


const app = createApp(App);


app.use(VueGoogleMaps, {
    load: {
        key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    }
})


app.use(router).mount('#app')
