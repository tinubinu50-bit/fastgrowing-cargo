import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Real Times Cargo Transport LLC | Dubai Logistics',
  description: 'Full-fledged logistics and transport service provider in Dubai, UAE. 10+ years experience. 24/7 operations.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body style={{ overflowX: 'hidden', margin: 0, padding: 0 }}>
        <Navbar />
        <main style={{ overflowX: 'hidden' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
