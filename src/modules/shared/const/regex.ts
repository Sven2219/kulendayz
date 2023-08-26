export const EMAIL_REGEX = new RegExp(
  '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
)

export const PASSWORD_REGEX = new RegExp('^(?=.*[A-Za-z])(?=.*\\d).{8,}$')
