"use client"

import { ServiceAccordionGrid, type ServiceItem } from "@/components/service-accordion-grid"

const ADDITIONAL_SERVICES: ServiceItem[] = [
  {
    title: "NEW! Medical Cannabis Certificates",
    image: "/assets/image/fpa-medical-cannabis.webp",
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
    image: "/assets/image/fpa-additional-flu-shot.webp",
    blocks: [
      {
        type: "p",
        text: "Protect yourself and your family from the flu with our seasonal flu shot clinics. Annual flu vaccinations are the best way to reduce the risk of flu and its complications. Our convenient and efficient clinics make it easy for you to stay healthy during flu season.",
      },
    ],
  },
  {
    title: "PAS Clinic",
    image: "/assets/image/fpa-pas-clinic.webp",
    blocks: [
      {
        type: "p",
        text: "Our PAS clinic offers various essential health services, including allergy injections, vaccinations, and the management of controlled substances. Our team provides personalized care in a safe and comfortable environment, ensuring you receive the necessary treatments to maintain your health and well-being.",
      },
    ],
  },
  {
    title: "Diabetic Eye Exam",
    image: "/assets/image/fpa-diabetic-eye-exam.webp",
    blocks: [
      {
        type: "p",
        text: "Regular eye exams are vital for individuals with diabetes to prevent complications such as diabetic retinopathy. Our diabetic eye exams include a comprehensive evaluation of your eye health, using advanced diagnostic tools to detect early signs of damage. Protect your vision and manage your diabetes effectively with our specialized care.",
      },
    ],
  },
  {
    title: "Diabetic Management",
    image: "/assets/image/fpa-diabetic-management.webp",
    blocks: [
      {
        type: "p",
        text: "Managing diabetes requires a holistic approach and ongoing support. Our diabetic management services include personalized treatment plans, regular monitoring, and education to help you control your blood sugar levels and prevent complications. We work closely with you to ensure your diabetes is well-managed and your health is optimized.",
      },
    ],
  },
  {
    title: "DOT Physicals",
    image: "/assets/image/fpa-dot-physicals.webp",
    blocks: [
      {
        type: "p",
        text: "Federal law requires drivers of commercial motor vehicles to undergo and pass regular physical examinations. Our certified medical examiners provide thorough DOT physicals, adhering to the Federal Motor Carrier Safety Administration (FMCSA) standards. These exams include a comprehensive medical history review, vision and hearing tests, blood pressure checks, and more. We ensure you meet all the requirements to operate a commercial vehicle safely.",
      },
    ],
  },
  {
    title: "Bone Density Testing",
    image: "/assets/image/fpa-bone-density-testing.webp",
    blocks: [
      {
        type: "p",
        text: "Bone density testing is crucial for detecting osteoporosis and assessing your risk of fractures. Our advanced bone density tests provide accurate measurements to help you and your doctor make informed decisions about your bone health. Early detection and treatment can significantly improve your quality of life and prevent serious complications.",
      },
    ],
  },
  {
    title: "Body Composition Scan",
    image: "/assets/image/fpa-body-composition-scan.webp",
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
    image: "/assets/image/fpa-covid-vaccine.webp",
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
    image: "/assets/image/fpa-telehealth.webp",
    blocks: [
      {
        type: "p",
        text: "We encourage face-to-face visits for most issues, so that your provider can physically examine you and do any lab work necessary. Not all visits are appropriate for Telehealth appointments, however, we understand that patients may have safety concerns and might want a telehealth visit. Please visit our FAQ page for more information.",
      },
    ],
  },
  {
    title: "Medicare GLP-1 Bridge Program",
    image: "/assets/image/fpa-medicare-glp1-bridge.webp",
    href: "/services/additional-services/medicare-glp1-bridge",
  },
]

export function AdditionalServicesAccordion() {
  return <ServiceAccordionGrid services={ADDITIONAL_SERVICES} />
}
