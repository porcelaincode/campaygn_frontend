import { defineStore } from 'pinia'
import initialState from './initialState'

import { searchInfluencers, getInfluencer } from '@Modules/dashboard/apis/search'
import router from '@Config/router'

const useInfluencerStore = defineStore('influencerStore', {
  state: () => initialState,
  getters: {},
  actions: {
    async search(query: string) {
      try {
        const data = await searchInfluencers(query)
        if (data) {
          this.searchResults = data
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getInfluencerById(id: string) {
      try {
        const data = await getInfluencer(id)
        if (data) {
          this.profile = data
          router.push(`/influencer/${id}`)
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  persist: true
})

export default useInfluencerStore
