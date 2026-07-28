import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Patient Forms and Records Request | Family Practice Associates of Lexington",
  description: "Patient forms and medical records request information for Family Practice Associates of Lexington.",
}

export default function PatientFormsAndRecordsRequestPage() {
  return (
    <main className="min-h-[100dvh] flex flex-col">
      <SiteHeader activePage="other" />

      {/* Hero */}
      <section className="relative h-[280px] md:h-[400px] overflow-hidden">
        <Image
          src="/assets/image/fpa-patient-forms-hero-bg.webp"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center text-balance">
            Patient Forms and Records Request
          </h1>
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
          <li style={{ color: "var(--brand-blue)" }}>Patient Forms and Records Request</li>
        </ol>
      </nav>

      <div className="flex-1" />

      <SiteFooter />
    </main>
  )
}
