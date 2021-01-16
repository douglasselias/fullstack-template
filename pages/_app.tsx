import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/index.css'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Fullstack Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="max-w-2xl py-12 px-8 my-0 mx-auto">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App
