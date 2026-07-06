"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Menu, X, ChevronDown, Facebook, Instagram, Linkedin, Newspaper } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import Link from "next/link"
import { openChatWidget } from "@/lib/chat-widget"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <main className="min-h-[100dvh] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Image
              src="/assets/image/fpa-logo.png"
              className="h-[2.7rem] sm:h-[3.3rem] w-auto"
              alt="Family Practice Associates of Lexington, P.S.C."
              width={1585}
              height={288}
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5 text-sm text-muted-foreground">
            <Link href="#" className="text-foreground border-b-2 border-primary pb-1">
              Home
            </Link>
            <div className="group relative">
              <Link href="#" className="flex items-center gap-1 hover:text-foreground transition-colors">
                About FPA <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-50">
                <div className="min-w-[160px] rounded-md border border-border bg-background py-2 shadow-md">
                  <Link href="#about-us" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                    About Us
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                    Our Providers
                  </Link>
                </div>
              </div>
            </div>
            <Link href="#" className="flex items-center gap-1 hover:text-foreground transition-colors">
              Our Services <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <Link href="#" className="flex items-center gap-1 hover:text-foreground transition-colors">
              Patient Resources <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Explore Our Content
            </Link>
            <Link href="#" className="flex items-center gap-1 hover:text-foreground transition-colors">
              Contact Us <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <Link href="#" className="flex items-center gap-1 hover:text-foreground transition-colors">
              Our Locations <ChevronDown className="h-3.5 w-3.5" />
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <Button onClick={openChatWidget} variant="outline" size="sm" className="text-sm bg-transparent text-black hidden sm:flex">
              <MessageCircle className="h-4 w-4 mr-1.5" />
              Open Chat
            </Button>
            <Button onClick={openChatWidget} variant="outline" size="sm" className="bg-transparent text-black sm:hidden" aria-label="Open chat">
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="flex flex-col px-4 py-3 space-y-3">
              <Link
                href="#"
                className="text-sm text-foreground py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About FPA <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="#about-us"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Providers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Services <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Patient Resources <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Explore Our Content
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Locations <ChevronDown className="h-3.5 w-3.5" />
              </Link>
            </nav>
          </div>
        )}
      </header>

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
              <Button asChild size="lg" className="px-6">
                <Link href="/book">Book Today</Link>
              </Button>

            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button asChild size="lg" className="w-4/5 mx-auto min-h-12 h-auto py-3 whitespace-normal text-center leading-snug">
              <Link href="#">Make A Payment</Link>
            </Button>
            <Button asChild size="lg" className="w-4/5 mx-auto min-h-12 h-auto py-3 whitespace-normal text-center leading-snug">
              <Link href="#">Patient Portal</Link>
            </Button>
            <Button asChild size="lg" className="w-4/5 mx-auto min-h-12 h-auto py-3 whitespace-normal text-center leading-snug">
              <Link href="#">Patient Forms and Records Request</Link>
            </Button>
            <Button asChild size="lg" className="w-4/5 mx-auto min-h-12 h-auto py-3 whitespace-normal text-center leading-snug">
              <Link href="#">Medical Cannabis Clinic</Link>
            </Button>
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

        <div className="w-full mt-10">
          <Image
            src="/assets/image/fpa-providers.webp"
            alt="Our providers: Keith Applegate, MD, FAAFP; Rajeana Conway, MD; Aletia Farmer, MD; Amanda Foxx, MD"
            width={2000}
            height={483}
            className="w-full h-auto"
          />
        </div>

        <div className="px-6 mt-6 flex justify-end">
          <Button asChild size="lg" className="mr-[8%]">
            <Link href="#">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Newsletter Signup & Socials */}
      <section className="w-full border-t-4 border-[var(--brand-blue)]">
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

      {/* Locations & Business Hours */}
      <section className="w-full py-16 md:py-20 px-6" style={{ backgroundColor: "var(--brand-blue)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-[1.563rem] font-extrabold uppercase tracking-wide text-white mb-3">
              Hamburg Pavilion, Lexington
            </h3>
            <div className="w-10 border-t-2 border-white/60 mb-4" />
            <p className="text-xl text-white leading-relaxed mb-2">
              1775 Alysheba Way, Suite 201
              <br />
              Lexington, KY 40509
            </p>
            <p className="text-xl font-bold text-white mb-6">(859) 278-5007</p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-[var(--brand-blue)] hover:bg-white/90">
              <Link
                href="https://www.google.com/maps/search/?api=1&query=1775+Alysheba+Way+Suite+201+Lexington+KY+40509"
                target="_blank"
                rel="noopener noreferrer"
              >
                Location Details
              </Link>
            </Button>
          </div>

          <div>
            <h3 className="text-[1.563rem] font-extrabold uppercase tracking-wide text-white mb-3">
              Brannon Crossing, Nicholasville
            </h3>
            <div className="w-10 border-t-2 border-white/60 mb-4" />
            <p className="text-xl text-white leading-relaxed mb-2">
              615 East Brannon Road
              <br />
              Nicholasville, KY 40356
            </p>
            <p className="text-xl font-bold text-white mb-6">(859) 278-5007</p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-[var(--brand-blue)] hover:bg-white/90">
              <Link
                href="https://www.google.com/maps/search/?api=1&query=615+East+Brannon+Road+Nicholasville+KY+40356"
                target="_blank"
                rel="noopener noreferrer"
              >
                Location Details
              </Link>
            </Button>
          </div>

          <div>
            <h3 className="text-[1.563rem] font-extrabold uppercase tracking-wide text-white mb-3">
              Business Hours
            </h3>
            <div className="w-10 border-t-2 border-white/60 mb-4" />
            <p className="text-xl text-white leading-relaxed">
              Monday 8:00 AM - 5:00 PM
              <br />
              Tuesday 8:00 AM - 5:00 PM
              <br />
              Wednesday 8:00 AM - 5:00 PM
              <br />
              Thursday 8:00 AM - 5:00 PM
              <br />
              Friday 8:00 AM - 5:00 PM
              <br />
              Saturday 9:00am-1:00pm at Hamburg for acute visits only
            </p>
            <p className="text-xl font-bold text-white mt-4">
              Evening hours available at both locations.
              <br />
              Call to schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link target="_blank" href="https://assistloop.ai/docs/integrations/vercel" className="hover:text-foreground transition-colors">
              Documentation
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link target="_blank" href="https://github.com/assistloop/nextjs-template" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </footer>
    </main>
  )
}
