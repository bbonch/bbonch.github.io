'use client'

import Image from 'next/image'
import chromeWebstore from '../public/chrome-webstore.png'

export default function ChromeWebstoreLink() {
    const chromeWebstoreClicked = () => {
        gtag('event', 'ChromeWebStore')
    }

    return (
        <a onClick={chromeWebstoreClicked} id="chrome-web-store" href="https://chrome.google.com/webstore/detail/searcher-for-discogs/kfaklaicipagejpdmnefheakeoikempa">
            <Image alt="Chrome Webstore logo" src={chromeWebstore} />
        </a>
    )
}