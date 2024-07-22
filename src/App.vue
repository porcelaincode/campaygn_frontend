<script setup lang="ts">
import { computed, type Component } from 'vue'
import { storeToRefs } from 'pinia'

import useAuthStore from '@Modules/auth/store'

import AuthLayout from '@Layouts/auth/AuthLayout.vue'
import AppLayout from '@Layouts/app/AppLayout.vue'

const authStore = useAuthStore()
const { isLoggedIn } = storeToRefs(authStore)

const layout: Component = computed(() => {
  return isLoggedIn.value ? AppLayout : AuthLayout
})
</script>

<template>
  <component v-bind:is="layout"></component>
</template>
<style scoped></style>
