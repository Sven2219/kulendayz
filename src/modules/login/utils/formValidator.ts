import { TFunction } from 'i18next'
import { EMAIL_REGEX, PASSWORD_REGEX } from '../const'

export const validateEmail = (
  email: string,
  t: TFunction<'translation', undefined>
) => {
  return EMAIL_REGEX.test(email) ? '' : t('login.emailError')
}

export const validatePassword = (
  password: string,
  t: TFunction<'translation', undefined>
) => {
  return PASSWORD_REGEX.test(password) ? '' : t('login.passwordError')
}
