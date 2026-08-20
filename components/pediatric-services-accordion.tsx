"use client"

import { ServiceAccordionGrid, type ServiceItem } from "@/components/service-accordion-grid"

const PEDIATRIC_SERVICES: ServiceItem[] = [
  {
    title: "Adolescent Health Services",
    image: "/assets/image/fpa-adolescent-health.webp",
    description:
      "Adolescence is a crucial time for physical, emotional, and social development. Our adolescent health services address the unique needs of teenagers, providing care and guidance through these formative years. We offer routine check-ups, preventive screenings, and counseling on topics such as puberty, mental health, and healthy lifestyle choices. Our goal is to help teens navigate this poignant phase of life with confidence and support.",
  },
  {
    title: "Asthma & Allergy Management",
    image: "/assets/image/fpa-asthma-allergy-management.webp",
    description:
      "Our comprehensive asthma and allergy management services include diagnosis, treatment, and ongoing care to help control symptoms and improve quality of life. We provide personalized plans that may include medications, lifestyle adjustments, and education to help your child manage their condition effectively while staying active and healthy.",
    listLabel: "Chronic Conditions We Treat:",
    list: ["Diabetes", "Hypertension", "Asthma"],
  },
  {
    title: "ADHD/Behavioral Evaluation & Treatment",
    image: "/assets/image/fpa-adhd-behavioral-evaluation.webp",
    description:
      "Attention-deficit/hyperactivity disorder (ADHD) and other behavioral issues can significantly impact a child's life. Our team provides thorough evaluations and evidence-based treatments for ADHD and other behavioral concerns. We work closely with families to develop personalized treatment plans that may include behavioral therapy, medication, and other support strategies to help your child thrive at home and in school.",
  },
  {
    title: "Childhood Illness Treatment",
    image: "/assets/image/fpa-childhood-illness-treatment.webp",
    description:
      "When your child is sick, you want prompt and effective care. Family Practice Associates of Lexington treats common childhood illnesses such as ear infections, strep throat, and other acute conditions. Our team offers compassionate care to alleviate symptoms and ensure a speedy recovery, minimizing the disruption to your child's daily life.",
  },
  {
    title: "Developmental Screening & Monitoring",
    image: "/assets/image/fpa-developmental-screening.webp",
    description:
      "Early detection of developmental issues is key to providing timely interventions. Our developmental screening and monitoring services assess your child's growth and development milestones, identifying any potential concerns early on. We work with you to create an appropriate plan of action, ensuring your child receives the support they need to reach their full potential.",
  },
  {
    title: "Newborn Care",
    image: "/assets/image/fpa-newborn-care.webp",
    description:
      "The first few weeks and months of your baby's life are critical for their development. Our newborn care services include comprehensive check-ups, monitoring of growth and development, and guidance for new parents. We provide support for breastfeeding, immunizations, and early screening tests to ensure your baby gets a healthy start in life.",
  },
  {
    title: "Nutritional Counseling",
    image: "/assets/image/fpa-nutritional-counseling.webp",
    description:
      "Good nutrition is the foundation of a healthy childhood. Our nutritional counseling services offer personalized advice and support to help you make informed choices about your child's diet. We address common concerns such as picky eating, food allergies, and balanced nutrition, helping you foster healthy eating habits that will benefit your child for a lifetime.",
  },
  {
    title: "Pediatric Weight Management",
    image: "/assets/image/fpa-pediatric-weight-management.webp",
    description:
      "Our pediatric weight management services provide a comprehensive approach to help children achieve and maintain a healthy weight. We offer personalized plans that include dietary guidance, physical activity recommendations, and behavioral strategies to support your child's health and well-being.",
  },
  {
    title: "Seasonal Flu Shot Clinic",
    image: "/assets/image/fpa-pediatric-flu-shot-clinic.webp",
    description:
      "Protect your child from the flu with our seasonal flu shot clinic. Annual flu vaccinations are the best way to reduce the risk of flu and its complications. Our clinic provides convenient and efficient flu shots for children of all ages, helping to keep your family healthy during flu season.",
  },
  {
    title: "Sports Physicals",
    image: "/assets/image/fpa-sports-physicals.webp",
    description:
      "Participation in sports is an excellent way for children to stay active and healthy. Our sports physicals ensure your child is ready for physical activity and meets all the necessary health requirements for their sport. We assess overall health, identify potential issues, and provide guidance to prevent injuries, ensuring your child can enjoy their favorite activities safely.",
    listLabel: "Our Preventative Screenings Include:",
    list: ["Cholesterol Screenings", "Blood Pressure Screenings", "Diabetes Screenings"],
  },
  {
    title: "Well-Child Visits and Immunizations",
    image: "/assets/image/fpa-well-child-immunizations.webp",
    description:
      "Regular well-child visits include comprehensive check-ups, preventive screenings, and immunizations to protect against various diseases. Our team provides a supportive environment where you can discuss any concerns and receive expert advice on your child's health and development.",
  },
  {
    title: "Telehealth",
    image: "/assets/image/fpa-pediatric-telehealth.webp",
    description:
      "We encourage face-to-face visits for most issues, so that your provider can physically examine you and do any lab work necessary. Not all visits are appropriate for Telehealth appointments, however, we understand that patients may have safety concerns and might want a telehealth visit. Please visit our FAQ page for more information.",
  },
]

export function PediatricServicesAccordion() {
  return <ServiceAccordionGrid services={PEDIATRIC_SERVICES} />
}
