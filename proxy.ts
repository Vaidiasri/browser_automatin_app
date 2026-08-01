import { clerkMiddleware } from "@clerk/nextjs/server"

// clerkMiddleware() attaches auth context to every request. It does NOT gate any
// route on its own. Protect a page/route where it reads protected data with a
// resource-based check, e.g. in the page/layout/route handler:
//   import { auth } from "@clerk/nextjs/server"
//   const { userId } = await auth()
//   if (!userId) redirect("/auth/sign-in")
// ponytail: routes guard themselves with auth() (see app/page.tsx). Add the same
// two-line check to each new page that needs login. (createRouteMatcher +
// auth.protect() in middleware is deprecated — path-matching can leave resources reachable.)
export default clerkMiddleware()

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
}
