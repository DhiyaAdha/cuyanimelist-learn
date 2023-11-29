import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// meta-title-SEO
export const metadata = {
  title: 'CUYANIMELIST',
  description: 'Website Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>TESTING-LAYOUT</div>
        {children}
      </body>
    </html>
  )
}
