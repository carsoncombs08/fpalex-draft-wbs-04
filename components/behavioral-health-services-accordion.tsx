"use client"

import React from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

type ServiceItem = {
  title: string
  description: string
}

const BEHAVIORAL_HEALTH_SERVICES: ServiceItem[] = [
  {
    title: "Anger Management",
    description:
      "Managing anger effectively is crucial for maintaining healthy relationships and overall well-being. We help you understand the triggers and underlying issues that lead to anger, providing you with tools and strategies to control your responses and improve your emotional health.",
  },
  {
    title: "Anxiety & Depression Treatment",
    description:
      "Ease the burden that depression and anxiety bring. Our anxiety and depression treatment services offer a holistic approach to managing these conditions, including therapy, counseling, and medication management when needed. We work with you to develop a personalized plan that addresses your needs and helps you regain control of your life.",
  },
  {
    title: "Behavioral Modification",
    description:
      "Changing harmful behaviors can lead to significant improvements in your quality of life. Our behavioral modification services focus on identifying negative patterns and implementing positive changes. Through therapy and support, we help you develop healthier habits and coping mechanisms.",
  },
  {
    title: "Couples Counseling",
    description:
      "Strong relationships are built on communication and understanding. Our couples counseling services provide a safe space for partners to explore their issues, improve communication, and strengthen their bond. We offer guidance and support to help you navigate challenges and build a healthier, happier relationship.",
  },
  {
    title: "Family Therapy",
    description:
      "Healthy family dynamics are essential for overall well-being. Our family therapy services help families navigate conflicts, improve communication, and strengthen relationships. We work with you to create a supportive environment where every family member can thrive.",
  },
  {
    title: "Grief Counseling",
    description:
      "Loss is a profound, often overwhelming experience that affects every aspect of your life. Our grief counseling services offer compassionate support to help you process this trying season of life and find a path forward. We offer individual and group sessions to help you navigate the grieving process and find healing.",
  },
  {
    title: "Individual Therapy",
    description:
      "Family Practice Associates of Lexington offers one-on-one sessions with experienced therapists who help you explore your thoughts and feelings, address personal challenges, and develop strategies for growth and healing. Our goal is to support you in achieving mental and emotional well-being as you become the best version of yourself.",
  },
  {
    title: "Diagnostic Assessment & Medication Management",
    description:
      "Accurate diagnosis and effective treatment are crucial for managing mental health conditions. Our diagnostic assessment and medication management services provide a thorough assessment of your mental health and ongoing support to ensure your treatment plan is effective. We work with you to find the right balance of therapy and medication for optimal results.",
  },
  {
    title: "Stress Management & Relaxation Techniques",
    description:
      "Managing stress effectively is vital to maintaining mental and emotional health. Our practitioners offer practical tools and relaxation techniques to help you cope with daily pressures. We provide personalized strategies to reduce stress and promote a sense of calm and balance in your life.",
  },
  {
    title: "Trauma & PTSD Treatment",
    description:
      "Experiencing trauma has long-lasting effects on your mental health. We provide a safe and supportive environment to help you heal. We offer evidence-based therapies, such as cognitive-behavioral therapy, to help you process traumatic experiences and regain a sense of safety and control.",
  },
  {
    title: "Telehealth",
    description:
      "We encourage face-to-face visits for most issues, so that your provider can physically examine you and do any lab work necessary. Not all visits are appropriate for Telehealth appointments, however, we understand that patients may have safety concerns and might want a telehealth visit. Please visit our FAQ page for more information.",
  },
]

export function BehavioralHealthServicesAccordion() {
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
      {BEHAVIORAL_HEALTH_SERVICES.map((service, index) => {
        const isOpen = openItems.has(index)
        return (
          <div key={service.title}>
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
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
