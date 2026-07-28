import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AcceptedInsuranceAccordion } from "@/components/accepted-insurance-accordion"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Accepted Insurance | Family Practice Associates of Lexington",
  description: "Insurance plans accepted at Family Practice Associates of Lexington, including commercial, Medicare, and self-pay policy information.",
}

export default function AcceptedInsurancePage() {
  return (
    <main className="min-h-[100dvh] flex flex-col">
      <SiteHeader activePage="other" />

      {/* Hero */}
      <section className="relative">
        <Image
          src="/assets/image/fpa-accepted-insurance-hero.webp"
          alt="Accepted Insurance"
          width={1856}
          height={385}
          className="w-full h-auto"
          priority
        />
        <h1 className="sr-only">Accepted Insurance</h1>
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
          <li style={{ color: "var(--brand-blue)" }}>Accepted Insurance</li>
        </ol>
      </nav>

      {/* Content */}
      <section className="px-6 py-8 md:py-12 flex-1">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-bold text-foreground leading-relaxed mb-6">
            Family Practice Associates of Lexington requires payment on the date of service. Please be prepared to
            pay all co-pays, deductibles, and any outstanding balances at the time of your visit.
          </p>
          <p className="font-bold text-foreground leading-relaxed mb-6">
            Patients with High-Deductible Health Plans are required to make a $100 deposit on the date of service.
          </p>
          <p className="font-bold text-foreground leading-relaxed mb-6">
            At this time, Family Practice Associates (FPA) does not accept Medicaid or WellCare plans.
            <br />
            For Marketplace plans, we currently accept CareSource only.
          </p>
          <p className="font-bold text-foreground leading-relaxed mb-10">
            For all other plans, please contact our Billing Department. There are too many small plans to list.
            Thank you for your understanding!
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <AcceptedInsuranceAccordion />
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
