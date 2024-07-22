export interface InfluencerProfile {
  birthday: string
  ageRangeAppeal: {
    maxAge: number
    minAge: number
  }
  similarProfiles: Array<{
    profilePhoto: string
    name: string
  }>
  gender: string
  keywords: string[]
  reach: {
    cities: {
      city: string
      metrics: {
        engagementRate: number
        followers: number
        impressions: number
      }
    }[]
    countries: {
      country: string
      metrics: {
        engagementRate: number
        followers: number
        impressions: number
      }
    }[]
  }
  topics: string[]
  biography: string
  photos: {
    description: string
    url: string
  }[]
  topKeywordsMentionedWith: string[]
  tags: string[]
  profilePhoto: string
  name: string
  socialMediaLinks: {
    youtube?: string
    twitter?: string
    website?: string
    tiktok?: string
    facebook?: string
    instagram?: string
    linkedin?: string
  }
  id: string
  name_lowercase?: string
  homeAddress: {
    country: string
    city: string
    street: string
    postalCode: string
    state: string
  }
}

export default {
  profile: {
    birthday: '',
    ageRangeAppeal: {
      maxAge: 0,
      minAge: 0
    },
    similarProfiles: [],
    gender: '',
    keywords: [],
    reach: {
      cities: [],
      countries: []
    },
    topics: [],
    biography: '',
    photos: [],
    topKeywordsMentionedWith: [],
    tags: [],
    profilePhoto: '',
    name: '',
    socialMediaLinks: {},
    id: '',
    homeAddress: {
      country: '',
      city: '',
      street: '',
      postalCode: '',
      state: ''
    }
  } as InfluencerProfile,
  query: '',
  searchResults: [],
  isDark: true
}
