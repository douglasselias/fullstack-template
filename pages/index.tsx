import { VStack } from '@chakra-ui/react'

import { PrimaryButton, SecondaryButton, Input, Heading } from '@/components'

function onClick() {
  console.log()
}

function Index() {
  return (
    <>
      <VStack spacing={4} maxWidth="40rem">
        <Heading text="Exemplo Arquitetura Limpa" />

        <Input label="E-mail" />
        <Input label="Senha" />

        <PrimaryButton text="Login" onClick={onClick} />
        <SecondaryButton text="Redefinir Senha" onClick={onClick} />
      </VStack>
    </>
  )
}

export default Index
