interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string
}

const Input = ({ label, ...props }: Props) => {
  return (
    <div>
      <label className="label">{label}</label>
      <input className="input" {...props} />
    </div>
  )
}

export default Input
