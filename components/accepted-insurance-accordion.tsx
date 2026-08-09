"use client"

import React from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

type Block =
  | { type: "p"; text: string; bold?: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "heading"; text: string }

type ServiceItem = {
  title: string
  blocks: Block[]
}

const ACCEPTED_INSURANCE: ServiceItem[] = [
  {
    title: "Commercial Insurance Plans Accepted",
    blocks: [
      {
        type: "list",
        items: [
          "Aetna (Not Aetna Better Health)",
          "Administrator Concepts",
          "All Savers",
          "Allied Benefit Systems",
          "Anthem Blue Cross Blue Shield (Not Transition Pathway X)",
          "Assurant Health",
          "Bankers Life / Fidelity",
          "CareSource Marketplace KY (Not Humana CareSource)",
          "ChampVA (Not accepting new patients)",
          "Cigna",
          "Coordinated Benefits",
          "Custom Design Benefits",
          "First Health",
          "Fiserv",
          "Freedom Life",
          "Golden Rule",
          "GEHA",
          "HealthComp",
          "Imagine360",
          "International Benefits Administrators (IBA)",
          "Kentucky Health Administrators (KHA)",
          "Liberty HealthShare",
          "Loomis",
          "Medica",
          "Medico",
          "MedBen",
          "MultiPlan",
          "Meritain",
          "Medi-Share",
          "Mutual of Omaha",
          "Nippon Life",
          "PHCS",
          "Physicians Mutual",
          "Principal Life",
          "Tricare (Not accepting new patients)",
          "Thrivent",
          "TPA",
          "United World Life",
          "UnitedHealthcare",
          "United HealthShare",
          "UMR",
        ],
      },
    ],
  },
  {
    title: "Medicare Plans Accepted",
    blocks: [
      {
        type: "list",
        ordered: true,
        items: ["Traditional Medicare (Red, White & Blue Card)", "Railroad Travelers Medicare", "Medicare Advantage Plans:"],
      },
      {
        type: "list",
        items: [
          "Aetna (No Dual Advantage Plans)",
          "Anthem (No Dual Advantage Plans)",
          "Humana (No Dual Advantage Plans)",
          "UnitedHealthcare (No Dual Advantage Plans)",
        ],
      },
    ],
  },
  {
    title: "Self-Pay Policy",
    blocks: [
      {
        type: "list",
        items: [
          "Established & New Patients: $100 deposit at check-in",
          "Remainder of visit cost will be collected at checkout and/or through a payment agreement.",
          "Paid in Full on Date of Service: Eligible for a 30% discount.",
        ],
      },
    ],
  },
  {
    title: "Insurance Plans Not Accepted",
    blocks: [
      {
        type: "list",
        items: [
          "No MVA (Motor Vehicle Accidents) or Workers' Compensation",
          "No Tricare Primary",
          "No Medicaid (Primary or Secondary)",
          "No UK HMO (Patients must stay within the UK network)",
          "No Anthem Transition Pathway HMO",
        ],
      },
    ],
  },
]

function BlockContent({ block }: { block: Block }) {
  if (block.type === "heading") {
    return <p className="font-bold text-foreground mb-2">{block.text}</p>
  }
  if (block.type === "list") {
    const Tag = block.ordered ? "ol" : "ul"
    return (
      <Tag className={`${block.ordered ? "list-decimal" : "list-disc"} pl-5 mb-4 space-y-1 text-muted-foreground`}>
        {block.items.map((item, i) => (
          <li key={i} className="leading-relaxed">
            {item}
          </li>
        ))}
      </Tag>
    )
  }
  return (
    <p className="text-muted-foreground leading-relaxed mb-4">
      {block.bold && <span className="font-bold text-foreground">{block.bold} </span>}
      {block.text}
    </p>
  )
}

export function AcceptedInsuranceAccordion() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-start">
      <div
        className={`absolute inset-0 z-40 backdrop-blur-md pointer-events-none transition-opacity duration-150 ease-out ${
          activeIndex !== null ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />
      {ACCEPTED_INSURANCE.map((service, index) => {
        const isOpen = activeIndex === index
        return (
          <div
            key={service.title}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex((prev) => (prev === index ? null : prev))}
            onClick={() => toggle(index)}
            className={`relative rounded-2xl border-2 border-black bg-muted overflow-hidden cursor-pointer transition-all duration-300 ${
              isOpen ? "z-50 scale-125 shadow-[0_0_30px_var(--brand-blue)]" : ""
            }`}
          >
            <div className="w-full flex items-start justify-between gap-4 bg-muted px-6 py-5 text-left">
              <span className="text-xl md:text-2xl font-extrabold text-foreground">
                {service.title}
              </span>
              <span className="flex items-center justify-center size-11 rounded-full bg-black text-white shrink-0">
                {isOpen ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-width,max-height,opacity] duration-500 ease-in-out ${
                isOpen ? "max-w-full max-h-[600px] opacity-100" : "max-w-0 max-h-0 opacity-0"
              }`}
            >
              <div className="w-full pt-0 pb-5 px-6 bg-muted max-h-[540px] overflow-y-auto">
                {service.blocks.map((block, i) => (
                  <BlockContent key={i} block={block} />
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
