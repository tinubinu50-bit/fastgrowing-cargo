import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Real Times Cargo Transport LLC | Logistics & Transport Dubai',
  description: 'Real Times Cargo Transport LLC — full-fledged logistics and transport service provider in Dubai, UAE. 10+ years experience. 24/7 operations. Linehaul, chiller, heavy load, flatbed and more.',
  keywords: 'cargo transport Dubai, logistics UAE, truck rental Dubai, linehaul transport UAE, chiller truck Dubai, heavy transport Dubai, flatbed truck UAE, cargo company Dubai, Real Times Cargo',
  authors: [{ name: 'Real Times Cargo Transport LLC' }],
  creator: 'Real Times Cargo Transport LLC',
  publisher: 'Real Times Cargo Transport LLC',
  metadataBase: new URL('https://www.realtimestc.ae'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Real Times Cargo Transport LLC | Dubai Logistics',
    description: 'Full-fledged logistics and transport in Dubai UAE. 10+ years experience, 20+ vehicle types, 24/7 operations.',
    url: 'https://www.realtimestc.ae',
    siteName: 'Real Times Cargo Transport LLC',
    images: [
      {
        url: '/images/truck-road.jpg',
        width: 1200,
        height: 630,
        alt: 'Real Times Cargo Transport LLC Dubai',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Times Cargo Transport LLC | Dubai Logistics',
    description: 'Full-fledged logistics and transport in Dubai UAE. 24/7 operations.',
    images: ['/images/hero-dubai.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.278381;55.3131201" />
        <meta name="ICBM" content="25.278381, 55.3131201" />
        <link rel="canonical" href="https://www.realtimestc.ae" />
      </head>
      <body style={{ overflowX: 'hidden', margin: 0, padding: 0 }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
