import { defineStore } from 'pinia'
import initialState from './initialState'

import { login } from '@Modules/auth/apis/login'
import { logout } from '@Modules/auth/apis/logout'

import type { LoginForm } from '../components/LoginForm/login'
import router from '@Config/router'

const useAuthStore = defineStore('authStore', {
  state: () => initialState,
  getters: {},
  actions: {
    async userLogin(payload: LoginForm) {
      const data = await login(payload)
      if (data) {
        this.user = data.user
        this.token = data.token
        this.isLoggedIn = true
        router.push('/')
      }
    },
    async logout() {
      try {
        const data = await logout()
        if (data) {
          this.user = {}
          this.token = ''
          this.isLoggedIn = false
          router.push('/')
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  persist: true
})

export default useAuthStore
