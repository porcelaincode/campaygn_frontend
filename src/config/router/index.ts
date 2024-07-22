import { createRouter, createWebHistory, type Router } from 'vue-router'
import { storeToRefs } from 'pinia'

import app from '@Config/constants'

// routes
import authRoutes from '@Modules/auth/config/router'
import dashboardRoutes from '@Modules/dashboard/config/router'

// store
import useAuthStore from '@Modules/auth/store'

const router: Router = createRouter({
  history: createWebHistory(app.baseURL),
  routes: [...authRoutes, ...dashboardRoutes]
})

router.beforeEach(async (to) => {
  // If the route requires authentication, check if the user is logged in
  const authStore = useAuthStore()

  const { isLoggedIn } = storeToRefs(authStore)

  if (to.meta.requiresAuth || to.path === '/') {
    if (!isLoggedIn.value) {
      document.title = authRoutes[0].name as string
      return {
        name: authRoutes[0].name,
        query: {
          redirect: to.path
        }
      }
    }
  }
})

export default router
