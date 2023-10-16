import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Muhammad Ahmad Mughal',
}

const Mont = Montserrat(
  {
    subsets: ["latin"],
    variable: "--font-mont"
  }
)


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={Mont.className} >{children} </body>
    </html>
  )
}
