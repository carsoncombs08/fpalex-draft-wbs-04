import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteFooter() {
  return (
    <footer className="px-6 py-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link target="_blank" href="https://assistloop.ai/docs/integrations/vercel" className="hover:text-foreground transition-colors">
            Documentation
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link target="_blank" href="https://github.com/assistloop/nextjs-template" className="hover:text-foreground transition-colors">
            GitHub
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </footer>
  )
}
