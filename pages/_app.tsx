import type { AppProps } from 'next/app'
import '../styles/sfd.scss'
import Script from 'next/script';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <Script src="https://www.googletagmanager.com/gtag/js?id=UA-50788406-5" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-50788406-5');
        `}
      </Script>
    </>
  )
}

export default App