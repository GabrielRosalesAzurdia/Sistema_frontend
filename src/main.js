import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from 'vue-notification'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(VueAxios, axios)
Vue.use(Notifications)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
