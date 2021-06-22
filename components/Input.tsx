import { ChangeEventHandler } from 'react'
import { Input as ChakraInput, Box } from '@chakra-ui/react'

export function Input(props: Props) {
  return (
    <Box width="100%">
      <label htmlFor={props.label}>{props.label}</label>
      <ChakraInput id={props.label} onChange={props.onChange} />
    </Box>
  )
}

type Props = {
  label: string
  onChange: ChangeEventHandler<HTMLInputElement>
}
