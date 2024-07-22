import type { RouteRecordRaw } from 'vue-router'

// @ts-ignore
import LoginView from '@Modules/auth/pages/LoginView/LoginView.vue'

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
