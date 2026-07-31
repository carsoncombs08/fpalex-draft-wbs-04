import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PediatricServicesAccordion } from "@/components/pediatric-services-accordion"
import { Button } from "@/components/ui/button"
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

      {/* Content */}
      <section className="px-6 py-8 md:py-12 flex-1">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-balance" style={{ color: "var(--brand-blue)" }}>
            Pediatric Care in Central Kentucky
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Family Practice Associates of Lexington offers a wide range of pediatric services to support the
            health and well-being of children in Central Kentucky. Our experienced team is dedicated to
            providing compassionate care for patients from newborns to adolescents. We understand the unique
            needs of growing children and offer specialized services to address their health concerns.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <PediatricServicesAccordion />
        </div>
        <div className="max-w-4xl mx-auto mt-4 text-center">
          <Button
            asChild
            size="lg"
            className="px-6 transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]"
          >
            <Link href="/book">Book Today</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
