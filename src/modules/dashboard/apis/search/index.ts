import { httpClient } from '@Services/api-client'

export async function searchInfluencers(query: string) {
  const { data: response } = await httpClient.get('/influencers/search', {
    params: { q: query }
  })
  return response
}

export async function getInfluencer(id: string) {
  const { data: response } = await httpClient.get(`/influencers/${id}`)
  return response
}
