import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import discogsLogo from '../public/discogs-logo.png'
import chromeWebstore from '../public/chrome-webstore.png'
import Header from '../components/header'
import Footer from '../components/footer'

const Home: NextPage = () => {
  const chromeWebstoreClicked = () => {
    gtag('event', 'ChromeWebStore')
  }

  return (
    <>
      <Head>
        <title>Searcher for Discogs | Google Chrome extension</title>

        <meta name="description" content="Searcher for Discogs is the Google Chrome extension for the Discogs website. It allows you to listen to tracks on the Discogs by clicking on it. To discover new music is easier with Searcher for Discogs." />
        <meta property="og:title" content="Searcher for Discogs | Google Chrome extension" />
        <meta property="og:description" content="Searcher for Discogs is the Google Chrome extension for the Discogs website. It allows you to listen to tracks on the Discogs by clicking on it." />
      </Head>

      <div className='page page-index'>
        <video autoPlay loop muted>
          <source src="video.mp4" type="video/mp4" />
        </video>
        <div className="wrapper d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Header activePage='home' headerClass='mb-auto' />
          <main className="text-center">
            <h1 className='display-1'>
              <span>
                <span className="searcher">Searcher</span>&nbsp;for&nbsp;
              </span>
              <a className="d-block d-sm-inline" rel="noreferrer" href="https://www.discogs.com" target="_blank">
                <img className="discogs-logo" alt="Discogs logo" src={discogsLogo.src} />
              </a>
            </h1>
            <h2 className="display-6">Enhance your experience on Discogs with this usefull Google Chrome extension.</h2>
            <h2 className="display-6">It allows you to listen to tracks on Discogs by clicking on it.</h2>
            <div>
              <a onClick={chromeWebstoreClicked} id="chrome-web-store" href="https://chrome.google.com/webstore/detail/searcher-for-discogs/kfaklaicipagejpdmnefheakeoikempa">
                <Image alt="Chrome Webstore logo" src={chromeWebstore} />
              </a>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home