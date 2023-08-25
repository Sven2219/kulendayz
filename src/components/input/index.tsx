import Text from '../text'

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string
}

const Input = ({ label, ...props }: Props) => {
  return (
    <div className="input-wrapper">
      <Text as="label" className="label">
        {label}
      </Text>
      <input className="input" {...props} />
      <Text as="span">Error</Text>
    </div>
  )
}

export default Input
