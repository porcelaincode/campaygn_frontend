<template>
  <div class="container">
    <div class="header">
      <Header />
    </div>
    <div class="main-view">
      <div class="profile">
        <ProfileCard :data="profile" />
      </div>
      <div class="metrics">
        <AudienceMetrics :data="profile" />
        <Reach :data="profile" />
        <SimilarProfiles
          :similarProfiles="profile.similarProfiles"
          :getInfluencerById="getInfluencerById"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import useInfluencerStore from '@Modules/dashboard/store'

const route = useRoute()

const influencerStore = useInfluencerStore()
const { getInfluencerById } = influencerStore
const { profile } = storeToRefs(influencerStore)

onBeforeMount(async () => {
  await getInfluencerById(route.params.id)
})

import Header from '@Modules/dashboard/components/Header/index.vue'

import ProfileCard from '@Modules/dashboard/components/ProfileCard/index.vue'

import AudienceMetrics from '@Modules/dashboard/components/AudienceMetrics/index.vue'
import Reach from '@Modules/dashboard/components/Reach/ReachView.vue'
import SimilarProfiles from '@Modules/dashboard/components/SimilarProfiles/SimilarProfiles.vue'
</script>

<style scoped>
@import './ProfileView.css';
</style>
