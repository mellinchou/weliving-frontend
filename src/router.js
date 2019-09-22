import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import SearchResult from './views/SearchResult.vue'
import HouseProfile from './views/HouseProfile.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/signup',
      name:'signup',
      component:Signup
    },
    {
      path:'/result/:keyword',
      name:'result',
      component:SearchResult,
      props:true
    },
    {
      path:'/houseprofile/:id',
      name:'houseprofile',
      component:HouseProfile,
      props:true
    },
  ]   

  
})