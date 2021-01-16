export function Input(props: Props): JSX.Element {
  const { onChange, placeholder, value } = props

  return (
    <input
      className="input"
      onChange={({ target }) => onChange(target.value)}
      placeholder={placeholder}
      value={value}
    />
  )
}

type Props = {
  onChange(value: string): void
  placeholder: string
  value: string
}
