import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { RoutesNames } from 'src/router/const/routes'
import Text from 'src/components/text'
import Input from 'src/components/input'
import Button from 'src/components/button'

const Login = () => {
  const { t } = useTranslation()

  const handleSubmit = () => {
    console.log('handleSubmit')
  }

  return (
    <div className="screen-wrapper">
      <div className="left-side">
        <h1>Lorem ipsum</h1>
      </div>
      <div className="right-side">
        <form className="form">
          <Text as="h2" variant="title">
            {t('login.title')}
          </Text>

          <div className="input-form">
            <Input
              placeholder={t('login.emailPlaceholder')}
              label={t('login.emailLabel')}
            />
            <Input
              placeholder={t('login.passwordPlaceholder')}
              label={t('login.passwordLabel')}
            />
          </div>
          <Button label={t('login.submitButton')} onClick={handleSubmit} />
          <div className="linkable-wrapper">
            <Text as="span" className="registration-label">
              {t('login.notRegisteredMessage')}
            </Text>
            <Link to={RoutesNames.Register} className="linkable-text">
              {t('login.registerNow')}
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
