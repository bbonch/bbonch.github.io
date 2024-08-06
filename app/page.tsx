import ChromeWebstoreLink from "../components/chromeWebstoreLink";
import Footer from "../components/footer";
import Header from "../components/header";
import discogsLogo from '../public/discogs-logo.png'
import { Metadata } from "next/types";

export const metadata: Metadata = {
    title: 'Searcher for Discogs | Google Chrome extension',
    description: 'Searcher for Discogs is the Google Chrome extension for the Discogs website. It allows you to listen to tracks on the Discogs by clicking on it. To discover new music is easier with Searcher for Discogs.',
    openGraph: {
        title: 'Searcher for Discogs | Google Chrome extension',
        description: 'Searcher for Discogs is the Google Chrome extension for the Discogs website. It allows you to listen to tracks on the Discogs by clicking on it.'
    }
}

const videStructuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "SFD Video",
    description: "Basic usage",
    thumbnailUrl: "https://bbonch.github.io/logo.png",
    uploadDate: new Date("2022-01-01").toISOString(),
    contentUrl: "https://bbonch.github.io/video.mp4"
}

export default function Page() {
    return (
        <>
            <div className='page-index'>
                <video autoPlay loop muted>
                    <source src="video.mp4" type="video/mp4" />
                </video>
                <div className='wrapper d-flex w-100 h-100 p-3 mx-auto flex-column'>
                    <Header activePage='home' headerClass='mb-auto' />
                    <main className="text-center">
                        <h1 className='display-1'>
                            <span>
                                <span className='searcher'>Searcher</span>&nbsp;for&nbsp;
                            </span>
                            <a className="d-block d-sm-inline" rel="noreferrer" href="https://www.discogs.com" target="_blank">
                                <img className='discogs-logo' alt="Discogs logo" src={discogsLogo.src} />
                            </a>
                        </h1>
                        <h2 className="display-6">Enhance your experience on Discogs with this usefull Google Chrome extension.</h2>
                        <h2 className="display-6">It allows you to listen to tracks on Discogs by clicking on it.</h2>
                        <div>
                            <ChromeWebstoreLink />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(videStructuredData) }}
            />
        </>
    )
}