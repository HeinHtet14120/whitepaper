import "./globals.css"
import { Inter } from "next/font/google"
import Sidebar from "./components/Sidebar"
import ThemeToggle from "./components/ThemeToggle"
import { ThemeProvider } from "./components/ThemeProvider"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Junior Mafia docs",
  description: "Documentation for Junior Mafia API",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-black text-black dark:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 p-8 overflow-auto">
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-end mb-4">
                </div>
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

