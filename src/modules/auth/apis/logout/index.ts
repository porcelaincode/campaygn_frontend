import { httpClient } from '@Services/api-client'

export async function logout() {
  const { data: response } = await httpClient.post('/auth/logout')
  return response
}
