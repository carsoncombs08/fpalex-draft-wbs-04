import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "FPA Guide to Medicare GLP-1 Bridge Program | Family Practice Associates of Lexington",
  description: "FPA's guide to the Medicare GLP-1 Bridge Program.",
}

export default function FpaGuideToMedicareGlp1BridgePage() {
  return (
    <main className="min-h-[100dvh] flex flex-col">
      <SiteHeader activePage="other" />

      {/* Hero */}
      <section className="relative h-[280px] md:h-[400px] overflow-hidden">
        <Image src="/assets/image/fpa-patient-forms-hero-bg.webp" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white text-center text-balance">
            FPA Guide to Medicare GLP-1 Bridge Program
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-6 py-4">
        <ol className="max-w-4xl mx-auto flex items-center gap-2 text-sm flex-wrap">
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
          <li>
            <Link href="/services/additional-services" className="hover:underline" style={{ color: "var(--brand-blue)" }}>
              Additional Services
            </Link>
          </li>
          <li>
            <ChevronRight className="size-4 text-muted-foreground" />
          </li>
          <li>
            <Link
              href="/services/additional-services/medicare-glp1-bridge"
              className="hover:underline"
              style={{ color: "var(--brand-blue)" }}
            >
              Medicare GLP-1 Bridge Program
            </Link>
          </li>
          <li>
            <ChevronRight className="size-4 text-muted-foreground" />
          </li>
          <li style={{ color: "var(--brand-blue)" }}>FPA Guide</li>
        </ol>
      </nav>

      {/* Content */}
      <section className="px-6 py-8 md:py-12 flex-1">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: "var(--brand-blue)" }}>
            Medicare GLP-1 Bridge Program
          </h2>
          <p className="text-lg font-bold text-gray-900 mb-1">Patient Information &amp; Frequently Asked Questions</p>
          <p className="text-sm text-muted-foreground mb-8">Effective July 1, 2026</p>

          <h3 className="text-xl md:text-2xl font-extrabold tracking-tight mb-3" style={{ color: "var(--brand-blue)" }}>
            What is the Medicare GLP-1 Bridge Program?
          </h3>
          <p className="text-gray-900 leading-relaxed mb-8">
            The Medicare GLP-1 Bridge Program may provide coverage for certain weight-loss medications for
            eligible Medicare patients.
          </p>

          <h3 className="text-xl md:text-2xl font-extrabold tracking-tight mb-3" style={{ color: "var(--brand-blue)" }}>
            Who Qualifies?
          </h3>
          <p className="text-gray-900 leading-relaxed mb-4">
            <span className="font-bold">You must:</span>
            <br />
            Have Medicare Part D prescription coverage and have not received GLP-1 medication previously through
            your Medicare Part D.
          </p>

          <p className="font-bold text-gray-900 mb-2">You must NOT have:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-900 mb-4">
            <li>Type 2 Diabetes</li>
            <li>Moderate-to-Severe Sleep Apnea</li>
            <li>Metabolic Dysfunction-Associated Steatohepatitis (MASH)</li>
          </ul>

          <p className="text-gray-900 leading-relaxed mb-2">
            <span className="font-bold">You must meet ONE of the following criteria:</span>
            <br />
            BMI 35 or higher; or
          </p>

          <p className="font-bold text-gray-900 mb-2">BMI 30 or higher plus one of these conditions:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-900 mb-4">
            <li>Heart Failure with Preserved Ejection Fraction (HFpEF)</li>
            <li>Uncontrolled High Blood Pressure</li>
            <li>Chronic Kidney Disease (Stage 3a or higher)</li>
          </ul>

          <p className="font-bold text-gray-900 mb-2">BMI 27 or higher and one of these conditions:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-900 mb-4">
            <li>Prediabetes</li>
            <li>Prior Heart Attack</li>
            <li>Prior Stroke</li>
            <li>Symptomatic Peripheral Artery Disease (PAD)</li>
          </ul>

          <p className="text-gray-900 leading-relaxed mb-8">
            Your provider can help you determine if you meet all program requirements.
          </p>

          <p className="font-bold text-gray-900 mb-2">Covered Medications</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-900">
            <li>Wegovy&reg; injections and tablets</li>
            <li>Zepbound&reg; KwikPen&reg;. Single-dose Zepbound pens and vials are not covered.</li>
            <li>Foundayo&reg; tablets</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
