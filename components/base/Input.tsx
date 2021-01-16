export function Input(props: Props): JSX.Element {
  const { onChange, placeholder } = props

  return (
    <input
      className="input"
      onChange={({ target }) => onChange(target.value)}
      placeholder={placeholder}
    />
  )
}

type Props = {
  onChange(value: string): void
  placeholder: string
}
