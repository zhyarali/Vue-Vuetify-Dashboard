import Vue from 'vue'
import VueRouter from 'vue-router'


// client
import ClientHome from '../views/Client/Home.vue'


// dashboard
import Home from '../views/Dashboard/Home.vue'
import setting from '../views/Dashboard/setting.vue'
import login from '@/views/Dashboard/auth/login.vue'
import forget from '@/views/Dashboard/auth/forget.vue'
import reset from '@/views/Dashboard/auth/reset.vue'
import posts from '@/views/Dashboard/posts.vue'
import users from '@/views/Dashboard/users.vue'
import component from '@/views/Dashboard/component.vue'
import profile from '@/views/Dashboard/profile.vue'
import notFound from '@/views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'notFound',
    component: notFound
  },

// cleint
  {
    path: '/',
    name: 'ClientHome',
    component: ClientHome
  },











  

  // dashboard
  {
    path: '/Dashboard/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Dashboard/setting',
    name: 'setting',
    component: setting
  },
  {
    path: '/Dashboard/login',
    name: 'login',
    component: login
  },
  {
    path: '/Dashboard/forget',
    name: 'forget',
    component: forget
  },
  {
    path: '/Dashboard/reset',
    name: 'reset',
    component: reset
  },
  {
    path: '/Dashboard/posts',
    name: 'posts',
    component: posts
  },
  {
    path: '/Dashboard/users',
    name: 'users',
    component: users
  },
  {
    path: '/Dashboard/component',
    name: 'component',
    component: component
  },
  {
    path: '/Dashboard/profile',
    name: 'profile',
    component: profile
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
