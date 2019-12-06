import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'dist/css/swiper.min.css'
import 'dist /js/swiper/min.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
