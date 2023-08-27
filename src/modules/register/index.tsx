import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

import styles from '../shared/style/auth-screen.module.scss'
import { RoutesNames } from 'src/router/const/routes'
import Text from 'src/components/text'
import Input from 'src/components/input'
import Button from 'src/components/button'
import { InputChangeType, InputKeyboardType } from '../shared/types/elements'
import useRegister from './hooks/useRegister'

import { validateEmail, validatePassword } from '../shared/utils/formValidator'
import AuthIntro from '../shared/components/authIntro'
import localStorageKeys from 'src/const/localStorage'
import { validateRequired } from './utils/formValidator'
import formReducer, { formDefaultState } from './utils/formValuesReducer'

const Register = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { register, isLoading } = useRegister()
  const [formState, dispatch] = React.useReducer(formReducer, formDefaultState)
  const { emailError, passwordError, lastNameError, firstNameError } = formState

  const handleSubmit = async () => {
    const emailError = validateEmail(formState.email, t)
    const passwordError = validatePassword(formState.password, t)
    if (
      emailError ||
      passwordError ||
      !formState.firstName ||
      !formState.lastName
    ) {
      dispatch({
        type: 'UPDATE_ERRORS',
        payload: {
          emailError,
          passwordError,
          firstNameError: t('register.firstNameError'),
          lastNameError: t('register.lastNameError'),
        },
      })
      return
    }

    const response = await register(formState)
    if (response) {
      localStorage.setItem(localStorageKeys.EMAIL, formState.email)
      navigate(RoutesNames.Login)
    }
  }

  const onKeyDown = (event: InputKeyboardType) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className={styles['auth-container']}>
      <div className={styles['info-panel']}>
        <AuthIntro
          introTitle={t('register.introTitle')}
          introDescription={t('register.introDescription')}
        />
      </div>
      <div className={styles['form-panel']}>
        <div className={styles['centered-content']}>
          <form className={styles.form}>
            <Text as="h2" variant="title">
              {t('register.title')}
            </Text>
            <div className={styles['input-group']}>
              <div className={styles['input-row']}>
                <Input
                  type="text"
                  wrapperClassName={styles['half-width-input']}
                  label={t('register.firstNameLabel')}
                  error={firstNameError}
                  placeholder={t('register.firstNamePlaceholder')}
                  onKeyDown={onKeyDown}
                  onChange={(e: InputChangeType) =>
                    dispatch({
                      type: 'UPDATE_FIRST_NAME',
                      payload: e.target.value,
                    })
                  }
                  onBlur={(e: InputChangeType) =>
                    dispatch({
                      type: 'UPDATE_FIRST_NAME_ERROR',
                      payload: validateRequired(
                        e.target.value,
                        t('register.firstNameError')
                      ),
                    })
                  }
                />
                <Input
                  type="text"
                  wrapperClassName={styles['half-width-input']}
                  label={t('register.lastNameLabel')}
                  error={lastNameError}
                  placeholder={t('register.lastNamePlaceholder')}
                  onKeyDown={onKeyDown}
                  onChange={(e: InputChangeType) =>
                    dispatch({
                      type: 'UPDATE_LAST_NAME',
                      payload: e.target.value,
                    })
                  }
                  onBlur={(e: InputChangeType) =>
                    dispatch({
                      type: 'UPDATE_LAST_NAME_ERROR',
                      payload: validateRequired(
                        e.target.value,
                        t('register.lastNameError')
                      ),
                    })
                  }
                />
              </div>
              <Input
                type="email"
                label={t('register.emailLabel')}
                error={emailError}
                placeholder={t('register.emailPlaceholder')}
                onKeyDown={onKeyDown}
                onChange={(e: InputChangeType) =>
                  dispatch({
                    type: 'UPDATE_EMAIL',
                    payload: e.target.value,
                  })
                }
                onBlur={(e: InputChangeType) =>
                  dispatch({
                    type: 'UPDATE_EMAIL_ERROR',
                    payload: validateEmail(e.target.value, t),
                  })
                }
              />
              <Input
                type="password"
                label={t('register.passwordLabel')}
                error={passwordError}
                placeholder={t('register.passwordPlaceholder')}
                onKeyDown={onKeyDown}
                onChange={(e: InputChangeType) =>
                  dispatch({
                    type: 'UPDATE_PASSWORD',
                    payload: e.target.value,
                  })
                }
                onBlur={(e: InputChangeType) =>
                  dispatch({
                    type: 'UPDATE_PASSWORD_ERROR',
                    payload: validatePassword(e.target.value, t),
                  })
                }
              />
            </div>
            <Button
              label={t('register.submitButton')}
              onClick={handleSubmit}
              isLoading={isLoading}
              isDisabled={
                !!(
                  emailError ||
                  passwordError ||
                  lastNameError ||
                  firstNameError
                )
              }
            />
            <div className={styles['linkable-wrapper']}>
              <Text as="span" className={styles['linkable-label']}>
                {t('register.alreadyRegisteredMessage')}
              </Text>
              <Link to={RoutesNames.Login} className={styles['linkable-text']}>
                {t('register.loginNow')}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
