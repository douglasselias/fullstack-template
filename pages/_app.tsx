import { AppProps } from 'next/app'

import { ChakraProvider, Flex } from '@chakra-ui/react'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Flex justify="center" paddingTop="30px">
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  )
}

export default App
