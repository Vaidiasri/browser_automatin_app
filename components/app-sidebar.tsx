import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { Plus } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { WorkflowNav } from "@/components/workflow-nav"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// ponytail: static until a workflows data source exists. Swap for the real list
// when there's an API to read from — the markup stays the same.
const workflows = [
  "dominant-wasp",
  "honest-reindeer",
  "expected-llama",
  "essential-ocelot",
  "creepy-echidna",
  "eastern-silkworm",
  "cultural-lion",
  "proud-weasel",
  "regional-bonobo",
]

// The rail is 3rem when collapsed, so anything with a text label has to go or it
// spills. Clerk owns its own markup, so its text nodes are hidden by class.
const collapsedHidden = "group-data-[collapsible=icon]:hidden"

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    // ponytail: variant="inset" is what arms SidebarInset's m-2/rounded-xl/shadow —
    // the styles already ship with the component, they just need the peer variant.
    <Sidebar collapsible="icon" variant="inset" {...props}>
      {/* Collapsed the rail is 3rem, too narrow for avatar and trigger side by
          side — stack them so the trigger stays reachable. */}
      <SidebarHeader className="flex-row items-center justify-between gap-1 group-data-[collapsible=icon]:flex-col">
        <OrganizationSwitcher
          hidePersonal={false}
          appearance={{
            elements: {
              rootBox: "min-w-0 flex-1",
              organizationSwitcherTrigger:
                "w-full justify-start gap-2 rounded-md p-1.5 hover:bg-sidebar-accent group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0",
              organizationPreviewTextContainer: `truncate ${collapsedHidden}`,
              organizationSwitcherTriggerIcon: collapsedHidden,
              avatarBox: "size-6 shrink-0 rounded-md",
            },
          }}
        />
        <SidebarTrigger />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workflows</SidebarGroupLabel>
          {/* ponytail: inert until workflow creation exists — same action as the
              empty state's button. Wire both at once. */}
          <SidebarGroupAction title="New workflow">
            <Plus />
            <span className="sr-only">New workflow</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            {/* Inline when expanded, a single flyout entry when collapsed —
                see components/workflow-nav.tsx. */}
            <WorkflowNav workflows={workflows} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Divider separates the account zone from the workflow list — without it the
          two read as one run of rows. */}
      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu className="gap-1">
          <SidebarMenuItem>
            <ThemeToggle />
          </SidebarMenuItem>
          <SidebarMenuItem>
            <UserButton
              appearance={{
                elements: {
                  userButtonTrigger:
                    "rounded-md p-1.5 hover:bg-sidebar-accent group-data-[collapsible=icon]:p-0",
                  avatarBox: "size-7 shrink-0",
                },
              }}
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
