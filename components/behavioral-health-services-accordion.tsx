"use client"

import React from "react"
import Image from "next/image"
import { ChevronUp, ChevronDown } from "lucide-react"

type ServiceItem = {
  title: string
  description: string
  image?: string
}

const BEHAVIORAL_HEALTH_SERVICES: ServiceItem[] = [
  {
    title: "Anger Management",
    image: "/assets/image/fpa-anger-management.webp",
    description:
      "Managing anger effectively is crucial for maintaining healthy relationships and overall well-being. We help you understand the triggers and underlying issues that lead to anger, providing you with tools and strategies to control your responses and improve your emotional health.",
  },
  {
    title: "Anxiety & Depression Treatment",
    image: "/assets/image/fpa-anxiety-depression.webp",
    description:
      "Ease the burden that depression and anxiety bring. Our anxiety and depression treatment services offer a holistic approach to managing these conditions, including therapy, counseling, and medication management when needed. We work with you to develop a personalized plan that addresses your needs and helps you regain control of your life.",
  },
  {
    title: "Behavioral Modification",
    image: "/assets/image/fpa-behavioral-modification.webp",
    description:
      "Changing harmful behaviors can lead to significant improvements in your quality of life. Our behavioral modification services focus on identifying negative patterns and implementing positive changes. Through therapy and support, we help you develop healthier habits and coping mechanisms.",
  },
  {
    title: "Couples Counseling",
    image: "/assets/image/fpa-couples-counseling.webp",
    description:
      "Strong relationships are built on communication and understanding. Our couples counseling services provide a safe space for partners to explore their issues, improve communication, and strengthen their bond. We offer guidance and support to help you navigate challenges and build a healthier, happier relationship.",
  },
  {
    title: "Family Therapy",
    image: "/assets/image/fpa-family-therapy.webp",
    description:
      "Healthy family dynamics are essential for overall well-being. Our family therapy services help families navigate conflicts, improve communication, and strengthen relationships. We work with you to create a supportive environment where every family member can thrive.",
  },
  {
    title: "Grief Counseling",
    image: "/assets/image/fpa-grief-counseling.webp",
    description:
      "Loss is a profound, often overwhelming experience that affects every aspect of your life. Our grief counseling services offer compassionate support to help you process this trying season of life and find a path forward. We offer individual and group sessions to help you navigate the grieving process and find healing.",
  },
  {
    title: "Individual Therapy",
    image: "/assets/image/fpa-individual-therapy.webp",
    description:
      "Family Practice Associates of Lexington offers one-on-one sessions with experienced therapists who help you explore your thoughts and feelings, address personal challenges, and develop strategies for growth and healing. Our goal is to support you in achieving mental and emotional well-being as you become the best version of yourself.",
  },
  {
    title: "Diagnostic Assessment & Medication Management",
    image: "/assets/image/fpa-diagnostic-assessment.webp",
    description:
      "Accurate diagnosis and effective treatment are crucial for managing mental health conditions. Our diagnostic assessment and medication management services provide a thorough assessment of your mental health and ongoing support to ensure your treatment plan is effective. We work with you to find the right balance of therapy and medication for optimal results.",
  },
  {
    title: "Stress Management & Relaxation Techniques",
    image: "/assets/image/fpa-stress-management.webp",
    description:
      "Managing stress effectively is vital to maintaining mental and emotional health. Our practitioners offer practical tools and relaxation techniques to help you cope with daily pressures. We provide personalized strategies to reduce stress and promote a sense of calm and balance in your life.",
  },
  {
    title: "Trauma & PTSD Treatment",
    image: "/assets/image/fpa-trauma-ptsd.webp",
    description:
      "Experiencing trauma has long-lasting effects on your mental health. We provide a safe and supportive environment to help you heal. We offer evidence-based therapies, such as cognitive-behavioral therapy, to help you process traumatic experiences and regain a sense of safety and control.",
  },
  {
    title: "Telehealth",
    image: "/assets/image/fpa-telehealth.webp",
    description:
      "We encourage face-to-face visits for most issues, so that your provider can physically examine you and do any lab work necessary. Not all visits are appropriate for Telehealth appointments, however, we understand that patients may have safety concerns and might want a telehealth visit. Please visit our FAQ page for more information.",
  },
]

export function BehavioralHealthServicesAccordion() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)
  const [gridVisible, setGridVisible] = React.useState(false)
  const gridRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setGridVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div ref={gridRef} className="relative flex flex-wrap justify-center gap-6 mb-10 items-start">
      <div
        className={`absolute inset-0 z-40 backdrop-blur-md pointer-events-none transition-opacity duration-150 ease-out ${
          activeIndex !== null ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />
      {BEHAVIORAL_HEALTH_SERVICES.map((service, index) => {
        const isOpen = activeIndex === index
        return (
          <div
            key={service.title}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex((prev) => (prev === index ? null : prev))}
            onClick={() => toggle(index)}
            className={`relative w-full md:w-[calc(33.333%-1rem)] rounded-2xl border-2 border-black bg-muted overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
              isOpen ? "z-50 scale-125 shadow-[0_0_30px_var(--brand-blue)]" : ""
            } ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: isOpen ? "0ms" : `${index * 80}ms` }}
          >
            {service.image && (
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
            )}
            <div className="w-full flex items-start justify-between gap-4 bg-muted px-6 py-5 text-left">
              <span className="text-xl md:text-2xl font-extrabold" style={{ color: "var(--brand-blue)" }}>
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
              <div className="w-full pt-0 pb-5 px-6 bg-muted">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
