import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Fast Growing Cargo Transport LLC | Abu Dhabi Logistics',
  description: 'Fast Growing Cargo Transport LLC — full-fledged logistics and transport service provider in Abu Dhabi, UAE.',
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
        <link rel="canonical" href="https://www.fastgrowingcargo.ae" />
      </head>
      <body style={{ overflowX: 'hidden', margin: 0, padding: 0 }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
