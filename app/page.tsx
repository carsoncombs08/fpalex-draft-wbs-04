"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Newspaper } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LocationsHoursSection } from "@/components/locations-hours-section"
import { MD_PROVIDERS, ProvidersGrid } from "@/components/providers-grid"

export default function Home() {
  return (
    <main className="min-h-[100dvh] flex flex-col">
      <SiteHeader activePage="home" />

      {/* Building Photo + Hero (grouped so hovering the photo also fades the glow below) */}
      <div className="group/hero">
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

        {/* Hero Section */}
        <section className="relative flex-1 flex flex-col items-center justify-center px-6 py-16 md:py-24">
          <div className="relative max-w-4xl mx-auto text-center">
            {/* Blue glow — a pair of parenthesis-shaped crescents, "(  )", fading in from their thick outer edge across the page */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-24 sm:-inset-x-36 md:-inset-x-48 -top-20 md:-top-28 bottom-24 -z-10 flex items-center justify-between opacity-[0.8] transition-opacity duration-500 ease-in-out group-hover/hero:opacity-0"
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
              className="pointer-events-none absolute -inset-x-36 sm:-inset-x-52 md:-inset-x-72 -top-20 md:-top-28 bottom-24 -z-10 flex items-center justify-between opacity-40 transition-opacity duration-500 ease-in-out group-hover/hero:opacity-0"
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
              className="pointer-events-none absolute -inset-x-48 sm:-inset-x-68 md:-inset-x-96 -top-20 md:-top-28 bottom-24 -z-10 flex items-center justify-between opacity-20 transition-opacity duration-500 ease-in-out group-hover/hero:opacity-0"
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

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 text-balance">
              Family Practice Associates
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
              Serving Central Kentucky for over 40 Years
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button asChild size="lg" className="px-6 transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]">
                <Link href="/book">Book Today</Link>
              </Button>

            </div>
          </div>

          <div id="quick-links" className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 scroll-mt-24">
            <Button asChild size="lg" className="w-4/5 mx-auto min-h-12 h-auto py-3 whitespace-normal text-center leading-snug transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]">
              <Link href="https://z3-ppw.phreesia.net/z3/patient/Payment.aspx/IdentifyPatient" target="_blank" rel="noopener noreferrer">
                Make A Payment
              </Link>
            </Button>
            <Button asChild size="lg" className="w-4/5 mx-auto min-h-12 h-auto py-3 whitespace-normal text-center leading-snug transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]">
              <Link href="/patient-portal">Patient Portal</Link>
            </Button>
            <Button asChild size="lg" className="w-4/5 mx-auto min-h-12 h-auto py-3 whitespace-normal text-center leading-snug transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]">
              <Link href="#">Patient Forms and Records Request</Link>
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
      </div>

      {/* Awards and Certificates */}
      <section className="w-full">
        <Image
          src="/assets/image/fpa-awards-certificates.webp"
          alt="Awards and Certificates: Best of Lexington 2024 Winner, NCQA Patient-Centered Medical Home Recognized Practice, NCQA Recognized Patient-Centered Medical Home"
          width={2000}
          height={442}
          className="w-full h-auto"
        />
      </section>

      {/* About Us */}
      <section id="about-us" className="scroll-mt-24 px-6 py-16 md:py-24 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-8 text-balance">
            About Us
          </h2>
          <h3 className="font-extrabold text-foreground mb-2">Our Mission:</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Serving Central Kentucky for over 40 years, Family Practice Associates of Lexington&mdash;our
            mission is simple: to provide preventive, diagnostic, and therapeutic health services with
            attention to individual needs. We are dedicated to delivering family-centered care from birth
            through the later years in an affordable, high-quality manner.{" "}
            <span className="font-bold text-foreground">Your Family. Your Health. Our Passion.</span>
          </p>
          <h3 className="font-extrabold text-foreground mb-2">Our Practice:</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Family Practice Associates of Lexington (FPA) was founded by Dr. Jeffrey Foxx in 1983 and has
            since become one of the largest family practice groups in Central Kentucky. With over 20 primary
            care providers, including physicians, nurse practitioners, physician assistants, and a Licensed
            Professional Clinical Counselor, FPA is dedicated to providing family-centered care from birth to
            later years. Recognized as a Patient-Centered Medical Home (PCMH) by the National Commission on
            Quality Assurance, FPA&apos;s professionally trained staff ensures award-winning care.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The PCMH model emphasizes accessibility, continuity, and comprehensive care, with patients
            actively involved in decision-making. FPA&apos;s patient care teams, under the direction of the
            primary care provider (PCP), collectively take responsibility for ongoing patient care. Through
            integration with health information technology, including a patient portal and electronic health
            records (EHR), FPA enhances patient care, communication, and education. By offering extended
            hours and same-day scheduling, FPA aims to provide ultimate convenience to simplify managing your
            health.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Click here to discover why understanding what it means to be a Patient Center Medical Home is
            important for you:
          </p>
          <Button asChild variant="outline">
            <Link
              href="https://cdn.hibuwebsites.com/7e29e1036607439698f5a108b9fc30dd/files/uploaded/FAP-What-+is-PCMH-Patient-Brochure-revised+9.16.2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More about PCMH
            </Link>
          </Button>
        </div>
      </section>

      {/* About Our Providers */}
      <section id="about-our-providers" className="scroll-mt-24 py-16 md:py-24 border-t border-border text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-[2.344rem] md:text-[2.813rem] font-extrabold tracking-tight text-foreground mb-6 text-balance">
            About Our Providers
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Meet the dedicated team of healthcare professionals at Family Practice Associates of Lexington.
            Our board-certified providers are committed to providing compassionate, personalized care for
            you and your family.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-10 px-6 text-left">
          <ProvidersGrid providers={MD_PROVIDERS.slice(0, 4)} />
        </div>

        <div className="px-6 mt-6 flex justify-end">
          <Button asChild size="lg" className="mr-[8%]">
            <Link href="/about/our-providers">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Newsletter Signup & Socials */}
      <section id="newsletter-socials" className="w-full border-t-4 border-[var(--brand-blue)] scroll-mt-20">
        <div className="relative w-full py-16 md:py-20 px-6 flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/image/fpa-newsletter-bg.webp"
            alt=""
            aria-hidden="true"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "var(--brand-blue)", opacity: 0.45 }} />
          <Button asChild size="lg" variant="secondary" className="relative bg-white text-[var(--brand-blue)] hover:bg-white/90 h-auto py-5 px-10 text-lg">
            <Link href="#">Sign Up for Our Newsletter</Link>
          </Button>
        </div>

        <div className="py-16 md:py-20 px-6 text-center">
          <h3 className="text-xl font-extrabold uppercase tracking-wide text-foreground mb-6">
            Our Socials
          </h3>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="https://www.facebook.com/FPALexington/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center size-12 rounded-full bg-[#1877F2] text-white hover:opacity-90 transition-opacity"
            >
              <Facebook className="size-6" fill="currentColor" />
            </Link>
            <Link
              href="https://www.instagram.com/fpa_lexington/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center size-12 rounded-full text-white hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)" }}
            >
              <Instagram className="size-6" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCUKnBm_TxilL_kEARbmIe3Q"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex items-center justify-center size-12 rounded-full bg-[#FF0000] text-white hover:opacity-90 transition-opacity"
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
              className="flex items-center justify-center size-12 rounded-full bg-[#0A66C2] text-white hover:opacity-90 transition-opacity"
            >
              <Linkedin className="size-6" fill="currentColor" />
            </Link>
            <Link
              href="#"
              aria-label="Articles"
              className="flex items-center justify-center size-12 rounded-full bg-[var(--brand-blue)] text-white hover:opacity-90 transition-opacity"
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
