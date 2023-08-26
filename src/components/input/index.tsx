import Text from '../text'

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string
  error?: string
}

const Input = ({ label, error, ...props }: Props) => {
  return (
    <div className="input-wrapper">
      <Text as="label" className="label">
        {label}
      </Text>
      <input className={`input ${error && 'invalid'}`} {...props} />
      <Text as="span" variant="small" className="error">
        {error}
      </Text>
    </div>
  )
}

export default Input
