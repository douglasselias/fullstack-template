// import Document, { Html, Head, Main, NextScript } from 'next/document'

// export default class MyDocument extends Document {
//   render(): Element {
//     return (
//       <Html lang="pt-BR">
//         <Head>
//           <meta charSet="utf-8" />
//           <meta name="description" content="Fullstack Template" />
//           <meta name="theme-color" content="#2ebd59" />

//           <link rel="shortcut icon" href="favicon.png" />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }

import Document, { DocumentContext, DocumentInitialProps } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
}

export default MyDocument
