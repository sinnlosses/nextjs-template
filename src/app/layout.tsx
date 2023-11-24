import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { AppProvider } from "@/providers"
import { MainLayout } from "@/components/layouts"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TODO: Input Title",
  description: "TODO: Input Description",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
      </body>
    </html>
  )
}
