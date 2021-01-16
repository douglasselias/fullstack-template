import { ReactNode } from 'react'

export function Button(props: Props): JSX.Element {
  const { onClick, children } = props

  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  )
}

type Props = {
  onClick(): void
  children: ReactNode
}
