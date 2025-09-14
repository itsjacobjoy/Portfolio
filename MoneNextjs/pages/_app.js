import React from 'react'
import { Cursor, Footer, Header, LoadingScreen, ScrollToTop } from '@/components'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/styles/theme.scss'
import '@/styles/all.min.css'
import Head from 'next/head'
import { mainData } from '@/lib/data'

// ✅ Import fonts from next/font/google
import { Outfit, Open_Sans } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800']
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {loading ? (
        <React.Fragment>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" href={mainData.favicon.src} />
          </Head>
          {/* Cursor */}
          <Cursor />

          {/* Header */}
          <Header />

          <Component {...pageProps} />

          

          {/* Scroll To Top */}
          <ScrollToTop />
        </React.Fragment>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}
