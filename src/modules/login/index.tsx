import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

import styles from '../shared/style/auth-screen.module.scss'
import { RoutesNames } from 'src/router/const/routes'
import { InputChangeType, InputKeyboardType } from '../shared/types/elements'
import useLogin from './hooks/useLogin'
import { validateEmail, validatePassword } from '../shared/utils/formValidator'
import AuthIntro from '../shared/components/authIntro'
import localStorageKeys from 'src/const/localStorage'
import Input from '../shared/components/input'
import Button from '../shared/components/button'
import Text from '../shared/components/text'

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
    await login(email, password)
    navigate(RoutesNames.Portal)
  }

  const onKeyDown = (event: InputKeyboardType) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className={styles['auth-container']}>
      <section className={styles['info-panel']}>
        <AuthIntro
          introTitle={t('login.introTitle')}
          introDescription={t('login.introDescription')}
        />
      </section>
      <section className={styles['form-panel']}>
        <div className={styles['centered-content']}>
          <form className={styles.form}>
            <Text as="h2" variant="title">
              {t('login.title')}
            </Text>
            <div className={styles['input-group']}>
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
            <div className={styles['linkable-wrapper']}>
              <Text as="span" className={styles['linkable-label']}>
                {t('login.notRegisteredMessage')}
              </Text>
              <Link
                to={RoutesNames.Register}
                className={styles['linkable-text']}>
                {t('login.registerNow')}
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Login
