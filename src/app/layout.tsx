import './globals.css'
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })
const tag = process.env.NEXT_PUBLIC_MEASUREMENT_ID

export const metadata = {
  title: 'Rodrigo Sakae - Fullstack developer',
  description: 'Portfolio created in 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Google tag (gtag.js) */}
      <Script
        src={ `https://www.googletagmanager.com/gtag/js?id=${tag}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HCQ6KVJ685');
        `}
      </Script>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
