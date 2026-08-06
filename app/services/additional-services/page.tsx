import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AdditionalServicesAccordion } from "@/components/additional-services-accordion"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { RevealText } from "@/components/reveal-text"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Additional Services | Family Practice Associates of Lexington",
  description: "Additional services for every need in Central Kentucky from Family Practice Associates of Lexington.",
}

export default function AdditionalServicesPage() {
  return (
    <main className="min-h-[100dvh] flex flex-col">
      <SiteHeader activePage="other" />

      {/* Hero */}
      <section className="relative group/photo w-full h-[35vh] hover:h-[calc(100vw*0.3625)] bg-background overflow-hidden transition-[height] duration-500 ease-in-out">
        <Image
          src="/assets/image/fpa-additional-services-hero.webp"
          alt="Additional Services"
          fill
          className="object-cover"
          priority
        />
        <h1 className="sr-only">Additional Services for Every Need</h1>
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
          <li style={{ color: "var(--brand-blue)" }}>Additional Services</li>
        </ol>
      </nav>

      {/* Content */}
      <section className="px-6 py-8 md:py-12 flex-1">
        <Reveal className="max-w-4xl mx-auto">
          <RevealText as="h2" className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-balance" style={{ color: "var(--brand-blue)" }}>
            Looking For Additional Services
          </RevealText>
          <RevealText as="p" className="text-muted-foreground leading-relaxed mb-6">
            At Family Practice Associates of Lexington, we&apos;re committed to providing a wide array of
            additional services to meet your diverse healthcare needs. Our patient-centered approach ensures
            that you receive comprehensive care under one roof. Here&apos;s a glimpse of our expanded offerings:
          </RevealText>
        </Reveal>
        <Reveal className="max-w-6xl mx-auto">
          <AdditionalServicesAccordion />
        </Reveal>
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
