import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/index.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fullstack Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
