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

// -----funciones globales-----
// parseJwt: para saber la información de los tokens de acceso
// getAccessToken: obtener token de acceso
// refreshToken: para refrescar el token de acceso
// checkUser: envía un bool si hay un usuario presente
Vue.mixin({
  methods: {
    parseJwt: function (token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    },
    getAccessToken: function(){
      if(localStorage.getItem("tokenAccess")){
        var config = {
            "headers": {
            "Authorization":"Bearer " + JSON.parse(localStorage.getItem("tokenAccess")) ,
            }
        }
        return config
      }
    },
    refreshToken: function(){
      if (localStorage.getItem("tokenRefresh")){
        axios.post('http://127.0.0.1:8000/accounts/token/refresh/',{
          refresh : JSON.parse(localStorage.getItem("tokenRefresh"))
        }).then(response => {
          localStorage.setItem("tokenAccess",JSON.stringify(response.data["access"]))
          localStorage.setItem("tokenRefresh", JSON.stringify(response.data["refresh"]))
        })
      }
    },
    checkUser: function(){
      if(localStorage.getItem("tokenAccess") != null & localStorage.getItem("tokenRefresh") != null ){
        return true
      }
      return false
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')