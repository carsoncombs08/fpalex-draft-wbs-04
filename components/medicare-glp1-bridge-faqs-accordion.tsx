"use client"

import React from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

type FaqItem = {
  title: string
  body: React.ReactNode
}

const FAQS: FaqItem[] = [
  {
    title: "What is the Medicare GLP-1 Bridge Program?",
    body: (
      <p className="text-muted-foreground leading-relaxed">
        The Medicare GLP-1 Bridge Program may provide coverage for certain weight-loss medications for eligible
        Medicare patients.
      </p>
    ),
  },
  {
    title: "Who Qualifies?",
    body: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <span className="font-bold text-gray-900">You must:</span>
          <br />
          Have Medicare Part D prescription coverage and not have received GLP-1 medication previously through
          your Medicare Part D.
        </p>
        <p className="font-bold text-gray-900 mb-2">You must NOT have:</p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
          <li>Type 2 Diabetes</li>
          <li>Moderate-to-Severe Sleep Apnea</li>
          <li>Metabolic Dysfunction-Associated Steatohepatitis (MASH)</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-2">
          <span className="font-bold text-gray-900">You must meet ONE of the following criteria:</span>
          <br />
          BMI 35 or higher; or
        </p>
        <p className="font-bold text-gray-900 mb-2">BMI 30 or higher plus one of these conditions:</p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
          <li>Heart Failure with Preserved Ejection Fraction (HFpEF)</li>
          <li>Uncontrolled High Blood Pressure</li>
          <li>Chronic Kidney Disease (Stage 3a or higher)</li>
        </ul>
        <p className="font-bold text-gray-900 mb-2">BMI 27 or higher and one of these conditions:</p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
          <li>Prediabetes</li>
          <li>Prior Heart Attack</li>
          <li>Prior Stroke</li>
          <li>Symptomatic Peripheral Artery Disease (PAD)</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Your provider can help you determine if you meet all program requirements.
        </p>
        <p className="font-bold text-gray-900 mb-2">Covered Medications</p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Wegovy&reg; injections and tablets</li>
          <li>Zepbound&reg; KwikPen&reg;. Single-dose Zepbound pens and vials are not covered.</li>
          <li>Foundayo&reg; tablets</li>
        </ul>
      </>
    ),
  },
  {
    title: "Do I need an appointment?",
    body: (
      <p className="text-muted-foreground leading-relaxed">
        Yes. An appointment with your provider is required before starting a GLP-1 medication or for any dose
        changes. This visit may be completed in person, by telephone, or through telehealth. The appointment will
        be billed to your insurance according to your plan benefits, and any applicable copays, deductibles, or
        coinsurance may apply.
      </p>
    ),
  },
  {
    title: "Will I need follow-up appointments?",
    body: (
      <>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Yes. Monthly follow-up appointments are required to monitor your progress and provide medication
          refills.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Please schedule your next appointment at the end of your initial visit or contact our office before
          your medication runs out to avoid any interruption in treatment.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          In addition, an in-person visit every 3 to 6 months will be required to evaluate your progress and
          obtain any necessary laboratory testing.
        </p>
      </>
    ),
  },
  {
    title: "Can I discuss other health concerns during these visits?",
    body: (
      <p className="text-muted-foreground leading-relaxed">
        No. These appointments are specifically for weight management and GLP-1 medication follow-up only. Any
        additional concerns will require a separate appointment.
      </p>
    ),
  },
  {
    title: "How long does the process take?",
    body: (
      <p className="text-muted-foreground leading-relaxed">
        Medicare must first determine your eligibility. If eligible, it may take up to two weeks before the prior
        authorization is submitted. Once prior authorization is submitted, decisions are typically returned
        within 72 hours.
      </p>
    ),
  },
  {
    title: "Who should I contact for updates?",
    body: (
      <p className="text-muted-foreground leading-relaxed">
        Please contact your pharmacy directly for updates regarding your prescription.
      </p>
    ),
  },
  {
    title: "How often can my medication be filled?",
    body: (
      <p className="text-muted-foreground leading-relaxed">
        Only 28-day or 30-day prescriptions are covered through the program.
      </p>
    ),
  },
  {
    title: "Will I need another prior authorization?",
    body: (
      <p className="text-muted-foreground leading-relaxed">
        Usually, a new prior authorization is only required if you switch to a different covered GLP-1
        medication.
      </p>
    ),
  },
]

export function MedicareGlp1BridgeFaqsAccordion() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="relative flex flex-col gap-4 mb-10">
      <div
        className={`absolute inset-0 z-40 backdrop-blur-md pointer-events-none transition-opacity duration-150 ease-out ${
          activeIndex !== null ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />
      {FAQS.map((faq, index) => {
        const isOpen = activeIndex === index
        return (
          <div
            key={faq.title}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex((prev) => (prev === index ? null : prev))}
            onClick={() => toggle(index)}
            className={`relative rounded-2xl border-2 border-black bg-muted overflow-hidden cursor-pointer transition-all duration-300 ${
              isOpen ? "z-50 scale-105 md:scale-110 shadow-[0_0_30px_var(--brand-blue)]" : ""
            }`}
          >
            <div className="w-full flex items-start justify-between gap-4 bg-muted px-6 py-5 text-left">
              <span className="text-xl md:text-2xl font-extrabold" style={{ color: "var(--brand-blue)" }}>
                {faq.title}
              </span>
              <span
                className="flex items-center justify-center size-11 rounded-full shrink-0"
                style={{ backgroundColor: "var(--brand-blue)" }}
              >
                {isOpen ? <ChevronUp className="size-5 text-white" /> : <ChevronDown className="size-5 text-white" />}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 max-h-[540px] overflow-y-auto">{faq.body}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
