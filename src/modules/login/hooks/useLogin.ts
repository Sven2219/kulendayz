import React from 'react'
import { useTranslation } from 'react-i18next'

import localStorageKeys from 'src/const/localStorage'

const useLogin = () => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = React.useState(false)

  const login = async (email: string, password: string): Promise<void> => {
    try {
      setIsLoading(true)
      const result = await loginMock(email, password)
      setIsLoading(false)
      localStorage.removeItem(localStorageKeys.EMAIL)
      localStorage.setItem(localStorageKeys.TOKEN, result)
    } catch (e) {
      setIsLoading(false)
      alert(t('login.serverError'))
    }
  }

  return { isLoading, login }
}

const loginMock = (email: string, password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve(
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOiIwIiwiZmlyc3ROYW1lIjoiU3ZlbiIsImxhc3ROYW1lIjoiU3VrIiwiZW1haWwiOiJzdmVuLnN1azVAZ21haWwuY29tIiwiaWF0IjoxNTE2MjM5MDIyfQ.Vso5hnq-WUH_5cwRW3_o53H87bg7x-YQsN9vTfFKP0k'
        )
      } else {
        reject('Something went wrong')
      }
    }, 2000)
  })
}

export default useLogin
