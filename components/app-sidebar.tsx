import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { Plus } from "lucide-react"

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
  SidebarMenuButton,
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
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex-row items-center justify-between gap-1">
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
        {/* Collapsed, there's no room beside the avatar — the rail and Ctrl/Cmd+B
            still expand it. */}
        <SidebarTrigger className={collapsedHidden} />
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
            <SidebarMenu>
              {workflows.map((name) => (
                <SidebarMenuItem key={name}>
                  <SidebarMenuButton tooltip={name}>
                    <span>{name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
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
