import { Button as ChakraButton } from '@chakra-ui/react'

export function FullWidthButton(props: Omit<Props, 'isFullWidth'>) {
  return Button({ ...props, isFullWidth: true })
}

export function Button(props: Props) {
  const { text, color, isFullWidth } = props

  return (
    <ChakraButton colorScheme={color} isFullWidth={isFullWidth}>
      {text}
    </ChakraButton>
  )
}

type Props = {
  text: string
  color?: 'blue'
  isFullWidth?: boolean
}

const bProps = {}

function propsBuilder(text: string) {
  return { ...bProps, text }
}

const colorBlueProp = (bProps: Props) => ({ ...bProps, color: 'blue' })
const isFullWidthProp = (bProps: Props) => ({ ...bProps, isFullWidth: true })

pipe(colorBlueProp, isFullWidthProp)(bProps)

function pipe(...fns: any) {
  return (initialValue: any) => {
    return fns.reduce((acc: any, func: any) => func(acc), initialValue)
  }
}
