import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

import { RoutesNames } from 'src/router/const/routes'
import Text from 'src/components/text'
import Input from 'src/components/input'
import Button from 'src/components/button'
import { defaultFormState, reducer } from './utils/formReducer'
import { validateEmail, validatePassword } from './utils/formValidator'
import { InputChangeType, InputKeyboardType } from '../shared/types/elements'
import useLogin from './hooks/useLogin'

const Login = () => {
  const navigate = useNavigate()
  const { login, isLoading } = useLogin()
  const [formState, setFormState] = React.useReducer(reducer, defaultFormState)
  const { t } = useTranslation()

  const handleSubmit = async () => {
    const { email, password } = formState
    const emailError = validateEmail(email, t)
    const passwordError = validatePassword(password, t)
    console.log(email, password)
    if (emailError || passwordError) {
      setFormState({ emailError, passwordError })
      return
    }
    const result = await login(email, password)
    localStorage.setItem('token', result as string)
    navigate(RoutesNames.Portal)
  }

  const onKeyDown = (event: InputKeyboardType) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className="screen-wrapper">
      <div className="left-side">
        <div className="intro-wrapper">
          <Text as="h1" variant="title" className="intro-title">
            {t('login.introTitle')}
          </Text>
          <Text as="h2" variant="subtitle">
            {t('login.introDescription')}
          </Text>
        </div>
      </div>
      <div className="right-side">
        <div className="form-wrapper">
          <form className="form">
            <Text as="h2" variant="title">
              {t('login.title')}
            </Text>
            <form className="input-form">
              <Input
                type="email"
                label={t('login.emailLabel')}
                error={formState.emailError}
                placeholder={t('login.emailPlaceholder')}
                onKeyDown={onKeyDown}
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
                onKeyDown={onKeyDown}
                onChange={(e: InputChangeType) =>
                  setFormState({ password: e.target.value })
                }
                onBlur={(e: InputChangeType) =>
                  setFormState({
                    passwordError: validatePassword(e.target.value, t),
                  })
                }
              />
            </form>
            <Button
              label={t('login.submitButton')}
              onClick={handleSubmit}
              isLoading={isLoading}
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
    </div>
  )
}

export default Login
