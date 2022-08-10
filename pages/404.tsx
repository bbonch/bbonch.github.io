import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

const SFD404: NextPage = () => {
    return (
        <>
            <Head>
                <title>Searcher for Discogs | Page Not Found</title>

                <meta name="description" content="It seems page does not exist." />
                <meta property="og:title" content="Searcher for Discogs | Page Not Found" />
                <meta property="og:description" content="It seems page does not exist." />
                <meta name="robots" content="noindex" />
            </Head>

            <div className="d-flex w-100 h-100 p-3 mx-auto flex-column">
                <Header />
                <main className="text-center">
                    <h1 className="py-5 display-1">Page Not Found</h1>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default SFD404