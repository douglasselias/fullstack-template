import { Input as ChakraInput, Box } from '@chakra-ui/react'

export function Input(props: Props) {
  return (
    <Box width="100%">
      <label>{props.label}</label>
      <ChakraInput />
    </Box>
  )
}

type Props = {
  label: string
}
