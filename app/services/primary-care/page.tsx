import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServicesAccordion } from "@/components/services-accordion"
import { Reveal } from "@/components/reveal"
import { RevealText } from "@/components/reveal-text"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Primary Care | Family Practice Associates of Lexington",
  description:
    "Comprehensive primary care services in Central Kentucky, including annual physicals, chronic disease management, immunizations, and same-day sick visits.",
}

export default function PrimaryCarePage() {
  return (
    <main className="min-h-[100dvh] flex flex-col">
      <SiteHeader activePage="other" />

      {/* Hero */}
      <section className="relative group/photo w-full h-[35vh] hover:h-[calc(100vw*0.392)] bg-background overflow-hidden transition-[height] duration-500 ease-in-out">
        <Image
          src="/assets/image/fpa-primary-care-hero.webp"
          alt="Primary Care"
          fill
          className="object-cover"
          priority
        />
        <h1 className="sr-only">Primary Care</h1>
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
          <li style={{ color: "var(--brand-blue)" }}>Primary Care</li>
        </ol>
      </nav>

      {/* Content */}
      <section className="px-6 py-8 md:py-12 flex-1">
        <div className="px-6 py-10 md:py-14 mb-10 rounded-2xl md:rounded-3xl" style={{ backgroundColor: "var(--brand-blue)" }}>
          <Reveal className="max-w-4xl mx-auto bg-background rounded-2xl md:rounded-3xl shadow-xl p-8 sm:p-10 md:p-14">
            <RevealText as="h2" className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-balance" style={{ color: "var(--brand-blue)" }}>
              Comprehensive Primary Care Services in Central Kentucky
            </RevealText>
            <RevealText as="p" className="text-muted-foreground leading-relaxed">
              Family Practice Associates of Lexington offers a wide range of primary care services to meet the
              diverse health needs of Central Kentucky residents. Your first line of defense for optimal health
              and wellness. We offer:
            </RevealText>
          </Reveal>
        </div>
        <div className="max-w-4xl mx-auto">
          <ServicesAccordion />
        </div>
        <div className="max-w-4xl mx-auto mt-14 text-center">
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
