import axios from 'axios'
import app from '@Config/constants'
import useAuthStore from '@Modules/auth/store' // Adjust the path as needed

const httpClient = axios.create({
  baseURL: app.apiGatewayHost,
  withCredentials: true
})

httpClient.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore()
    const token = authStore.token

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { httpClient }
