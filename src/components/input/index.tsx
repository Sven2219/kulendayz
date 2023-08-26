import Text from '../text'

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string
  error?: string
  wrapperClassName?: string
}

const Input = ({ label, error, wrapperClassName = '', ...props }: Props) => {
  return (
    <div className={`input-wrapper ${wrapperClassName}`}>
      <Text as="label" className="label">
        {label}
      </Text>
      <input
        {...props}
        className={`input ${error && 'invalid'} ${props.className}`}
      />
      <Text as="span" variant="small" className="error">
        {error}
      </Text>
    </div>
  )
}

export default Input
