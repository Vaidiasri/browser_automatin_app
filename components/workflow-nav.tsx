"use client"

import { Plus, Workflow } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

// Collapsed, one row per workflow means a rail of identical icons that name
// nothing. Instead the rail keeps a single entry point and the list moves into a
// flyout. Expanded, the list stays inline.
export function WorkflowNav({ workflows }: { workflows: string[] }) {
  const { state, isMobile } = useSidebar()

  // On mobile the sidebar renders as a Sheet at full width, so the inline list
  // is right even though `state` still reads "collapsed".
  if (state !== "collapsed" || isMobile) {
    return (
      <SidebarMenu className="gap-1">
        {workflows.map((name) => (
          <SidebarMenuItem key={name}>
            <SidebarMenuButton tooltip={name}>
              <Workflow />
              <span>{name}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    )
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton tooltip="Workflows">
              <Workflow />
              <span>Workflows</span>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="right"
            align="start"
            sideOffset={8}
            className="min-w-56"
          >
            {/* ponytail: inert until workflow creation exists — same action as the
                group header's + and the empty state's button. Wire all three at once. */}
            <DropdownMenuItem>
              <Plus />
              New workflow
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {workflows.map((name) => (
              <DropdownMenuItem key={name}>{name}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
