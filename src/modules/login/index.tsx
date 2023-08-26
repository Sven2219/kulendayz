import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

import { RoutesNames } from 'src/router/const/routes'
import Text from 'src/components/text'
import Input from 'src/components/input'
import Button from 'src/components/button'
import { InputChangeType, InputKeyboardType } from '../shared/types/elements'
import useLogin from './hooks/useLogin'

import { validateEmail, validatePassword } from '../shared/utils/formValidator'
import AuthIntro from '../shared/components/AuthIntro'
import localStorageKeys from 'src/const/localStorage'

const Login = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { login, isLoading } = useLogin()
  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState(
    localStorage.getItem(localStorageKeys.EMAIL) ?? ''
  )
  const [passwordError, setPasswordError] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleSubmit = async () => {
    const emailError = validateEmail(email, t)
    const passwordError = validatePassword(password, t)
    if (emailError || passwordError) {
      setPasswordError(passwordError)
      setEmailError(emailError)
      return
    }
    const response = await login(email, password)
    if (response) {
      localStorage.setItem(localStorageKeys.TOKEN, response)
      navigate(RoutesNames.Portal)
    }
  }

  const onKeyDown = (event: InputKeyboardType) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className="screen-wrapper">
      <div className="left-side">
        <AuthIntro
          introTitle={t('login.introTitle')}
          introDescription={t('login.introDescription')}
        />
      </div>
      <div className="right-side">
        <div className="form-wrapper">
          <form className="form">
            <Text as="h2" variant="title">
              {t('login.title')}
            </Text>
            <div className="input-form">
              <Input
                type="email"
                label={t('login.emailLabel')}
                error={emailError}
                value={email}
                placeholder={t('login.emailPlaceholder')}
                onKeyDown={onKeyDown}
                onChange={(e: InputChangeType) => setEmail(e.target.value)}
                onBlur={(e: InputChangeType) =>
                  setEmailError(validateEmail(e.target.value, t))
                }
              />
              <Input
                type="password"
                label={t('login.passwordLabel')}
                error={passwordError}
                value={password}
                placeholder={t('login.passwordPlaceholder')}
                onKeyDown={onKeyDown}
                onChange={(e: InputChangeType) => setPassword(e.target.value)}
                onBlur={(e: InputChangeType) =>
                  setPasswordError(validatePassword(e.target.value, t))
                }
              />
            </div>
            <Button
              label={t('login.submitButton')}
              onClick={handleSubmit}
              isLoading={isLoading}
              isDisabled={!!(emailError || passwordError)}
            />
            <div className="linkable-wrapper">
              <Text as="span" className="linkable-label">
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
