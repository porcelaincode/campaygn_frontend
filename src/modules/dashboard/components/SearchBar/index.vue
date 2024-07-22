<template>
  <div class="main-container">
    <input
      type="text"
      v-model="query"
      @input="debouncedSearch"
      placeholder="Search Influencer by Name, address and interests"
      class="search-input"
    />
    <ul
      v-if="searchResults.length"
      :class="props.header ? 'search-results-header' : 'search-results'"
    >
      <li v-for="result in searchResults" :key="result" @click="handleRouteToProfile(result.id)">
        <div>
          {{ result.name }}
          <span class="address">
            {{ result.homeAddress.street }}, {{ result.homeAddress.city }},
            {{ result.homeAddress.state }}, {{ result.homeAddress.country }}
          </span>
        </div>
        <div class="tags">
          <span v-for="tag in result.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  header: {
    type: Boolean,
    default: false
  }
})

import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { debounce } from 'lodash'

import useInfluencerStore from '@Modules/dashboard/store'

const influencerStore = useInfluencerStore()
const { getInfluencerById } = influencerStore
const { searchResults } = storeToRefs(influencerStore)

const query = ref('')

const debouncedSearch = debounce(() => {
  if (query.value !== '') {
    influencerStore.search(query.value)
  }
}, 300)

const handleRouteToProfile = async (id) => {
  await getInfluencerById(id)
  searchResults.value = []
}
</script>

<style scoped>
@import './index.css';
</style>
