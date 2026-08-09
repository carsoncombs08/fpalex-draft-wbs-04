import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FaqsAccordion } from "@/components/faqs-accordion"
import { Reveal } from "@/components/reveal"
import { RevealText } from "@/components/reveal-text"
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
        <Reveal className="max-w-4xl mx-auto">
          <RevealText as="h1" className="text-4xl md:text-5xl font-extrabold text-white">FAQs</RevealText>
          <RevealText as="p" className="text-xl md:text-2xl font-bold text-white">Family Practice Associates of Lexington</RevealText>
        </Reveal>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-6 py-4">
        <ol className="max-w-4xl mx-auto flex items-center gap-2 text-sm">
          <li>
            <Link href="/" className="hover:underline text-foreground">
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
          <li className="text-foreground">FAQs</li>
        </ol>
      </nav>

      {/* Content */}
      <section className="px-6 py-8 md:py-12 flex-1">
        <Reveal className="max-w-4xl mx-auto">
          <FaqsAccordion />
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  )
}
