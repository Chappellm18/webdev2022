import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// use dotenv to import environment variables
require('dotenv').config()
import VueGeolocation from "vue3-geolocation";
import GMaps from "vuejs3-google-maps";

let app = createApp(App);

app.use(VueGeolocation);
app.use(GMaps, {
    load: {
        apiKey: process.env.VUE_GOOGLE_MAPS_API_KEY || "AIzaSyCwR9B1tRQ8oYATzCzle6yTONHjMucNHOU",
        libraries: ["places"],
    },
});

app.use(router).mount('#app')
