import Script from "next/dist/client/script";
import type { Metadata } from "next/types";
import { PropsWithChildren } from "react";
import logo from '../public/logo.png'
import '../styles/sfd.scss'

export const metadata: Metadata = {
    authors: {
        name: 'Dmitry Sergienko'
    },
    openGraph: {
        images: [
            {
                url: logo.src
            }
        ]
    }
}

export default function Layout({
    children,
}: PropsWithChildren) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.ANALYTICS_ID}');
                `}
            </Script>
        </html>
    )
}