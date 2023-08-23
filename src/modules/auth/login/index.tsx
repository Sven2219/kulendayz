import React from 'react'

import { useTranslation } from 'react-i18next'

const Login = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1>{t('login.title')}</h1>
    </div>
  )
}

export default Login
