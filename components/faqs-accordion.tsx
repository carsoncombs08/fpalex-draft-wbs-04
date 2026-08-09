"use client"

import React from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

type ServiceItem = {
  title: string
  body: React.ReactNode
}

const FAQS: ServiceItem[] = [
  {
    title: "Do you offer telehealth services?",
    body: (
      <p className="text-muted-foreground leading-relaxed">
        While we prefer in-person consultations for most medical issues to allow for physical examinations and
        necessary lab work, we understand that some patients may have safety concerns. For those interested in
        telehealth, please call{" "}
        <a href="tel:+18592785007" className="hover:underline text-foreground">
          (859) 278-5007
        </a>{" "}
        to schedule an appointment. Most smartphones are compatible with
        our telehealth system. You&apos;ll receive a text message with a link to join a secure video chat when our
        clinical staff is ready. Please note that insurance will be billed for these visits, and copays and
        coinsurances may apply. We recommend checking with your insurance provider regarding their telehealth
        coverage policy.
      </p>
    ),
  },
  {
    title: "Are same-day appointments available for urgent issues?",
    body: (
      <p className="text-muted-foreground leading-relaxed">
        We recognize that medical needs can arise unexpectedly. For urgent health concerns, we strive to offer
        same-day appointments whenever possible. To inquire about availability, please contact our office as
        early in the day as you can.
      </p>
    ),
  },
  {
    title: "How far in advance should I schedule wellness checks or physical exams?",
    body: (
      <p className="text-muted-foreground leading-relaxed">
        To ensure you can secure an appointment time that suits your schedule and to allow us sufficient time to
        prepare any necessary paperwork or tests, we advise booking your wellness checks and physical exams 4-6
        weeks in advance.
      </p>
    ),
  },
  {
    title: "How do I access and navigate Follow My Health portal?",
    body: (
      <p className="text-muted-foreground leading-relaxed">
        You can access and navigate the Follow My Health portal by visiting this{" "}
        <a
          href="https://cdn.hibuwebsites.com/7e29e1036607439698f5a108b9fc30dd/files/uploaded/accessing-the-fpa-health-portal-setup-family-practice--associates-of-lexington.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-foreground"
        >
          link
        </a>
        .
      </p>
    ),
  },
]

export function FaqsAccordion() {
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
              <span className="text-xl md:text-2xl font-extrabold text-foreground">
                {faq.title}
              </span>
              <span className="flex items-center justify-center size-11 rounded-full shrink-0" style={{ backgroundColor: "var(--brand-blue)" }}>
                {isOpen ? <ChevronUp className="size-5 text-white" /> : <ChevronDown className="size-5 text-white" />}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6">{faq.body}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
