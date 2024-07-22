<template>
  <header class="header">
    <div class="header-left">
      <div class="logo">CAMPAYGN</div>
      <nav class="nav-links">
        <a href="/influencers" class="nav-link">Profiles</a>
        <a href="#" class="nav-link" disabled>Lists</a>
        <a href="#" class="nav-link" disabled>Monitors</a>
        <a href="#" class="nav-link" disabled>Keywords</a>
      </nav>
    </div>
    <div class="header-right">
      <SearchBar :header="true" />
      <div class="user-profile">
        <span class="user-name">John Doe</span>
        <UserOutlined />
      </div>
      <button class="logout-btn" @click="logout">Logout</button>
      <div class="settings-icon">
        <SettingOutlined />
      </div>
      <div class="theme-toggle" @click="toggleTheme">
        <!-- <SunOutlined /> -->
        <!-- <MoonOutlined v-if="isDarkMode" />
        <SunOutlined v-else /> -->
      </div>
    </div>
  </header>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { UserOutlined, SettingOutlined } from '@ant-design/icons-vue'
import useInfluencerStore from '@Modules/dashboard/store'
import useAuthStore from '@Modules/auth/store'

import SearchBar from '@Modules/dashboard/components/SearchBar/index.vue'

const influencerStore = useInfluencerStore()
const { isDarkMode } = storeToRefs(influencerStore)

const authStore = useAuthStore()
const { logout } = authStore

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.body.classList.toggle('dark-mode', isDarkMode.value)
}
</script>

<style scoped>
@import './index.css';
</style>
