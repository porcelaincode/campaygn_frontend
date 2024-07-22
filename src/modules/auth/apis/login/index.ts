import { httpClient } from '@Services/api-client'
import type { LoginForm } from '@Modules/auth/components/LoginForm/login'

export async function login(payload: LoginForm) {
  const { data: response } = await httpClient.post('/auth/login', payload)
  return response
}
