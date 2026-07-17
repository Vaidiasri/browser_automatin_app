import { ClerkProvider } from "@clerk/nextjs"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
<<<<<<< Updated upstream
import { cn } from "@/lib/utils";
=======
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"
>>>>>>> Stashed changes

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
<<<<<<< Updated upstream
        <ThemeProvider>{children}</ThemeProvider>
=======
        <ClerkProvider>
          <ThemeProvider>
            {children}
            <Toaster />
          </ThemeProvider>
        </ClerkProvider>
>>>>>>> Stashed changes
      </body>
    </html>
  )
}
