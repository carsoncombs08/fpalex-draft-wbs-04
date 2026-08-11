"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Newspaper, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LocationsHoursSection } from "@/components/locations-hours-section"
import { Reveal } from "@/components/reveal"
import { RevealText } from "@/components/reveal-text"
import { GoogleLogo } from "@/components/google-logo"

const HOME_SERVICES = [
  { href: "/services/primary-care", label: "Primary Care", image: "/assets/image/fpa-homepage-primary-care.webp" },
  { href: "/services/pediatric-care", label: "Pediatric Care", image: "/assets/image/fpa-homepage-pediatric-care.webp" },
  {
    href: "/services/behavioral-health",
    label: "Behavioral Health",
    image: "/assets/image/fpa-homepage-behavioral-health.webp",
  },
  {
    href: "/services/additional-services",
    label: "Additional Services",
    image: "/assets/image/fpa-homepage-additional-services.webp",
  },
]

export default function Home() {
  const [awardsHovered, setAwardsHovered] = React.useState(false)
  const [reviewHovered, setReviewHovered] = React.useState(false)
  const [hoveredService, setHoveredService] = React.useState<number | null>(null)
  const [servicesVisible, setServicesVisible] = React.useState(false)
  const [servicesSectionHovered, setServicesSectionHovered] = React.useState(false)
  const servicesRef = React.useRef<HTMLDivElement>(null)
  const [providersImagesVisible, setProvidersImagesVisible] = React.useState(false)
  const providersRef = React.useRef<HTMLDivElement>(null)
  const [aboutUsVisible, setAboutUsVisible] = React.useState(false)
  const aboutUsRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const el = servicesRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setServicesVisible(entry.isIntersecting)
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  React.useEffect(() => {
    const el = aboutUsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAboutUsVisible(entry.isIntersecting)
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  React.useEffect(() => {
    const el = providersRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setProvidersImagesVisible(entry.isIntersecting)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-[100dvh] flex flex-col overflow-x-hidden overflow-y-visible">
      <SiteHeader activePage="home" />

      {/* Building Photo (hovering/enlarging this does NOT affect the glow below) */}
      <div className="group/photo relative w-full h-[35vh] hover:h-[calc(100vw*0.458)] bg-background overflow-hidden transition-[height] duration-500 ease-in-out">
        <Image
          src="/assets/image/fpa-building.webp"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover"
          priority
        />
        <Image
          src="/assets/image/fpa-building.webp"
          alt="Family Practice Associates of Lexington building exterior"
          fill
          className="object-cover transition-opacity duration-500 ease-in-out group-hover/photo:opacity-0"
          priority
        />
      </div>

      {/* Hero Section (glow only fades when hovering directly over the button menu areas below) */}
      <section className="group/hero relative flex-1 flex flex-col items-center justify-center px-6 py-16 md:py-24">
          <div className="relative max-w-4xl mx-auto text-center">
            {/* Blue glow — a pair of parenthesis-shaped crescents, "(  )", fading in from their thick outer edge across the page */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-24 sm:-inset-x-36 md:-inset-x-48 -top-20 md:-top-28 bottom-24 -z-10 flex items-center justify-between opacity-[0.8] transition-opacity duration-500 ease-in-out group-has-[.menu-zone:hover]/hero:opacity-0"
            >
              <svg viewBox="0 0 200 600" preserveAspectRatio="none" className="h-full w-48 sm:w-64 md:w-80 blur-lg">
                <defs>
                  <linearGradient id="glowFadeLeft" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="1" />
                    <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#glowFadeLeft)"
                  d="M170,0 C20,80 20,520 170,600 C100,520 100,80 170,0 Z"
                />
              </svg>
              <svg viewBox="0 0 200 600" preserveAspectRatio="none" className="h-full w-48 sm:w-64 md:w-80 blur-lg">
                <defs>
                  <linearGradient id="glowFadeRight" x1="1" y1="0" x2="0" y2="0">
                    <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="1" />
                    <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#glowFadeRight)"
                  d="M30,0 C180,80 180,520 30,600 C100,520 100,80 30,0 Z"
                />
              </svg>
            </div>

            {/* Second, outer pair of parenthesis-shaped crescents, placed between the inner glow and the page edge */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-36 sm:-inset-x-52 md:-inset-x-72 -top-20 md:-top-28 bottom-24 -z-10 flex items-center justify-between opacity-40 transition-opacity duration-500 ease-in-out group-has-[.menu-zone:hover]/hero:opacity-0"
            >
              <svg viewBox="0 0 200 600" preserveAspectRatio="none" className="h-full w-48 sm:w-64 md:w-80 blur-lg">
                <defs>
                  <linearGradient id="glowFadeLeftOuter" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="1" />
                    <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#glowFadeLeftOuter)"
                  d="M170,0 C20,80 20,520 170,600 C100,520 100,80 170,0 Z"
                />
              </svg>
              <svg viewBox="0 0 200 600" preserveAspectRatio="none" className="h-full w-48 sm:w-64 md:w-80 blur-lg">
                <defs>
                  <linearGradient id="glowFadeRightOuter" x1="1" y1="0" x2="0" y2="0">
                    <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="1" />
                    <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#glowFadeRightOuter)"
                  d="M30,0 C180,80 180,520 30,600 C100,520 100,80 30,0 Z"
                />
              </svg>
            </div>

            {/* Third, outermost pair of parenthesis-shaped crescents, placed closest to the page edge */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-48 sm:-inset-x-68 md:-inset-x-96 -top-20 md:-top-28 bottom-24 -z-10 flex items-center justify-between opacity-20 transition-opacity duration-500 ease-in-out group-has-[.menu-zone:hover]/hero:opacity-0"
            >
              <svg viewBox="0 0 200 600" preserveAspectRatio="none" className="h-full w-48 sm:w-64 md:w-80 blur-lg">
                <defs>
                  <linearGradient id="glowFadeLeftOutermost" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="1" />
                    <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#glowFadeLeftOutermost)"
                  d="M170,0 C20,80 20,520 170,600 C100,520 100,80 170,0 Z"
                />
              </svg>
              <svg viewBox="0 0 200 600" preserveAspectRatio="none" className="h-full w-48 sm:w-64 md:w-80 blur-lg">
                <defs>
                  <linearGradient id="glowFadeRightOutermost" x1="1" y1="0" x2="0" y2="0">
                    <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="1" />
                    <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#glowFadeRightOutermost)"
                  d="M30,0 C180,80 180,520 30,600 C100,520 100,80 30,0 Z"
                />
              </svg>
            </div>

            <RevealText as="h1" className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 text-balance">
              Family Practice Associates
            </RevealText>
            <RevealText as="p" className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
              Serving Central Kentucky for over 40 Years
            </RevealText>

            {/* CTA Buttons */}
            <div className="menu-zone flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button asChild size="lg" className="px-6 transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]">
                <Link href="/book">Book Today</Link>
              </Button>

            </div>
          </div>

          <div id="quick-links" className="menu-zone w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 scroll-mt-24">
            <Button asChild size="lg" className="w-4/5 mx-auto min-h-12 h-auto py-3 whitespace-normal text-center leading-snug transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]">
              <Link href="https://z3-ppw.phreesia.net/z3/patient/Payment.aspx/IdentifyPatient" target="_blank" rel="noopener noreferrer">
                Make A Payment
              </Link>
            </Button>
            <Button asChild size="lg" className="w-4/5 mx-auto min-h-12 h-auto py-3 whitespace-normal text-center leading-snug transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]">
              <Link href="/patient-portal">Patient Portal</Link>
            </Button>
            <Button asChild size="lg" className="w-4/5 mx-auto min-h-12 h-auto py-3 whitespace-normal text-center leading-snug transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]">
              <Link href="/patient-forms-and-records-request">Patient Forms and Records Request</Link>
            </Button>
            <div className="relative w-4/5 mx-auto">
              <span className="absolute -top-2 -right-2 z-10 rounded-full bg-red-600 text-white text-xs font-bold px-2 py-0.5 shadow-sm">
                !New!
              </span>
              <Button asChild size="lg" className="w-full min-h-12 h-auto py-3 whitespace-normal text-center leading-snug transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]">
                <Link href="#">Medical Cannabis Clinic</Link>
              </Button>
            </div>
          </div>
      </section>

      {/* Highlighted Review */}
      <section className="w-full px-6 pt-14 pb-4 md:pt-20">
        <Reveal className="max-w-2xl mx-auto">
          <div
            onMouseEnter={() => setReviewHovered(true)}
            onMouseLeave={() => setReviewHovered(false)}
            className={`relative rounded-2xl border-2 border-[var(--brand-blue)] bg-background p-6 md:p-8 transition-all duration-300 ${
              reviewHovered ? "z-50 scale-105 shadow-[0_0_40px_12px_rgba(255,255,255,0.85)]" : ""
            }`}
          >
            <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[var(--brand-blue)] mb-4">
              Highlighted Review
            </span>

            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <div className="flex items-center justify-center size-14 rounded-full bg-[var(--brand-blue)] text-white text-lg font-extrabold">
                    DL
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex items-center justify-center size-6 rounded-full bg-white shadow">
                    <GoogleLogo className="size-4" />
                  </span>
                </div>
                <div>
                  <p className="font-extrabold text-foreground leading-tight">
                    David Leach <span className="font-normal text-muted-foreground">on Google</span>
                  </p>
                  <div className="flex items-center gap-0.5 mt-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-sm text-muted-foreground shrink-0">27 days ago</span>
            </div>

            <p className="mt-4 text-foreground leading-relaxed">
              Great with kiddos and geriatric patients!! shout out to the best lab team ever so ran!!
            </p>
          </div>
        </Reveal>
      </section>

      {/* Awards and Certificates */}
      <section className="w-full relative">
        <div
          onMouseEnter={() => setAwardsHovered(true)}
          onMouseLeave={() => setAwardsHovered(false)}
          className={`relative transition-all duration-300 ${
            awardsHovered ? "z-50 scale-105 shadow-[0_0_40px_12px_rgba(255,255,255,0.85)]" : ""
          }`}
        >
          <Image
            src="/assets/image/fpa-awards-certificates.webp"
            alt="Awards and Certificates: Best of Lexington 2024 Winner, NCQA Patient-Centered Medical Home Recognized Practice, NCQA Recognized Patient-Centered Medical Home"
            width={2000}
            height={442}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Explore Our Services */}
      <section
        onMouseEnter={() => setServicesSectionHovered(true)}
        onMouseLeave={() => setServicesSectionHovered(false)}
        className={`relative px-6 py-16 md:py-24 border-t border-border transition-all duration-300 ease-in-out ${
          servicesSectionHovered && hoveredService === null
            ? "scale-110 shadow-[0_0_60px_15px_rgba(255,255,255,0.85)]"
            : ""
        } ${
          servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ backgroundColor: "var(--brand-blue)" }}
      >
        <div className="max-w-6xl mx-auto">
          <RevealText as="h2" className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-10 text-center text-balance">
            Explore Our Services
          </RevealText>
          <div ref={servicesRef} className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
            <div
              className={`absolute inset-0 z-40 backdrop-blur-md pointer-events-none transition-opacity duration-150 ease-out ${
                hoveredService !== null ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden="true"
            />
            {HOME_SERVICES.map((s, index) => {
              const isHovered = hoveredService === index
              return (
                <div
                  key={s.label}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService((prev) => (prev === index ? null : prev))}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-500 ease-out ${
                    isHovered ? "z-50 scale-[1.2] shadow-[0_0_30px_var(--brand-blue)]" : ""
                  } ${
                    servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="relative w-full aspect-[2/3]">
                    <Image src={s.image} alt={s.label} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <Button
                      asChild
                      size="lg"
                      className="w-full whitespace-normal text-center leading-snug transition-all duration-200 hover:shadow-[0_0_18px_var(--brand-blue)]"
                    >
                      <Link href={s.href}>{s.label}</Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about-us" ref={aboutUsRef} className="scroll-mt-24 px-6 py-16 md:py-24" style={{ backgroundColor: "var(--brand-blue)" }}>
        <div className="relative -mx-6 h-[calc(100vw*0.6608)] mb-8 overflow-hidden">
          <div
            className={`absolute inset-0 origin-top transition-transform duration-500 ease-in-out ${
              aboutUsVisible ? "scale-y-100" : "scale-y-0"
            }`}
          >
            <Image
              src="/assets/image/fpa-providers-group.webp"
              alt="Family Practice Associates of Lexington provider team"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <Reveal delay={500} className="max-w-3xl mx-auto bg-background p-8 sm:p-10 md:p-14">
          <RevealText as="h2" className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-8 text-balance">
            About Us
          </RevealText>
          <RevealText as="h3" className="font-extrabold text-foreground mb-2">Our Mission:</RevealText>
          <RevealText as="p" className="text-muted-foreground leading-relaxed mb-8">
            Serving Central Kentucky for over 40 years, Family Practice Associates of Lexington&mdash;our
            mission is simple: to provide preventive, diagnostic, and therapeutic health services with
            attention to individual needs. We are dedicated to delivering family-centered care from birth
            through the later years in an affordable, high-quality manner.{" "}
            <span className="font-bold text-foreground">Your Family. Your Health. Our Passion.</span>
          </RevealText>
          <RevealText as="h3" className="font-extrabold text-foreground mb-2">Our Practice:</RevealText>
          <RevealText as="p" className="text-muted-foreground leading-relaxed mb-6">
            Family Practice Associates of Lexington (FPA) was founded by Dr. Jeffrey Foxx in 1983 and has
            since become one of the largest family practice groups in Central Kentucky. With over 20 primary
            care providers, including physicians, nurse practitioners, physician assistants, and a Licensed
            Professional Clinical Counselor, FPA is dedicated to providing family-centered care from birth to
            later years. Recognized as a Patient-Centered Medical Home (PCMH) by the National Commission on
            Quality Assurance, FPA&apos;s professionally trained staff ensures award-winning care.
          </RevealText>
          <RevealText as="p" className="text-muted-foreground leading-relaxed mb-6">
            The PCMH model emphasizes accessibility, continuity, and comprehensive care, with patients
            actively involved in decision-making. FPA&apos;s patient care teams, under the direction of the
            primary care provider (PCP), collectively take responsibility for ongoing patient care. Through
            integration with health information technology, including a patient portal and electronic health
            records (EHR), FPA enhances patient care, communication, and education. By offering extended
            hours and same-day scheduling, FPA aims to provide ultimate convenience to simplify managing your
            health.
          </RevealText>
          <RevealText as="p" className="text-muted-foreground leading-relaxed mb-4">
            Click here to discover why understanding what it means to be a Patient Center Medical Home is
            important for you:
          </RevealText>
          <Button asChild variant="outline">
            <Link
              href="https://cdn.hibuwebsites.com/7e29e1036607439698f5a108b9fc30dd/files/uploaded/FAP-What-+is-PCMH-Patient-Brochure-revised+9.16.2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More about PCMH
            </Link>
          </Button>
        </Reveal>
      </section>

      {/* About Our Providers */}
      <section
        id="about-our-providers"
        ref={providersRef}
        className="scroll-mt-24 py-16 md:py-24 border-t border-border text-center relative overflow-hidden"
      >
        <div
          className={`hidden lg:block absolute left-0 top-0 bottom-0 w-[16%] xl:w-[18%] transition-all duration-700 ease-out ${
            providersImagesVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <Image src="/assets/image/fpa-provider-side-1.webp" alt="" fill className="object-cover" />
        </div>
        <div
          className={`hidden lg:block absolute right-0 top-0 bottom-0 w-[16%] xl:w-[18%] transition-all duration-700 ease-out ${
            providersImagesVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <Image src="/assets/image/fpa-provider-side-2.webp" alt="" fill className="object-cover" />
        </div>

        <div className="lg:px-[17%] xl:px-[19%]">
          <div style={{ backgroundColor: "var(--brand-blue)" }}>
            <Reveal className="relative max-w-3xl mx-auto bg-background p-8 sm:p-10 md:p-14 overflow-hidden">
              {/* Halo glow framing the text from the outside, same crescent motif as the hero */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 z-0 w-24 md:w-36 opacity-70"
              >
                <svg viewBox="0 0 200 600" preserveAspectRatio="none" className="h-full w-full blur-lg">
                  <defs>
                    <linearGradient id="providersGlowLeft" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="1" />
                      <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#providersGlowLeft)" d="M170,0 C20,80 20,520 170,600 C100,520 100,80 170,0 Z" />
                </svg>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 z-0 w-24 md:w-36 opacity-70"
              >
                <svg viewBox="0 0 200 600" preserveAspectRatio="none" className="h-full w-full blur-lg">
                  <defs>
                    <linearGradient id="providersGlowRight" x1="1" y1="0" x2="0" y2="0">
                      <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="1" />
                      <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#providersGlowRight)" d="M30,0 C180,80 180,520 30,600 C100,520 100,80 30,0 Z" />
                </svg>
              </div>

              <div className="relative z-10">
                <RevealText as="h2" className="text-[2.344rem] md:text-[2.813rem] font-extrabold tracking-tight text-foreground mb-6 text-balance">
                  About Our Providers
                </RevealText>
                <RevealText as="p" className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Meet the dedicated team of healthcare professionals at Family Practice Associates of Lexington.
                  Our board-certified providers are committed to providing compassionate, personalized care for
                  you and your family.
                </RevealText>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]"
                >
                  <Link href="/about/our-providers">See Providers</Link>
                </Button>

                <div className="my-10 md:my-14" />

                <RevealText as="h3" className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mb-4 text-balance">
                  Book with the Provider of Your Choice
                </RevealText>
                <RevealText as="p" className="text-muted-foreground leading-relaxed mb-8">
                  Not sure who to see yet? Take a look at our full team of physicians, nurse practitioners, and
                  behavioral health providers to find the right fit for you and your family.
                </RevealText>
                <Button
                  asChild
                  size="lg"
                  className="transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]"
                >
                  <Link href="/book">Book Now</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Newsletter Signup & Socials */}
      <section id="newsletter-socials" className="w-full border-t-4 border-[var(--brand-blue)] scroll-mt-20">
        <div className="relative w-full py-16 md:py-20 px-6 flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out hover:scale-125 hover:z-20 hover:shadow-[0_0_40px_12px_rgba(255,255,255,0.85)]">
          <Image
            src="/assets/image/fpa-newsletter-bg.webp"
            alt=""
            aria-hidden="true"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "var(--brand-blue)", opacity: 0.45 }} />
          <Reveal className="relative">
            <Button asChild size="lg" variant="secondary" className="bg-white text-[var(--brand-blue)] hover:bg-white/90 h-auto py-5 px-10 text-lg">
              <Link href="#">Sign Up for Our Newsletter</Link>
            </Button>
          </Reveal>
        </div>

        <div className="relative py-16 md:py-20 px-6 text-center transition-all duration-300 ease-in-out hover:scale-125 hover:z-20 hover:shadow-[0_0_40px_12px_rgba(255,255,255,0.85)]">
          <Reveal>
            <RevealText as="h3" className="text-xl font-extrabold uppercase tracking-wide text-foreground mb-6">
              Our Socials
            </RevealText>
          </Reveal>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="https://www.facebook.com/FPALexington/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center size-12 rounded-full bg-[#1877F2] text-white transition-all duration-200 hover:scale-[1.2] hover:shadow-[0_0_20px_#1877F2]"
            >
              <Facebook className="size-6" fill="currentColor" />
            </Link>
            <Link
              href="https://www.instagram.com/fpa_lexington/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center size-12 rounded-full text-white transition-all duration-200 hover:scale-[1.2] hover:shadow-[0_0_16px_#f9ce34,0_0_24px_#ee2a7b,0_0_32px_#6228d7]"
              style={{ background: "linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)" }}
            >
              <Instagram className="size-6" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCUKnBm_TxilL_kEARbmIe3Q"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex items-center justify-center size-12 rounded-full bg-[#FF0000] text-white transition-all duration-200 hover:scale-[1.2] hover:shadow-[0_0_20px_#FF0000]"
            >
              <svg viewBox="0 0 24 24" className="size-6">
                <path
                  fill="white"
                  d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
                />
                <path fill="#FF0000" d="m10 15 5-3-5-3z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/company/family-practice-associates-of-lexington"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center size-12 rounded-full bg-[#0A66C2] text-white transition-all duration-200 hover:scale-[1.2] hover:shadow-[0_0_20px_#0A66C2]"
            >
              <Linkedin className="size-6" fill="currentColor" />
            </Link>
            <Link
              href="#"
              aria-label="Articles"
              className="flex items-center justify-center size-12 rounded-full bg-[var(--brand-blue)] text-white transition-all duration-200 hover:scale-[1.2] hover:shadow-[0_0_20px_var(--brand-blue)]"
            >
              <Newspaper className="size-6" />
            </Link>
          </div>
        </div>
      </section>

      <LocationsHoursSection />

      <SiteFooter />
    </main>
  )
}
