import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
        <script crossOrigin src="https://blockonomics.co/js/pay_widget.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>


    </Html>
  )
}
