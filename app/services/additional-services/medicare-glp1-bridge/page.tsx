import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MedicareGlp1BridgeFaqsAccordion } from "@/components/medicare-glp1-bridge-faqs-accordion"
import { Glp1QuestionForm } from "@/components/glp1-question-form"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { RevealText } from "@/components/reveal-text"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Medicare GLP-1 Bridge Program | Family Practice Associates of Lexington",
  description: "Medicare GLP-1 Bridge: GLP-1 drugs for $50 a month starting July 1, 2026. Eligibility and how to get started.",
}

export default function MedicareGlp1BridgePage() {
  return (
    <main className="min-h-[100dvh] flex flex-col">
      <SiteHeader activePage="other" />

      {/* Hero */}
      <section className="relative h-[280px] md:h-[400px] overflow-hidden">
        <Image src="/assets/image/fpa-medicare-glp1-bridge.webp" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <RevealText as="h1" className="text-2xl md:text-4xl font-extrabold text-white text-center text-balance">
            Medicare GLP-1 Bridge: GLP-1 Drugs for $50 a Month
          </RevealText>
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
          <li style={{ color: "var(--brand-blue)" }}>Medicare GLP-1 Bridge Program</li>
        </ol>
      </nav>

      {/* Content */}
      <section className="px-6 py-8 md:py-12 flex-1">
        <Reveal className="max-w-4xl mx-auto">
          <RevealText as="h2" className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4" style={{ color: "var(--brand-blue)" }}>
            What You Need to Know for July 1, 2026
          </RevealText>
          <RevealText as="p" className="text-gray-900 leading-relaxed mb-4">
            Starting July 1, 2026, Medicare has a new program called Medicare GLP-1 Bridge to help you pay for
            certain GLP-1 weight loss medicines. Medicare GLP-1 Bridge covers these GLP-1 drugs:
          </RevealText>
          <ul className="list-disc pl-6 space-y-1 text-gray-900 mb-4">
            <li>Foundayo&reg; (tablet)</li>
            <li>Wegovy&reg; (injection or tablet)</li>
            <li>
              Zepbound&reg; (KwikPen&reg; only). The single-dose Zepbound&reg; pen and Zepbound&reg; vials are NOT
              covered.
            </li>
          </ul>
          <p className="text-gray-900 leading-relaxed mb-4">
            Your cost for these drugs under this program is $50 per month, no matter your income level. This $50
            payment doesn&apos;t count toward your Medicare drug plan deductible or yearly out-of-pocket limit.
            These drugs aren&apos;t eligible for the Medicare Prescription Payment Plan.
          </p>

          <RevealText as="h2" className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 mt-10" style={{ color: "var(--brand-blue)" }}>
            Am I eligible?
          </RevealText>
          <RevealText as="p" className="text-gray-900 leading-relaxed mb-4">
            To get the GLP-1 drugs listed above under this program, you must meet all four of these requirements:
          </RevealText>
          <ul className="list-disc pl-6 space-y-3 text-gray-900 mb-4">
            <li>
              You have Medicare Part D drug coverage, under either a standalone Medicare Drug Plan or a Medicare
              health plan that includes drug coverage.
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  You&apos;re not eligible if your only Medicare coverage is through certain special plan types
                  (like private fee-for-service plans, cost contract plans or a PACE organization). If you&apos;re
                  not sure what type of plan you have, call 1-800-MEDICARE (1-800-633-4227). TTY users call
                  1-877-486-2048.
                </li>
              </ul>
            </li>
            <li>
              You&apos;re not eligible to receive a GLP-1 drug through your Medicare drug plan.
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  If you&apos;ve been using a GLP-1 drug paid for by your Medicare drug plan for any reason, you
                  need to keep getting your GLP-1 drug through your plan. GLP-1 drugs are defined as products with
                  the following active ingredients: Semaglutide, Tirzepatide, Orforglipron, Dulaglutide, and
                  Liraglutide.
                </li>
              </ul>
            </li>
            <li>
              You don&apos;t have type 2 diabetes, moderate-to-severe sleep apnea, or fatty liver disease.
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  If you have any of these conditions, contact your Medicare drug plan &mdash; they may already
                  cover a GLP-1 drug for you.
                </li>
              </ul>
            </li>
            <li>
              You&apos;re at least 18 years of age AND at least one of these is true:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>You have a Body Mass Index (BMI) of 35 or higher</li>
                <li>
                  Your BMI is 30 or higher, and you have certain types of heart failure OR high blood pressure
                  that&apos;s hard to control OR chronic kidney disease (stage 3a or above)
                </li>
                <li>
                  Your BMI is 27 or higher, and you have prediabetes OR you&apos;ve had a heart attack, stroke or
                  blocked arteries in your legs or arms
                </li>
              </ul>
            </li>
          </ul>
          <RevealText as="p" className="text-sm text-muted-foreground leading-relaxed mb-4">
            *BMI (Body Mass Index) is a number your doctor calculates based on your height and weight. Ask your
            doctor what your BMI is if you don&apos;t know.
          </RevealText>

          <RevealText as="h2" className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 mt-10" style={{ color: "var(--brand-blue)" }}>
            How to get GLP-1 drugs through Medicare GLP-1 Bridge
          </RevealText>
          <ul className="list-disc pl-6 space-y-2 text-gray-900 mb-6">
            <li>Talk to your doctor about whether a GLP-1 drug is right for you and if you qualify for this program.</li>
            <li>If one of the drugs covered is right for you, your doctor will send a prescription to the pharmacy.</li>
            <li>
              Your pharmacy may reach out to you to request your Medicare ID number. The pharmacist needs your
              Medicare ID number (printed on your card) to process the prescription. If you don&apos;t have your
              card, the pharmacist can look up your number using the last four digits of your Social Security
              Number.
            </li>
            <li>
              After the pharmacy receives confirmation that you are eligible for Medicare GLP-1 Bridge, your doctor
              will need to submit a form to get approval from Medicare for coverage.
            </li>
            <li>You will also receive a letter from Medicare, letting you know your medicine is covered.</li>
            <li>
              Pick up your medicine at the pharmacy and pay $50 for a one-month supply. To get a refill, you
              don&apos;t need a new approval from Medicare as long as you stay on the same drug, even if your dose
              changes.
            </li>
          </ul>

          <RevealText as="p" className="text-gray-900 leading-relaxed mb-4">
            Visit{" "}
            <a
              href="https://www.medicare.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "var(--brand-blue)" }}
            >
              Medicare.gov
            </a>{" "}
            or call 1-800-MEDICARE (1-800-633-4227) for more information about Medicare GLP-1 Bridge. TTY users can
            call 1-877-486-2048.
          </RevealText>
          <RevealText as="p" className="text-sm text-muted-foreground leading-relaxed">
            This fact sheet is for general information only. Talk to your doctor to find out if this program is
            right for you.
          </RevealText>
        </Reveal>

        <Reveal className="max-w-4xl mx-auto mt-14">
          <RevealText as="h2" className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6" style={{ color: "var(--brand-blue)" }}>
            Frequently Asked Questions
          </RevealText>
          <MedicareGlp1BridgeFaqsAccordion />
        </Reveal>

        <Reveal className="max-w-2xl mx-auto mt-14">
          <RevealText as="h2" className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-center" style={{ color: "var(--brand-blue)" }}>
            Questions?
          </RevealText>
          <RevealText as="p" className="text-gray-900 leading-relaxed mb-8 text-center">
            Please contact Family Practice Associates of Lexington at (859) 278-5007 or via Sophie, the ChatBot on
            the website at{" "}
            <a
              href="https://www.fpalex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "var(--brand-blue)" }}
            >
              www.fpalex.com
            </a>{" "}
            to schedule an appointment with a provider to discuss whether you qualify for the Medicare GLP-1
            Bridge Program.
          </RevealText>
          <Glp1QuestionForm />
        </Reveal>

        <div className="max-w-2xl mx-auto mt-14 text-center">
          <Button
            asChild
            size="lg"
            className="transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]"
          >
            <Link href="/services/additional-services/medicare-glp1-bridge/fpa-guide">
              FPA Guide to Medicare GLP-1 Bridge Program
            </Link>
          </Button>
        </div>

        <div className="max-w-2xl mx-auto mt-10 text-center">
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
