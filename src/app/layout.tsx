import "./globals.css"
import { Inter } from "next/font/google"
import dynamic from "next/dynamic"

export const metadata = {
  title: "RiskThinking - Work Sample",
  description: "Work Sample designed and developed by Kevin Vo",
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
    <html lang="en" className={`${inter.variable} font-inter tracking-tight`}>
      <body className="min-h-screen">
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      </body>
    </html>
  )
}
