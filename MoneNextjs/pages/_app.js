// pages/_app.js
import React from 'react';
import Head from 'next/head';
import { Cursor, Header, LoadingScreen, ScrollToTop } from '@/components';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/styles/theme.scss';
import '@/styles/all.min.css';

// Google fonts (self-hosted by Next.js)
import { Outfit, Open_Sans } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Head>
            {/* ✅ Global tab title + meta */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Jacob Joy — AI Media Portfolio</title>
            <meta
              name="description"
              content="Portfolio showcasing AI-generated videos and images by Jacob Joy."
            />
            {/* ✅ Favicon placed at /public/favicon.ico */}
            <link rel="icon" href="/favicon.ico" />
            {/* (Optional) Apple touch icon if you add one in /public */}
            {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
          </Head>

          {/* Cursor */}
          <Cursor />

          {/* Header */}
          <Header />

          {/* Apply fonts globally */}
          <main className={`${outfit.className} ${openSans.className}`}>
            <Component {...pageProps} />
          </main>

          {/* Scroll To Top */}
          <ScrollToTop />
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
