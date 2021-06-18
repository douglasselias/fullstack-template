import { Heading } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'

function Index() {
  return (
    <>
      <VStack spacing={4} maxWidth="40rem">
        <Heading>Clean Arch</Heading>
        <label>
          E-mail
          <Input />
        </label>
        <label>
          Senha
          <Input />
        </label>

        <Button colorScheme="blue" isFullWidth>
          Sign In
        </Button>
        <Button isFullWidth>Reset Password</Button>
      </VStack>
    </>
  )
}

export default Index
