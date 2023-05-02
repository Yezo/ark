import "./globals.css"
import { Inter } from "next/font/google"
import dynamic from "next/dynamic"

export const metadata = {
  title: {
    default: "RiskThinking",
    template: "%s | RiskThinking",
  },
  description: "Work Sample designed and developed by Kevin Vo",
  openGraph: {
    title: "RiskThinking",
    description: "Work Sample designed and developed by Kevin Vo",
    url: "https://riskthinking.vercel.app/",
    siteName: "RiskThinking",
    locale: "en-US",
    type: "website",
  },
}

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
})

const Navbar = dynamic(() => import("@/components/Navbar/Navbar"))
const Footer = dynamic(() => import("@/components/Footer/Footer"))

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} font-inter tracking-tight antialiased`}>
      <body className="min-h-screen ">
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      </body>
    </html>
  )
}
