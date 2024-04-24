import type { Metadata } from "next"
import { Inter, Saira } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const saira = Saira({ subsets: ["latin"], weight: ["400"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={saira.className}>{children}</body>
    </html>
  )
}
