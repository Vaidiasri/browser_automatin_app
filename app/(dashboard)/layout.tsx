import { cookies } from "next/headers"

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

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
      {/* The collapse trigger lives in the sidebar header (see app-sidebar.tsx),
          so the content area needs no top bar of its own. */}
      <SidebarInset className="min-h-0 overflow-hidden border shadow-none">{children}</SidebarInset>
    </SidebarProvider>
  )
}
