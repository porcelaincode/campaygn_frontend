<template>
  <div class="dashboard">
    <h2>
      <span><TeamOutlined /></span> Similar Profiles
    </h2>
    <div class="similar-profiles">
      <ProfileCard
        v-for="profile in props.similarProfiles"
        :key="profile.id"
        :profile="profile"
        @click="getInfluencerById(profile.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { TeamOutlined } from '@ant-design/icons-vue'
import ProfileCard from './ProfileCard.vue'

const props = defineProps({
  similarProfiles: {
    type: Array
  },
  getInfluencerById: {
    type: Function,
    required: true
  }
})
</script>

<style scoped>
.dashboard {
  color: white;
  padding: 20px;
  background-color: #2c3346;
  margin: 0;
}

.dashboard h2 {
  font-size: 16px;
  color: #ffffff99;
}

.dashboard h2 span {
  font-size: 20px;
  margin: 0 5px 0 10px;
  color: #bf1a35;
}

.similar-profiles {
  width: 1000px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  gap: 1rem;
  padding: 1rem;
  background-color: #2c3346;
}
</style>
