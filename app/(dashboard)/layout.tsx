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
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      {/* The collapse trigger lives in the sidebar header (see app-sidebar.tsx),
          so the content area needs no top bar of its own. */}
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  )
}
