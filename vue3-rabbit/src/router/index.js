import {createRouter, createWebHistory} from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Category from '@/views/Category/index.vue'
import Home from '@/views/Home/index.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/category',
          component: Category
        },
        {
          path: '/home',
          component: Home
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
  ]
})
export default router