import { Button as ChakraButton } from '@chakra-ui/react'

export const PrimaryButton = ({ text, onClick }: Omit<Props, 'color'>) =>
  Button({ text, onClick, color: 'blue' })

export const SecondaryButton = ({ text, onClick }: Omit<Props, 'color'>) =>
  Button({ text, onClick })

function Button(props: Props) {
  const { text, onClick, color } = props

  return (
    <ChakraButton onClick={onClick} colorScheme={color} isFullWidth>
      {text}
    </ChakraButton>
  )
}

type Props = {
  text: string
  onClick(): void
  color?: 'blue'
}
