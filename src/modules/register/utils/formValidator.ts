export const validateRequired = (value: string, message: string) => {
  return value ? '' : message
}
