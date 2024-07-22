import type { RouteRecordRaw } from 'vue-router'

import LoginView from '@Modules/auth/pages/Login/LoginView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Login',
      requiresAuth: false
    },
    component: LoginView
  }
]

export default routes
