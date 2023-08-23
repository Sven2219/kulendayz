import { useTranslation } from 'react-i18next'

const Login = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1 className="title-text">{t('login.title')}</h1>
    </div>
  )
}

export default Login
