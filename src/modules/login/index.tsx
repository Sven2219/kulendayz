import { useTranslation } from 'react-i18next'
import Button from '../shared/components/button'
import Input from '../shared/components/input'

const Login = () => {
  const { t } = useTranslation()

  return (
    <div className="screen-wrapper">
      <div className="left-side">
        <h1>Lorem ipsum</h1>
      </div>
      <div className="right-side">
        <form className="form">
          <h2 className="title-text">{t('login.title')}</h2>
          <div className="input-wrapper">
            <Input
              placeholder={t('login.emailPlaceholder')}
              label={t('login.emailLabel')}
            />
            <Input
              placeholder={t('login.passwordPlaceholder')}
              label={t('login.passwordLabel')}
            />
          </div>
          <Button />
        </form>
      </div>
    </div>
  )
}

export default Login
