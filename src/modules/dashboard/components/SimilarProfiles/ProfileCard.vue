<template>
  <div class="profile-card">
    <img :src="profile.profileImage" alt="Profile Image" class="profile-image" />
    <div class="profile-info">
      <h4 class="profile-name">
        {{ profile.name }} <span class="verified"><CheckCircleFilled /></span>
      </h4>
      <div class="profile-tags">
        <span class="icon"><TagOutlined /></span>{{ profile.interests.join(', ') }}
      </div>
      <!-- <div class="profile-location">
        <span class="icon"><EnvironmentOutlined /></span>{{ profile.location }}
      </div>
      <div class="profile-stats">
        <div class="stat">
          <span>Followers</span>
          <span>{{ profile.followers }}</span>
        </div>

        <div class="stat">
          <span>Growth</span>
          <span>{{ profile.growth }}</span>
        </div>

        <div class="stat">
          <span>ER</span>
          <span>{{ profile.er }}</span>
        </div>
      </div>
      <div class="social-media-links">
        <a
          v-for="link in profile.socialMediaLinks"
          :key="link.platform"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="social-media-icon"
        >
          <YoutubeOutlined v-if="link.platform === 'youtube'" />
          <TwitterOutlined v-else-if="link.platform === 'twitter'" />
          <InstagramOutlined v-else-if="link.platform === 'instagram'" />
          <LinkOutlined v-else />
        </a>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import {
  TagOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  CheckCircleFilled,
  EnvironmentOutlined,
  LinkOutlined
} from '@ant-design/icons-vue'

const props = defineProps({
  profile: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.profile-card {
  background-color: #2e334c;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  color: white;
  width: 280px;
}

.profile-image {
  height: 200px;
  width: 100%;
  object-fit: cover;
}

.profile-info {
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.profile-name {
  text-align: center;
  margin: 0 0 5px 0;
  font-size: 16px;
}

.profile-name .verified {
  color: #2c98ef;
  margin-left: 6px;
}

.profile-tags .icon {
  color: red;
  margin-right: 6px;
}
.profile-location .icon {
  color: red;
  margin-right: 6px;
}

.profile-tags,
.profile-location {
  text-align: center;
  margin: 3px 0;
  font-size: 12px;
}

.profile-stats {
  font-size: 14px;
  align-self: center;
  font-weight: bold;
  width: 90%;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-media-links {
  align-self: center;
  margin: 10px 0 0 0;
  display: flex;
  gap: 0.5rem;
}

.social-media-icon {
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #222636;
  font-size: 1.2rem;
  color: white;
}
</style>
