interface Props extends React.HTMLProps<HTMLButtonElement> {
  isLoading?: boolean
}

const Button = ({ isLoading, ...props }: Props) => {
  return (
    <div>
      {!isLoading && <button className="button" {...props} type="button" />}
    </div>
  )
}

export default Button
