import LoadingIndicator from '../loadingIndicator'

interface Props {
  label: string
  variant?: 'primary' | 'secondary'
  isLoading?: boolean
  isDisabled?: boolean
  onClick: () => void
}

const Button = ({
  label,
  isLoading = false,
  isDisabled = false,
  variant = 'primary',
  onClick,
}: Props) => {
  return (
    <button
      type="button"
      className={`button-${variant}`}
      onClick={onClick}
      disabled={isLoading || isDisabled}>
      {isLoading ? <LoadingIndicator /> : label}
    </button>
  )
}

export default Button
