<template>
  <div class="container">
    <div class="about">
      <img href="https://app.campaygn.com/img/logo-big.baed12a1.png" />
      <p class="welcome-text-login">
        The most advanced analytics platform to optimize your influencers marketing investments
      </p>
    </div>
    <div class="login-error" v-if="errorMessage">
      {{ errorMessage }}
    </div>
    <LoginForm
      :onClickLogin="handleLoginClick"
      :onClickForgotPassword="() => {}"
      :onClickInfluencerLogin="() => {}"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginForm from '@Modules/auth/components/LoginForm/login.vue'

import useAuthStore from '../../store'
const authStore = useAuthStore()
const { userLogin } = authStore

const errorMessage = ref('')

const handleLoginClick = async (email, password) => {
  try {
    await userLogin(email, password)
    errorMessage.value = ''
  } catch (error) {
    errorMessage.value = error.response.data.error
  }
}
</script>

<style scoped>
@import './LoginView.css';
</style>
