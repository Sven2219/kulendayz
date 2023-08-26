import styles from './index.module.scss'
import Text from '../text'

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string
  error?: string
  wrapperClassName?: string
}

const Input = ({ label, error, wrapperClassName = '', ...props }: Props) => {
  return (
    <div className={`${styles['input-container']} ${wrapperClassName}`}>
      <Text as="label" className={styles.label}>
        {label}
      </Text>
      <input
        {...props}
        className={`${styles.input} ${error && styles.invalid} ${
          props.className
        }`}
      />
      <Text as="span" variant="small" className={styles['error-message']}>
        {error}
      </Text>
    </div>
  )
}

export default Input
