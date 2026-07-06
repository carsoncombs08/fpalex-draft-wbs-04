"use client"

import React from "react"
import Image from "next/image"
import { ChevronUp, ChevronDown } from "lucide-react"

type ServiceItem = {
  title: string
  description: string
  image?: string
}

const SERVICES: ServiceItem[] = [
  {
    title: "Annual Physical Exams",
    image: "/assets/image/fpa-annual-physical.webp",
    description:
      "Regular check-ups are essential for maintaining good health. Our annual physical exams include a comprehensive assessment of your overall health, helping to detect any potential issues early and keeping you on track with your wellness goals. During these exams, we review your medical history, perform necessary screenings, and discuss any health concerns you might have. This proactive approach helps us tailor a healthcare plan that supports your long-term health.",
  },
  {
    title: "Chronic Disease Management",
    description:
      "Living with a chronic condition like diabetes, hypertension, or asthma requires ongoing, coordinated care. Our providers work with you to monitor your condition, adjust treatment plans as needed, and provide the education and support you need to manage your health day to day.",
  },
  {
    title: "Immunizations & Vaccinations",
    description:
      "We offer a full range of immunizations for patients of all ages, from childhood vaccine schedules to seasonal flu shots and adult boosters. Staying current on vaccinations is one of the simplest ways to protect yourself and your family from preventable illness.",
  },
  {
    title: "Same-Day Sick Visit Care",
    description:
      "When illness strikes, you shouldn't have to wait days for an appointment. We offer same-day sick visits for acute conditions like colds, flu, infections, and minor injuries, so you can get seen and start feeling better sooner.",
  },
  {
    title: "Women's Health Services",
    description:
      "Our providers offer comprehensive women's health services, including annual wellness exams, family planning counseling, and preventive screenings, all delivered with the personalized attention you deserve at every stage of life.",
  },
  {
    title: "Pediatric & Adolescent Care",
    description:
      "From newborn checkups to teenage wellness visits, our team provides compassionate, family-centered care for your children as they grow, including well-child exams, immunizations, and guidance for parents along the way.",
  },
  {
    title: "Geriatric Care",
    description:
      "Aging brings unique health considerations, and our providers are experienced in the coordinated, compassionate care older adults need, including chronic condition management, medication review, and preventive care tailored to seniors.",
  },
  {
    title: "Behavioral & Mental Health Support",
    description:
      "Mental health is a core part of overall wellness. Our team provides support and referrals for anxiety, depression, and other behavioral health concerns, working alongside your primary care to address your whole-person health.",
  },
]

export function ServicesAccordion() {
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
    <div className="space-y-3 mb-10">
      {SERVICES.map((service, index) => {
        const isOpen = openItems.has(index)
        return (
          <div key={service.title}>
            {isOpen && service.image && (
              <div className="relative w-full aspect-[16/9] mb-0 overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
            )}
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 border-2 border-black bg-muted px-6 py-5 text-left transition-colors hover:bg-accent"
            >
              <span className="text-xl md:text-2xl font-extrabold" style={{ color: "var(--brand-blue)" }}>
                {service.title}
              </span>
              <span className="flex items-center justify-center size-11 rounded-full bg-black text-white shrink-0">
                {isOpen ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
              </span>
            </button>
            {isOpen && (
              <p className="text-muted-foreground leading-relaxed pt-4 pb-2 px-1">{service.description}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}
