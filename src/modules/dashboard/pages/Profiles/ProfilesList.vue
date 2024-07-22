<template>
  <div class="container">
    <div class="header">
      <Header />
    </div>

    <div class="carousel-container">
      <div class="carousel">
        <ProfileCard v-for="profile in profiles" :key="profile.id" :profile="profile" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Header from '@Modules/dashboard/components/Header/index.vue'
import ProfileCard from '@Modules/dashboard/components/ProfileCard/index.vue'
</script>

<style scoped>
@import './ProfilesList.css';
</style>
