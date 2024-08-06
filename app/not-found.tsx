import Link from "next/link";
import { Metadata } from "next/types";
import ErrorLayout from "./error-layout";

export const metadata: Metadata = {
    title: 'Searcher for Discogs | Page Not Found',
    description: 'It seems page does not exist.',
    openGraph: {
        title: 'Searcher for Discogs | Page Not Found',
        description: 'It seems page does not exist.'
    }
}

export default function NotFound() {
    return (
        <ErrorLayout>
            <h1 className="py-5 display-1">Page Not Found</h1>
            <Link href="/">
                Home
            </Link>
        </ErrorLayout>
    )
}