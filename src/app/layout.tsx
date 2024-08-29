import { type PropsWithChildren } from "react"
import type { Metadata } from "next"

// Components
import { MoseyBankHeader } from '@/components/header'
import { MoseyBankFooter } from '@/components/footer'
import { ThemeProvider, Body } from '@/components/theme'
import { Scripts } from '@remkoj/optimizely-one-nextjs/server'
import { OptimizelyOneProvider, PageActivator, OptimizelyOneGadget } from '@remkoj/optimizely-one-nextjs/client'


// Styling
import { Figtree } from "next/font/google"
import "./globals.scss"

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
    description: "An Optimizely demo website",
    keywords: "Mosey bank, Mosey, Optimizely, Demo",
    title: {
        default: "Mosey Bank - An Optimizely Demo",
        template: "%s - An Optimizely Demo"
    }
};

type RootLayoutProps = Readonly<PropsWithChildren<{
    children: React.ReactNode
}>>

export default function RootLayout({ children }: RootLayoutProps) {
    return <html>
        <head>
            <Scripts.Header />
        </head>
        <body>
            <OptimizelyOneProvider value={{ debug: true }}>
                <PageActivator />
            { children }
            <OptimizelyOneGadget servicePrefix='/api/me' refreshInterval={ 2000 } />
            </OptimizelyOneProvider>
            <Scripts.Footer />
        </body>
    </html>
}
