import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { RoutesNames } from 'src/router/const/routes'
import Text from 'src/components/text'
import Input from 'src/components/input'
import Button from 'src/components/button'
import { defaultFormState, reducer } from './utils/formReducer'
import { validateEmail, validatePassword } from './utils/formValidator'

type InputChangeType = React.ChangeEvent<HTMLInputElement>

const Login = () => {
  const [formState, setFormState] = React.useReducer(reducer, defaultFormState)
  const { t } = useTranslation()

  const handleSubmit = () => {
    const { email, password } = formState
    const emailError = validateEmail(email, t)
    const passwordError = validatePassword(password, t)
    if (emailError || passwordError) {
      setFormState({ emailError, passwordError })
      return
    }
    console.log('Execute action', email, password)
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
              type="email"
              label={t('login.emailLabel')}
              error={formState.emailError}
              placeholder={t('login.emailPlaceholder')}
              onChange={(e: InputChangeType) =>
                setFormState({ email: e.target.value })
              }
              onBlur={(e: InputChangeType) => {
                setFormState({
                  emailError: validateEmail(e.target.value, t),
                })
              }}
            />
            <Input
              type="password"
              label={t('login.passwordLabel')}
              error={formState.passwordError}
              placeholder={t('login.passwordPlaceholder')}
              onChange={(e: InputChangeType) =>
                setFormState({ email: e.target.value })
              }
              onBlur={(e: InputChangeType) =>
                setFormState({
                  passwordError: validatePassword(e.target.value, t),
                })
              }
            />
          </div>
          <Button
            label={t('login.submitButton')}
            onClick={handleSubmit}
            isDisabled={!!(formState.emailError || formState.passwordError)}
          />
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
