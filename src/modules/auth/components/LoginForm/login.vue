<template>
  <div class="login-form">
    <input
      type="email"
      v-model="email"
      placeholder="Email"
      class="login-input"
      @focus="onFocus"
      @blur="onBlur"
    />
    <input
      type="password"
      v-model="password"
      placeholder="Password"
      class="login-input"
      @focus="onFocus"
      @blur="onBlur"
    />
    <button @click="props.onClickForgotPassword" class="forgot-button">Forgot Password?</button>
    <button @click="handleLogin" class="login-button">Login</button>
    <button @click="props.onClickInfluencerLogin" class="influencer-button">
      Login as Influencer
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const props = defineProps({
  onClickLogin: {
    type: Function,
    required: true
  },
  onClickForgotPassword: {
    type: Function,
    required: true
  },
  onClickInfluencerLogin: {
    type: Function,
    required: true
  }
})

const handleLogin = () => {
  props.onClickLogin({ email: email.value, password: password.value })
}
</script>

<style scoped>
@import './login.css';
</style>
