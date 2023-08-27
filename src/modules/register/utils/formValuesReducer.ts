import { Reducer } from 'react'

export interface FormState {
  email: string
  password: string
  lastName: string
  firstName: string
  emailError: string
  passwordError: string
  lastNameError: string
  firstNameError: string
}

export type FormAction =
  | { type: 'UPDATE_EMAIL'; payload: string }
  | { type: 'UPDATE_PASSWORD'; payload: string }
  | { type: 'UPDATE_LAST_NAME'; payload: string }
  | { type: 'UPDATE_FIRST_NAME'; payload: string }
  | { type: 'UPDATE_EMAIL_ERROR'; payload: string }
  | { type: 'UPDATE_PASSWORD_ERROR'; payload: string }
  | { type: 'UPDATE_LAST_NAME_ERROR'; payload: string }
  | { type: 'UPDATE_FIRST_NAME_ERROR'; payload: string }
  | {
      type: 'UPDATE_ERRORS'
      payload: {
        emailError: string
        passwordError: string
        firstNameError: string
        lastNameError: string
      }
    }

const formReducer: Reducer<FormState, FormAction> = (
  state: FormState,
  action: FormAction
) => {
  switch (action.type) {
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload }
    case 'UPDATE_PASSWORD':
      return { ...state, password: action.payload }
    case 'UPDATE_LAST_NAME':
      return { ...state, lastName: action.payload }
    case 'UPDATE_FIRST_NAME':
      return { ...state, firstName: action.payload }
    case 'UPDATE_EMAIL_ERROR':
      return { ...state, emailError: action.payload }
    case 'UPDATE_PASSWORD_ERROR':
      return { ...state, passwordError: action.payload }
    case 'UPDATE_LAST_NAME_ERROR':
      return { ...state, lastNameError: action.payload }
    case 'UPDATE_FIRST_NAME_ERROR':
      return { ...state, firstNameError: action.payload }
    case 'UPDATE_ERRORS':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const formDefaultState: FormState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  emailError: '',
  passwordError: '',
  lastNameError: '',
  firstNameError: '',
}

export default formReducer
