import LoadingIndicator from '../loadingIndicator'
import Text from '../text'

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
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Text as="span" className="button-label">
          {label}
        </Text>
      )}
    </button>
  )
}

export default Button
