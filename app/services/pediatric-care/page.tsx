import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Pediatric Care | Family Practice Associates of Lexington",
  description: "Pediatric care services in Central Kentucky from Family Practice Associates of Lexington.",
}

export default function PediatricCarePage() {
  return (
    <main className="min-h-[100dvh] flex flex-col">
      <SiteHeader activePage="other" />

      {/* Hero */}
      <section className="relative">
        <Image
          src="/assets/image/fpa-pediatric-care-hero.webp"
          alt="Pediatric Care"
          width={2000}
          height={735}
          className="w-full h-auto"
          priority
        />
        <h1 className="sr-only">Pediatric Care</h1>
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
          <li className="text-foreground">Our Services</li>
          <li>
            <ChevronRight className="size-4 text-muted-foreground" />
          </li>
          <li style={{ color: "var(--brand-blue)" }}>Pediatric Care</li>
        </ol>
      </nav>

      <div className="flex-1" />

      <SiteFooter />
    </main>
  )
}
