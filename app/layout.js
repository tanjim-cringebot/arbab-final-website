import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arbab Pack Ltd',
  description: 'Innovative packaging solutions for a sustainable future',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className=""> {/* Add padding-top to account for fixed navbar */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
