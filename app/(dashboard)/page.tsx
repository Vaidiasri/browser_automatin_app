import { auth } from "@clerk/nextjs/server"
import { Plus, Workflow } from "lucide-react"
import { redirect } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export default async function Page() {
  const { userId } = await auth()
  if (!userId) redirect("/auth/sign-in")

  return (
    // ponytail: the page owns its own box instead of inheriting one from the
    // parent flex chain. h-full pins it to the <main> (SidebarInset, from
    // app/(dashboard)/layout.tsx); min-h-0/min-w-0 let it shrink below its
    // content; overflow-hidden means neither axis can ever scroll here.
    <div className="flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon" className="size-12 [&_svg]:size-6">
            <Workflow />
          </EmptyMedia>
          <EmptyTitle className="text-xl">No workflow selected</EmptyTitle>
          <EmptyDescription>
            Select a workflow from the sidebar or create a new one to get started.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          {/* ponytail: inert until workflow creation exists — wire onClick then. */}
          <Button>
            <Plus />
            New workflow
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
