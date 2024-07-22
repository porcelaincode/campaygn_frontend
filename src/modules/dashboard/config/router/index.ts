import type { RouteRecordRaw } from 'vue-router'

import ProfileView from '@Modules/dashboard/pages/Profile/ProfileView.vue'
import ProfileList from '@Modules/dashboard/pages/Profiles/ProfilesList.vue'
import SearchView from '@Modules/dashboard/pages/Search/SearchView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Search Influencer',
    meta: {
      title: 'Search Influencer',
      requiresAuth: true
    },
    component: SearchView
  },
  {
    path: '/influencers',
    name: 'Influencers List',
    meta: {
      title: 'Influencers',
      requiresAuth: true
    },
    component: ProfileList
  },
  {
    path: '/influencer/:id',
    name: 'Influencer Profile',
    meta: {
      title: 'Influencer',
      requiresAuth: true
    },
    component: ProfileView
  }
]

export default routes
