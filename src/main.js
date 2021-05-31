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
// shoeToast: Muestra una notificación
Vue.mixin({
  methods: {
    showToast(type, message) {
      this.$notify({
        group: "foo",
        type: type, // puede ser warn o error o succes
        title: "Important message",
        text: message
      });
    },
    parseJwt: function (token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    },
    refreshTokenAndGetAccess: async function(){
      if (localStorage.getItem("tokenRefresh")){
        var config;
        await axios.post('http://127.0.0.1:8000/accounts/token/refresh/',{
          refresh : JSON.parse(localStorage.getItem("tokenRefresh"))
        }).then(response => {
          localStorage.setItem("tokenAccess",JSON.stringify(response.data["access"]))
          localStorage.setItem("tokenRefresh", JSON.stringify(response.data["refresh"]))
          config = {
            "headers": {
              "Authorization":"Bearer " + response.data["access"],
            }
          }
        })
        if(config){
          return config
        }
        else{
          throw "Config es undefined"
        }
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