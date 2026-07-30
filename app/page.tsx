import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

import { HomeDemo } from "./home-demo"

export default async function Page() {
  const { userId } = await auth()
  if (!userId) redirect("/auth/sign-in")

  return <HomeDemo />
}
