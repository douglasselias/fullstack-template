import { ReactNode } from 'react'

export function Header(props: Props): JSX.Element {
  const { children } = props

  return <h1 className="header">{children}</h1>
}

type Props = {
  children: ReactNode
}
