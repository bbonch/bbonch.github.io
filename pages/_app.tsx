import type { AppProps } from 'next/app'
import '../styles/sfd.scss'
import Script from 'next/script';
import Head from 'next/head'
import { useEffect } from 'react';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('bootstrap/js/dist/collapse')
  }, [])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="Dmitry Sergienko" />
        <meta property="og:image" content="logo.png" />
      </Head>

      <Component {...pageProps} />

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-KVM77HR8CM" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KVM77HR8CM');
        `}
      </Script>
    </>
  )
}

export default App