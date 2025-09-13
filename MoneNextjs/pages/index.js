import Head from 'next/head'
import { mainData } from '@/lib/data'
import { About, Awards, Blog, Contact, Hero, Portfolio, Services, Testimonial } from '@/components'

export default function Home() {
    return (
        <>
            <Head>
                <title>{mainData.websiteTitle}</title>
                <meta name="description" content={mainData.description} />
                <meta name="keywords" content={mainData.keywords} />
            </Head>
            <main>
                {/* Hero section */}
                <Hero />
                 {/* Testimonial section */}
                <Testimonial />
                {/* About section */}
                <About />
                {/* Services section */}
                <Services />
                {/* Portfolio section */}
                <Portfolio />
                {/* Awards section
                <Awards /> */}
                {/* Blog section
                <Blog /> */}
                {/* Contact section */}
                <Contact />
                {/* Footer section */}
            </main>
        </>
    )
}
