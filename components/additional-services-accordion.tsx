"use client"

import React from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

type Block =
  | { type: "p"; text: string; bold?: string }
  | { type: "list"; items: string[] }
  | { type: "heading"; text: string }

type ServiceItem = {
  title: string
  blocks: Block[]
  glow?: "green"
}

const ADDITIONAL_SERVICES: ServiceItem[] = [
  {
    title: "NEW! Medical Cannabis Certificates",
    glow: "green",
    blocks: [
      {
        type: "p",
        text: "Under Kentucky Law, patients with certain medical conditions can qualify for a Certificate to purchase medical cannabis from a certified dispensary. FPA now offers appointments for existing patients for evaluation and certification in compliance with Kentucky State Statute. Patients must be a current FPA patient and be at least 18 years of age. In addition, the patient must have a documented diagnosis of one or more of the six qualifying conditions:",
      },
      {
        type: "list",
        items: [
          "Any type or form of cancer",
          "Chronic or severe pain",
          "Epilepsy or intractable seizure disorder",
          "Multiple sclerosis, muscle spasms or spasticity",
          "Chronic nausea or cyclical vomiting syndrome",
          "Post-traumatic stress disorder (PTSD)",
        ],
      },
      {
        type: "p",
        text: "Visits to the MCC clinic cannot be combined with another visit and will be performed by a certified FPA Provider. The cost for each certification visit is $175.00 and is not covered under the patient’s insurance. If qualified, the patient will receive a certificate that is valid for one year. The patient will have to schedule another appointment to renew their certification. Please call 859-278-5007 to schedule an appointment or request a referral from your FPA provider during your visit.",
      },
    ],
  },
  {
    title: "Seasonal Flu Shot Clinics",
    blocks: [
      {
        type: "p",
        text: "Protect yourself and your family from the flu with our seasonal flu shot clinics. Annual flu vaccinations are the best way to reduce the risk of flu and its complications. Our convenient and efficient clinics make it easy for you to stay healthy during flu season.",
      },
    ],
  },
  {
    title: "PAS Clinic",
    blocks: [
      {
        type: "p",
        text: "Our PAS clinic offers various essential health services, including allergy injections, vaccinations, and the management of controlled substances. Our team provides personalized care in a safe and comfortable environment, ensuring you receive the necessary treatments to maintain your health and well-being.",
      },
    ],
  },
  {
    title: "Diabetic Eye Exam",
    blocks: [
      {
        type: "p",
        text: "Regular eye exams are vital for individuals with diabetes to prevent complications such as diabetic retinopathy. Our diabetic eye exams include a comprehensive evaluation of your eye health, using advanced diagnostic tools to detect early signs of damage. Protect your vision and manage your diabetes effectively with our specialized care.",
      },
    ],
  },
  {
    title: "Diabetic Management",
    blocks: [
      {
        type: "p",
        text: "Managing diabetes requires a holistic approach and ongoing support. Our diabetic management services include personalized treatment plans, regular monitoring, and education to help you control your blood sugar levels and prevent complications. We work closely with you to ensure your diabetes is well-managed and your health is optimized.",
      },
    ],
  },
  {
    title: "DOT Physicals",
    blocks: [
      {
        type: "p",
        text: "Federal law requires drivers of commercial motor vehicles to undergo and pass regular physical examinations. Our certified medical examiners provide thorough DOT physicals, adhering to the Federal Motor Carrier Safety Administration (FMCSA) standards. These exams include a comprehensive medical history review, vision and hearing tests, blood pressure checks, and more. We ensure you meet all the requirements to operate a commercial vehicle safely.",
      },
    ],
  },
  {
    title: "Bone Density Testing",
    blocks: [
      {
        type: "p",
        text: "Bone density testing is crucial for detecting osteoporosis and assessing your risk of fractures. Our advanced bone density tests provide accurate measurements to help you and your doctor make informed decisions about your bone health. Early detection and treatment can significantly improve your quality of life and prevent serious complications.",
      },
    ],
  },
  {
    title: "Body Composition Scan",
    blocks: [
      {
        type: "p",
        text: "A Body Composition Scan is a non-invasive assessment that analyzes the different components of your body, including fat mass, muscle mass, water content, and bone density.",
      },
      { type: "heading", text: "Here's how it works:" },
      {
        type: "list",
        items: [
          "Technology: Using advanced bioelectrical impedance analysis (BIA), the scan sends a safe, low-level electrical current through your body. The resistance to this current provides insights into your body’s composition.",
          "Results: The scan gives you detailed information about your body, including:",
        ],
      },
      {
        type: "list",
        items: ["Total body fat percentage", "Lean muscle mass", "Body water percentage", "Basal metabolic rate (BMR)"],
      },
      { type: "p", bold: "Benefits:", text: "Understanding your body composition can help you:" },
      {
        type: "list",
        items: [
          "Tailor your fitness and nutrition plans more effectively",
          "Track progress over time",
          "Set realistic health and fitness goals",
        ],
      },
      {
        type: "p",
        text: "Please avoid taking this scan if you are pregnant or have a pacemaker.",
      },
      { type: "heading", text: "Why Choose Our Body Composition Scan?" },
      {
        type: "list",
        items: [
          "Accurate Results: Get precise data to track your progress.",
          "Personalized Recommendations: Tailored advice to optimize your fitness routine.",
          "No Insurance Hassle: Simple payment of $125.00, cash or credit/debit card.",
        ],
      },
      {
        type: "p",
        text: "Limited Spots Available! Schedule your appointment today and invest in your health.",
      },
    ],
  },
  {
    title: "COVID Vaccine: Pfizer Booster Shots",
    blocks: [
      {
        type: "p",
        text: "Staying protected against COVID-19 is essential, and our clinic offers the Pfizer booster vaccine for individuals aged 12 and up. Boosters enhance your immunity and provide better protection against variants. Our team ensures a safe and efficient vaccination process, keeping you and your loved ones healthy.",
      },
      { type: "heading", text: "Chronic Conditions We Treat:" },
      { type: "list", items: ["Diabetes", "Hypertension", "Asthma"] },
    ],
  },
  {
    title: "Telehealth",
    blocks: [
      {
        type: "p",
        text: "We encourage face-to-face visits for most issues, so that your provider can physically examine you and do any lab work necessary. Not all visits are appropriate for Telehealth appointments, however, we understand that patients may have safety concerns and might want a telehealth visit. Please visit our FAQ page for more information.",
      },
    ],
  },
]

