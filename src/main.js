import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from "vue-resource"
import Axios from "axios"
import store from './stores/stores'

Axios.defaults.baseURL='http://3.227.148.97:3000';


Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
  router, 
  render: h => h(App)
}).$mount('#app')



