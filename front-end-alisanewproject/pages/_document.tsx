import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" sizes='any' type='image/svf+xml' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
