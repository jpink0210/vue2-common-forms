import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'

import "common.styles/global.import.scss";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')