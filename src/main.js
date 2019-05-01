import Vue from "vue"
import "./plugins/vuetify"
import App from "./App.vue"
// Import necessary package for fontAwesome icons
import { library } from "@fortawesome/fontawesome-svg-core"
import { faEnvelope, faUnlock, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
// Import for validations form
import vuelidate from "vuelidate"
// Import Bootstrap
import BootstrapVue from "bootstrap-vue"

import router from "./router"
import store from "./store/store"

import AppNavbar from "./components/shared/AppNavbar.vue"
import AppFooter from "./components/shared/AppFooter.vue"
import AppSpinner from "./components/shared/AppSpinner.vue"

import axios from "axios"
axios.defaults.baseURL = "http://localhost:3000"

Vue.use(vuelidate)
Vue.use(BootstrapVue)

// Add the needed icons
library.add(faEnvelope, faUnlock, faUser)

// Vue using the fontAwesome icons
Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.config.productionTip = false

Vue.component("AppNavbar", AppNavbar)
Vue.component("AppFooter", AppFooter)
Vue.component("AppSpinner", AppSpinner)

new Vue({
  router,
  store,
  vuelidate,
  render: h => h(App)
}).$mount("#app")
