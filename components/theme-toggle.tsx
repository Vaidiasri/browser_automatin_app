"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { SidebarMenuButton } from "@/components/ui/sidebar"

// Visible counterpart to the D hotkey in theme-provider.tsx. Both call setTheme,
// so they stay in sync through next-themes rather than any shared state here.
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <SidebarMenuButton
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      tooltip="Toggle theme"
    >
      {/* ponytail: swap the icons in CSS, not with a mounted flag. resolvedTheme
          is undefined during SSR, so branching on it here hydration-mismatches. */}
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
      <span>Toggle theme</span>
    </SidebarMenuButton>
  )
}
