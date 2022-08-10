import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Questions from '../components/questions'

const FAQ: NextPage = () => {
    useEffect(() => {
        import('bootstrap/js/dist/collapse')
    })

    return (
        <>
            <Head>
                <title>Searcher for Discogs | Frequently Asked Questions</title>

                <meta name="description" content="Get answers to your questions about Searcher for Discogs. Learn about functionality, user interface and more on this page." />
                <meta property="og:title" content="Searcher for Discogs | Frequently Asked Questions" />
                <meta property="og:description" content="Get answers to your questions about Searcher for Discogs. Learn about functionality, user interface and more on this page." />
            </Head>

            <div className="d-flex w-100 h-100 p-3 mx-auto flex-column">
                <Header activePage='faq' />
                <main>
                    <h1 className="text-center py-5 display-1">Frequently Asked Questions</h1>
                    <div className="container mb-5">
                        <Questions />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default FAQ