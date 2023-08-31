import Axios, { AxiosError, AxiosResponse } from 'axios'
import configValues from '../../configValues'
import localStorageKeys from 'src/const/localStorage'

export const axiosInstance = Axios.create({
  timeout: configValues.TIMEOUT * 1000,
  baseURL: configValues.BACKEND_SCHEME,
})

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.status === 401) {
      localStorage.removeItem(localStorageKeys.TOKEN)
    }
    throw error
  }
)

axiosInstance.interceptors.request.use((config) => {
  const authToken = localStorage.getItem(localStorageKeys.TOKEN)
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`
  }
  return config
})
