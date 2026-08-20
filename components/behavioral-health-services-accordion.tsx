"use client"

import { ServiceAccordionGrid, type ServiceItem } from "@/components/service-accordion-grid"

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
  return <ServiceAccordionGrid services={BEHAVIORAL_HEALTH_SERVICES} />
}
