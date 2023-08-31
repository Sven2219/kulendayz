import React from 'react'
import { useTranslation } from 'react-i18next'

import localStorageKeys from 'src/const/localStorage'
import { axiosInstance } from 'src/service'

const useLogin = () => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = React.useState(false)

  const login = async (email: string, password: string): Promise<void> => {
    try {
      setIsLoading(true)

      const result = await axiosInstance.post('auth/1/login', {
        email,
        password,
      })

      setIsLoading(false)

      const authToken = result.data

      localStorage.removeItem(localStorageKeys.EMAIL)
      localStorage.setItem(localStorageKeys.TOKEN, authToken)
    } catch (e) {
      setIsLoading(false)
      alert(t('login.serverError'))
    }
  }

  return { isLoading, login }
}

export default useLogin
