"use client"

import React from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

type ServiceItem = {
  title: string
  description: string
  listLabel?: string
  list?: string[]
}

const PEDIATRIC_SERVICES: ServiceItem[] = [
  {
    title: "Adolescent Health Services",
    description:
      "Adolescence is a crucial time for physical, emotional, and social development. Our adolescent health services address the unique needs of teenagers, providing care and guidance through these formative years. We offer routine check-ups, preventive screenings, and counseling on topics such as puberty, mental health, and healthy lifestyle choices. Our goal is to help teens navigate this poignant phase of life with confidence and support.",
  },
  {
    title: "Asthma & Allergy Management",
    description:
      "Our comprehensive asthma and allergy management services include diagnosis, treatment, and ongoing care to help control symptoms and improve quality of life. We provide personalized plans that may include medications, lifestyle adjustments, and education to help your child manage their condition effectively while staying active and healthy.",
    listLabel: "Chronic Conditions We Treat:",
    list: ["Diabetes", "Hypertension", "Asthma"],
  },
  {
    title: "ADHD/Behavioral Evaluation & Treatment",
    description:
      "Attention-deficit/hyperactivity disorder (ADHD) and other behavioral issues can significantly impact a child's life. Our team provides thorough evaluations and evidence-based treatments for ADHD and other behavioral concerns. We work closely with families to develop personalized treatment plans that may include behavioral therapy, medication, and other support strategies to help your child thrive at home and in school.",
  },
  {
    title: "Childhood Illness Treatment",
    description:
      "When your child is sick, you want prompt and effective care. Family Practice Associates of Lexington treats common childhood illnesses such as ear infections, strep throat, and other acute conditions. Our team offers compassionate care to alleviate symptoms and ensure a speedy recovery, minimizing the disruption to your child's daily life.",
  },
  {
    title: "Developmental Screening & Monitoring",
    description:
      "Early detection of developmental issues is key to providing timely interventions. Our developmental screening and monitoring services assess your child's growth and development milestones, identifying any potential concerns early on. We work with you to create an appropriate plan of action, ensuring your child receives the support they need to reach their full potential.",
  },
  {
    title: "Newborn Care",
    description:
      "The first few weeks and months of your baby's life are critical for their development. Our newborn care services include comprehensive check-ups, monitoring of growth and development, and guidance for new parents. We provide support for breastfeeding, immunizations, and early screening tests to ensure your baby gets a healthy start in life.",
  },
  {
    title: "Nutritional Counseling",
    description:
      "Good nutrition is the foundation of a healthy childhood. Our nutritional counseling services offer personalized advice and support to help you make informed choices about your child's diet. We address common concerns such as picky eating, food allergies, and balanced nutrition, helping you foster healthy eating habits that will benefit your child for a lifetime.",
  },
  {
    title: "Pediatric Weight Management",
    description:
      "Our pediatric weight management services provide a comprehensive approach to help children achieve and maintain a healthy weight. We offer personalized plans that include dietary guidance, physical activity recommendations, and behavioral strategies to support your child's health and well-being.",
  },
  {
    title: "Seasonal Flu Shot Clinic",
    description:
      "Protect your child from the flu with our seasonal flu shot clinic. Annual flu vaccinations are the best way to reduce the risk of flu and its complications. Our clinic provides convenient and efficient flu shots for children of all ages, helping to keep your family healthy during flu season.",
  },
  {
    title: "Sports Physicals",
    description:
      "Participation in sports is an excellent way for children to stay active and healthy. Our sports physicals ensure your child is ready for physical activity and meets all the necessary health requirements for their sport. We assess overall health, identify potential issues, and provide guidance to prevent injuries, ensuring your child can enjoy their favorite activities safely.",
    listLabel: "Our Preventative Screenings Include:",
    list: ["Cholesterol Screenings", "Blood Pressure Screenings", "Diabetes Screenings"],
  },
  {
    title: "Well-Child Visits and Immunizations",
    description:
      "Regular well-child visits include comprehensive check-ups, preventive screenings, and immunizations to protect against various diseases. Our team provides a supportive environment where you can discuss any concerns and receive expert advice on your child's health and development.",
  },
  {
    title: "Telehealth",
    description:
      "We encourage face-to-face visits for most issues, so that your provider can physically examine you and do any lab work necessary. Not all visits are appropriate for Telehealth appointments, however, we understand that patients may have safety concerns and might want a telehealth visit. Please visit our FAQ page for more information.",
  },
]

export function PediatricServicesAccordion() {
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
      {PEDIATRIC_SERVICES.map((service, index) => {
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
                {service.list && (
                  <div className="mt-4">
                    {service.listLabel && (
                      <p className="font-bold text-foreground mb-2">{service.listLabel}</p>
                    )}
                    <ul className="space-y-1">
                      {service.list.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-muted-foreground">
                          <span
                            className="size-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: "var(--brand-blue)" }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
