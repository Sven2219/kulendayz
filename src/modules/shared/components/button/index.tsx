import styles from './index.module.scss'
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
      className={styles[`${variant}-button`]}
      onClick={onClick}
      disabled={isLoading || isDisabled}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Text as="span" className={styles['button-label']}>
          {label}
        </Text>
      )}
    </button>
  )
}

export default Button
