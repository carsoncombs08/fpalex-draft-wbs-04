"use client"

import { ServiceAccordionGrid, type ServiceItem } from "@/components/service-accordion-grid"

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
  return <ServiceAccordionGrid services={SERVICES} />
}
