import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    children:[
      {
        path: '/home/first',
        component: () => import('../views/first.vue')
      },
      {
        path: '/home/my',
        component: () => import('../views/my.vue')
      },
      {
        path: '/home',
        redirect:'/home/first'
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
