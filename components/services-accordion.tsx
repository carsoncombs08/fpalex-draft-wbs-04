"use client"

import React from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { ChevronUp, ChevronDown } from "lucide-react"

type ServiceItem = {
  title: string
  description: string
  image?: string
  listLabel?: string
  list?: string[]
}

const SERVICES: ServiceItem[] = [
  {
    title: "Annual Physical Exams",
    image: "/assets/image/fpa-annual-physical.webp",
    description:
      "Regular check-ups are essential for maintaining good health. Our annual physical exams include a comprehensive assessment of your overall health, helping to detect any potential issues early and keeping you on track with your wellness goals. During these exams, we review your medical history, perform necessary screenings, and discuss any health concerns you might have. This proactive approach helps us tailor a healthcare plan that supports your long-term health.",
  },
  {
    title: "Wellness Exams",
    image: "/assets/image/fpa-wellness-exams.webp",
    description:
      "Regular wellness exams are a cornerstone of our primary care services. These comprehensive check-ups help ensure you're in good health and provide an opportunity to address any concerns with your healthcare provider. During a wellness exam, we perform a thorough physical assessment, review your medical history, and discuss your health goals. These exams are crucial for the early detection of potential issues and for maintaining overall well-being.",
  },
  {
    title: "Chronic Disease Management",
    image: "/assets/image/fpa-chronic-disease-management.webp",
    description:
      "Managing chronic conditions requires ongoing care and attention. Our team provides personalized management plans, ensuring you receive the best possible care to keep your condition under control. We work closely with you to monitor your symptoms, adjust treatments as needed, and offer education and support to help you manage your condition effectively.",
    listLabel: "Chronic Conditions We Treat:",
    list: ["Diabetes", "Hypertension", "Asthma"],
  },
  {
    title: "Preventative Screenings",
    image: "/assets/image/fpa-preventative-screenings.webp",
    description:
      "Preventive screenings are essential for early detection of health issues. We offer a range of screenings for cholesterol, blood pressure, and diabetes to help you stay ahead of potential health problems. By identifying risk factors early, we can implement strategies to prevent the development of serious conditions and manage your health proactively.",
    listLabel: "Our Preventative Screenings Include:",
    list: ["Cholesterol Screenings", "Blood Pressure Screenings", "Diabetes Screenings"],
  },
  {
    title: "Immunizations",
    image: "/assets/image/fpa-immunizations.webp",
    description:
      "Vaccinations are a crucial part of preventive healthcare. We provide a full range of immunizations for children, adults, and seniors to protect against various diseases and keep your family healthy. From childhood vaccines to boosters and travel immunizations, our team ensures you stay up-to-date on essential shots.",
  },
  {
    title: "Seasonal Flu Shot Clinic",
    image: "/assets/image/fpa-seasonal-flu-shot-clinic.webp",
    description:
      "Protect yourself and your loved ones from the flu with our seasonal flu shot clinic. Getting vaccinated annually is the best way to reduce your risk of flu and its complications. Our clinic is convenient and efficient, making it easy for you to get the protection you need during flu season.",
  },
  {
    title: "Minor Injury Treatment",
    image: "/assets/image/fpa-minor-injury-treatment.webp",
    description:
      "Accidents happen, and when they do, our team is here to provide prompt and effective treatment for minor injuries. Whether it's a sprain, cut, or burn, you can rely on us for compassionate care and quick recovery. We offer on-site treatment for a variety of minor injuries, minimizing the need for emergency room visits and ensuring you get back to your daily activities as soon as possible.",
  },
  {
    title: "Women's Health Services",
    image: "/assets/image/fpa-womens-health.webp",
    description:
      "Women have unique healthcare needs that change throughout their lives. Our women's health services include gynecological exams, breast health screenings, and reproductive health care, all tailored to support women's health at every stage. Whether you need a routine pap smear, mammogram, or menopause management, our compassionate team is here to provide the care and support you need.",
  },
  {
    title: "Men's Health Services",
    image: "/assets/image/fpa-mens-health.webp",
    description:
      "From prostate health to cardiovascular screenings, our men's health services are designed to address the specific concerns of male patients. We offer routine screenings, preventive care, and treatments tailored to men's health issues, ensuring comprehensive care supporting your well-being.",
  },
  {
    title: "Geriatric Care",
    image: "/assets/image/fpa-geriatric-care.webp",
    description:
      "Aging gracefully involves specialized care tailored to the unique needs of older adults. We offer comprehensive senior care that focuses on maintaining health, managing chronic conditions, and improving the quality of life for our senior patients. We strive to provide compassionate care that respects the dignity and independence of our elderly patients.",
  },
  {
    title: "Medicare Wellness Exams",
    image: "/assets/image/fpa-medicare-wellness-exams.webp",
    description:
      "Medicare wellness exams are an important aspect of preventive healthcare for seniors. Our comprehensive exams help identify potential health issues early, ensuring you receive the necessary care to maintain your health. These annual exams include a thorough medical history review, risk assessments, and personalized health advice. We aim to help you stay healthy, active, and independent for as long as possible.",
  },
  {
    title: "Lifestyle Counseling",
    image: "/assets/image/fpa-lifestyle-counseling.webp",
    description:
      "Healthy lifestyle choices are essential to long-term wellness. Our lifestyle counseling services are designed to support you in making positive changes that enhance your health and well-being. Our weight management program offers personalized plans that include nutrition guidance, exercise recommendations, and behavioral strategies. For those looking to quit smoking, we provide resources, counseling, and support to help you overcome addiction and improve your overall health.",
  },
  {
    title: "Telehealth",
    image: "/assets/image/fpa-telehealth.webp",
    description:
      "We encourage face-to-face visits for most issues, so that your provider can physically examine you and do any lab work necessary. Not all visits are appropriate for Telehealth appointments, however, we understand that patients may have safety concerns and might want a telehealth visit. Please visit our FAQ page for more information.",
  },
]

export function ServicesAccordion() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-start">
      {mounted &&
        activeIndex !== null &&
        createPortal(
          <div className="fixed inset-0 z-40 backdrop-blur-md pointer-events-none" aria-hidden="true" />,
          document.body,
        )}
      {SERVICES.map((service, index) => {
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
            </div>
          </div>
        )
      })}
    </div>
  )
}
