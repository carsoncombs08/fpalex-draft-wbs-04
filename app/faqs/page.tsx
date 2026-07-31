import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FaqsAccordion } from "@/components/faqs-accordion"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQs | Family Practice Associates of Lexington",
  description: "Frequently asked questions for Family Practice Associates of Lexington.",
}

export default function FaqsPage() {
  return (
    <main className="min-h-[100dvh] flex flex-col">
      <SiteHeader activePage="other" />

      {/* Hero */}
      <section className="px-6 py-8 md:py-10" style={{ backgroundColor: "var(--brand-blue)" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">FAQs</h1>
          <p className="text-xl md:text-2xl font-bold text-white">Family Practice Associates of Lexington</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-6 py-4">
        <ol className="max-w-4xl mx-auto flex items-center gap-2 text-sm">
          <li>
            <Link href="/" className="hover:underline" style={{ color: "var(--brand-blue)" }}>
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="size-4 text-muted-foreground" />
          </li>
          <li className="text-foreground">Patient Resources</li>
          <li>
            <ChevronRight className="size-4 text-muted-foreground" />
          </li>
          <li style={{ color: "var(--brand-blue)" }}>FAQs</li>
        </ol>
      </nav>

      {/* Content */}
      <section className="px-6 py-8 md:py-12 flex-1">
        <div className="max-w-4xl mx-auto">
          <FaqsAccordion />
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
