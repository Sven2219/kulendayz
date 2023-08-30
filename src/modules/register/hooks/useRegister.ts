import React from 'react'
import { useTranslation } from 'react-i18next'

import { FormState } from '../utils/formValuesReducer'
import localStorageKeys from 'src/const/localStorage'

const useRegister = () => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = React.useState(false)

  const register = async (formValuesState: FormState): Promise<void> => {
    try {
      setIsLoading(true)
      await registerMock(formValuesState)
      localStorage.setItem(localStorageKeys.EMAIL, formValuesState.email)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      alert(t('register.serverError'))
    }
  }

  return { isLoading, register }
}

const registerMock = ({
  email,
  password,
  firstName,
  lastName,
}: FormState): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password && firstName && lastName) {
        resolve('Success')
      } else {
        reject('Something went wrong')
      }
    }, 2000)
  })
}

export default useRegister
