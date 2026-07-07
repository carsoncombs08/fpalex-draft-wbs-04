import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BEHAVIORAL_HEALTH_PROVIDERS, MD_PROVIDERS, NP_PA_PROVIDERS, ProvidersGrid } from "@/components/providers-grid"
import { LocationsHoursSection } from "@/components/locations-hours-section"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Providers | Family Practice Associates of Lexington",
  description:
    "Meet the board-certified providers at Family Practice Associates of Lexington, dedicated to compassionate, personalized care for you and your family.",
}

export default function OurProvidersPage() {
  return (
    <main className="min-h-[100dvh] flex flex-col">
      <SiteHeader activePage="other" />

      {/* Hero */}
      <section className="px-6 py-10 md:py-14" style={{ backgroundColor: "var(--brand-blue)" }}>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white text-balance">
            Our Providers
          </h1>
          <p className="mt-2 text-xl md:text-2xl font-bold text-white">
            Family Practice Associates of Lexington
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-6 py-4">
        <ol className="max-w-5xl mx-auto flex items-center gap-2 text-sm">
          <li>
            <Link href="/" className="hover:underline" style={{ color: "var(--brand-blue)" }}>
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="size-4 text-muted-foreground" />
          </li>
          <li className="text-foreground">About FPA</li>
          <li>
            <ChevronRight className="size-4 text-muted-foreground" />
          </li>
          <li style={{ color: "var(--brand-blue)" }}>Our Providers</li>
        </ol>
      </nav>

      {/* Content */}
      <section className="px-6 pb-16 md:pb-24 flex-1">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[2.344rem] md:text-[2.813rem] font-extrabold tracking-tight text-foreground mb-6 text-balance">
              About Our Providers
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Meet the dedicated team of healthcare professionals at Family Practice Associates of Lexington.
              Our board-certified providers are committed to providing compassionate, personalized care for
              you and your family.
            </p>
          </div>

          <ProvidersGrid providers={MD_PROVIDERS} />
        </div>
      </section>

      {/* Nurse Practitioners & Physician Assistants */}
      <section className="py-6 md:py-8 text-center" style={{ backgroundColor: "var(--brand-blue)" }}>
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white text-balance">
          Nurse Practitioners &amp; Physician Assistants
        </h2>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <ProvidersGrid providers={NP_PA_PROVIDERS} />
        </div>
      </section>

      {/* Behavioral Health */}
      <section className="py-6 md:py-8 text-center" style={{ backgroundColor: "var(--brand-blue)" }}>
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white text-balance">
          Behavioral Health
        </h2>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <ProvidersGrid providers={BEHAVIORAL_HEALTH_PROVIDERS} />
        </div>
      </section>

      <LocationsHoursSection />

      <SiteFooter />
    </main>
  )
}
