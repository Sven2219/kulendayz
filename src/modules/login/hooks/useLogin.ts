import React from 'react'
import { useTranslation } from 'react-i18next'

const useLogin = () => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = React.useState(false)

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      const result = await loginMock(email, password)
      setIsLoading(false)
      return result
    } catch (e) {
      setIsLoading(false)
      alert(t('login.serverError'))
    }
  }

  return { isLoading, login }
}

const loginMock = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve('New token')
      } else {
        reject('Something went wrong')
      }
    }, 2000)
  })
}

export default useLogin
