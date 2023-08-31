import React from 'react'
import { useTranslation } from 'react-i18next'

import { FormState } from '../utils/formValuesReducer'
import localStorageKeys from 'src/const/localStorage'
import { axiosInstance } from 'src/service'

const useRegister = () => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = React.useState(false)

  const register = async (formValuesState: FormState): Promise<void> => {
    try {
      const { email, password, firstName, lastName } = formValuesState
      setIsLoading(true)
      await axiosInstance.post('auth/1/register', {
        email,
        password,
        firstName,
        lastName,
      })
      localStorage.setItem(localStorageKeys.EMAIL, formValuesState.email)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      alert(t('register.serverError'))
    }
  }

  return { isLoading, register }
}

export default useRegister
