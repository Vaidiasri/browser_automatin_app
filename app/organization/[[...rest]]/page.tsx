import { CreateOrganization, OrganizationProfile, OrganizationSwitcher } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function OrganizationPage() {
  const { userId, orgId } = await auth()
  if (!userId) redirect("/auth/sign-in")

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <OrganizationSwitcher />
      {/* ponytail: OrganizationProfile renders nothing without an active org, so
          fall back to CreateOrganization for users who aren't in one yet. */}
      {orgId ? <OrganizationProfile /> : <CreateOrganization />}
    </div>
  )
}
