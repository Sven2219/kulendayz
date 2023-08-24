import Axios, { AxiosError, AxiosResponse } from 'axios'
import configValues from '../../configValues'

export const axiosInstance = Axios.create({
  timeout: configValues.TIMEOUT * 1000,
  baseURL: configValues.BACKEND_SCHEME,
})

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    throw error
  }
)
