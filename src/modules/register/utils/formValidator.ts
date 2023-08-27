import {
  validateEmail,
  validatePassword,
} from 'src/modules/shared/utils/formValidator'
import { FormState } from './formValuesReducer'
import { TFunction } from 'i18next'

export const validateRequired = (value: string, message: string) => {
  return value ? '' : message
}

export const validateForm = (
  formState: FormState,
  t: TFunction<'translation', undefined>
) => {
  const payload = {
    emailError: validateEmail(formState.email, t),
    passwordError: validatePassword(formState.password, t),
    firstNameError: validateRequired(
      formState.firstName,
      t('register.firstNameError')
    ),
    lastNameError: validateRequired(
      formState.lastName,
      t('register.lastNameError')
    ),
  }
  return { payload, isInvalid: Object.values(payload).some((el) => el) }
}
