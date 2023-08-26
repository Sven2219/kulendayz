import React from 'react'
import { useTranslation } from 'react-i18next'

import { FormState } from '../utils/formValuesReducer'

const useRegister = () => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = React.useState(false)

  const register = async (
    formValuesState: FormState
  ): Promise<string | undefined> => {
    try {
      setIsLoading(true)
      const result = await registerMock(formValuesState)
      setIsLoading(false)
      return result
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
