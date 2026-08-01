import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"

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
      <body className="flex min-h-svh flex-col">
        <ClerkProvider>
          <ThemeProvider>
            {/* Signed-in chrome lives in the sidebar (components/app-sidebar.tsx),
                so the top bar is only for signed-out visitors. */}
            <Show when="signed-out">
              <header className="flex shrink-0 items-center justify-end gap-3 border-b px-4 py-3">
                <SignInButton mode="modal">
                  <button className="rounded-md px-4 py-1.5 text-sm font-medium hover:bg-accent">
                    Sign in
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="rounded-md bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                    Sign up
                  </button>
                </SignUpButton>
              </header>
            </Show>
            {/* div, not main: SidebarInset renders the <main> for dashboard routes. */}
            <div className="flex flex-1 flex-col">{children}</div>
            <Toaster />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
