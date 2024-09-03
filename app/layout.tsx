import { LayoutProps } from "@/lib/types"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.scss"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "HTML to DOM",
  description: "Html to DOM conversor s one can see different ways to interact with a tag from CSS or JS"
}

const interFont = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(interFont.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}