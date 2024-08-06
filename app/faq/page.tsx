import { Metadata } from "next/types";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Questions from "../../components/questions";

export const metadata: Metadata = {
    title: 'Searcher for Discogs | Frequently Asked Questions',
    description: 'Get answers to your questions about Searcher for Discogs. Learn about functionality, user interface and more on this page.',
    openGraph: {
        title: 'Searcher for Discogs | Frequently Asked Questions',
        description: 'Get answers to your questions about Searcher for Discogs. Learn about functionality, user interface and more on this page.'
    }
}

export default function Page() {
    return (
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
    )
}