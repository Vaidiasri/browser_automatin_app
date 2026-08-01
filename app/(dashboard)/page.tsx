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
    // Empty already ships flex-1; <main> in app/layout.tsx gives it the height to fill.
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
  )
}
