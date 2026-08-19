import { cookies } from "next/headers"

import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Read the persisted state server-side so the sidebar doesn't flash open
  // then collapse on load. SidebarProvider writes this cookie on toggle.
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value !== "false"

  return (
    // ponytail: the provider ships min-h-svh, which lets the shell grow past the
    // viewport and scroll as a page. h-svh pins it; overflow-hidden stops anything
    // inside from pushing the frame itself into a scroll.
    <SidebarProvider defaultOpen={defaultOpen} className="h-svh overflow-hidden">
      <AppSidebar />
      {/* The border is md-only to match variant="inset", which only applies its
          own m-2/rounded-xl above md — below that a border would sit flush
          against the viewport edge with no rounding to justify it. */}
      <SidebarInset className="min-h-0 overflow-hidden shadow-none md:border">
        {/* Below md the sidebar renders as a Sheet that starts closed, so the
            trigger in its header (app-sidebar.tsx) is never in the DOM. This bar
            is the only way to open it. At md and up the in-sidebar trigger and
            the rail take over, so this hides. */}
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-3 md:hidden">
          <SidebarTrigger />
          <span className="text-sm font-medium">Workflows</span>
        </header>
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
