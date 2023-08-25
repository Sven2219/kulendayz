interface FormState {
  email: string
  password: string
  emailError: string
  passwordError: string
}

export const reducer = (
  state: FormState,
  newState: Partial<FormState>
): FormState => ({ ...state, ...newState })

export const defaultFormState = {
  email: '',
  password: '',
  emailError: '',
  passwordError: '',
}
