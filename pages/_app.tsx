import { AppProps } from 'next/app'

import { ChakraProvider, Flex } from '@chakra-ui/react'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Flex justify="center">
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  )
}

export default App
