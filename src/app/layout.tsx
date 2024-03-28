import type { Metadata } from 'next'
import Script from 'next/script'

import { Screen, Header, Footer } from '~components'

import '@amsterdam/design-system-tokens/dist/root.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'

import './global.css'

export const metadata: Metadata = {
  title: 'Meldingen',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />

        <Script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
        />
      </head>
      <html lang="nl">
        <body>
          <Screen maxWidth="wide">
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </Screen>
        </body>
      </html>
    </>
  )
}
