import { Heading as ChakraHeading } from '@chakra-ui/react'

export function Heading(props: Props) {
  return <ChakraHeading>{props.text}</ChakraHeading>
}

type Props = {
  text: string
}
