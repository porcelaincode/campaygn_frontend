<template>
  <div class="profile-details">
    <div class="profile-header">
      <div class="profile-image">
        <img :src="data.profilePhoto" alt="Profile Image" class="image" />
      </div>
      <h2 class="profile-name">{{ data.name }}</h2>
      <p class="profile-tagline">Influencer</p>
    </div>
    <div class="profile-info">
      <span class="section-title">Profile</span>
      <p>
        <i class="icon"><HomeOutlined /></i>Address: {{ data.homeAddress.street }},
        {{ data.homeAddress.city }}, {{ data.homeAddress.state }}, {{ data.homeAddress.country }}
      </p>
      <p>
        <i class="icon calendar-icon"><CalendarOutlined /></i>
      </p>
      <p>
        <i class="icon gender-icon"><UserOutlined /></i>Gender: {{ data.gender }}
      </p>
      <p>
        <i class="icon interests-icon"><TagsOutlined /></i>{{ data.topics.join(', ') }}
      </p>
    </div>
    <div class="profile-bio">
      <span class="section-title">Biography</span>
      <p>{{ data.biography }}</p>
    </div>
    <div class="profile-keywords">
      <span class="section-title">Keywords</span>
      <ul class="keywords-list">
        <li v-for="keyword in data.keywords" :key="keyword">{{ keyword }}</li>
      </ul>
    </div>
    <div class="profile-social-links">
      <span class="section-title">Social links</span>
      <p v-for="medium in Object.keys(data.socialMediaLinks)" :key="medium">
        <a :href="data.socialMediaLinks[medium]" class="social-link">{{
          data.socialMediaLinks[medium]
        }}</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { HomeOutlined, UserOutlined, CalendarOutlined, TagsOutlined } from '@ant-design/icons-vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
@import './index.css';
</style>