function BlockContent({ block }: { block: Block }) {
  if (block.type === "heading") {
    return <p className="font-bold text-foreground mb-2">{block.text}</p>
  }
  if (block.type === "list") {
    return (
      <ul className="list-disc pl-5 mb-4 space-y-1 text-muted-foreground">
        {block.items.map((item, i) => (
          <li key={i} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    )
  }
  return (
    <p className="text-muted-foreground leading-relaxed mb-4">
      {block.bold && <span className="font-bold text-foreground">{block.bold} </span>}
      {block.text}
    </p>
  )
}

export function AdditionalServicesAccordion() {
  const [openItems, setOpenItems] = React.useState<Set<number>>(new Set([0]))

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {ADDITIONAL_SERVICES.map((service, index) => {
        const isOpen = openItems.has(index)
        return (
          <div key={service.title} className={service.glow === "green" ? "shadow-[0_0_18px_#22c55e] rounded-sm" : ""}>
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="w-full flex items-start justify-between gap-4 border-2 border-black bg-muted px-6 py-5 text-left transition-colors hover:bg-accent"
            >
              <span className="text-xl md:text-2xl font-extrabold" style={{ color: "var(--brand-blue)" }}>
                {service.title}
              </span>
              <span className="flex items-center justify-center size-11 rounded-full bg-black text-white shrink-0">
                {isOpen ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
              </span>
            </button>
            {isOpen && (
              <div className="pt-4 pb-2 px-1">
                {service.blocks.map((block, i) => (
                  <BlockContent key={i} block={block} />
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
