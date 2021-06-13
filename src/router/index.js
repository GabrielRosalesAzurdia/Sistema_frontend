import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/panel',
    name: 'Panel',
    component: () => import('../views/Panel.vue'),
  },
  {
    path:'/unit/:unidad_id/:unidad_name/:grado_id',
    name:"unit",
    component: () => import('../views/Unit'),
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) => {
  let usuario = localStorage.getItem('tokenAccess')
  if(to.name != "Login" & to.name != "Home" & usuario == null){
    next('/')
  }
  else if(to.name == "Login" & usuario != null){
    next('/')
  }
  else{
    next()
  }
})

export default router
