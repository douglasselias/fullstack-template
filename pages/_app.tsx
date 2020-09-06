import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/core'

function App({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Head>
        <title>Fullstack Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
