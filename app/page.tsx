"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Zap, BarChart3, MessageCircle, Menu, X, ChevronDown } from "lucide-react"
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
            <Link href="#" className="flex items-center gap-1 hover:text-foreground transition-colors">
              About FPA <ChevronDown className="h-3.5 w-3.5" />
            </Link>
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
            <Button onClick={openChatWidget} variant="outline" size="sm" className="text-sm bg-transparent hidden sm:flex">
              <MessageCircle className="h-4 w-4 mr-1.5" />
              Open Chat
            </Button>
            <Button onClick={openChatWidget} variant="outline" size="sm" className="bg-transparent sm:hidden" aria-label="Open chat">
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

      {/* Building Photo */}
      <div className="group relative w-full h-[35vh] hover:h-[calc(100vw*0.458)] bg-background overflow-hidden transition-[height] duration-500 ease-in-out">
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
          className="object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
          priority
        />
      </div>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 text-balance">
            Family Practice Associates
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            Serving Central Kentucky for over 40 Years
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="px-6">
              <Link href="#">Book Today</Link>
            </Button>
           
          </div>
        </div>

        {/* Features Grid */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
          <FeatureCard
            icon={<BookOpen className="w-5 h-5" />}
            title="Train on Your Data"
            description="Docs, FAQs, and links"
          />
          <FeatureCard
            icon={<Users className="w-5 h-5" />}
            title="Human Handoff"
            description="Smooth escalation when needed"
          />
          <FeatureCard
            icon={<Zap className="w-5 h-5" />}
            title="Custom AI Actions"
            description="Collect leads, book meetings"
          />
          <FeatureCard
            icon={<BarChart3 className="w-5 h-5" />}
            title="Analytics & History"
            description="Review and improve performance"
          />
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

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-card p-6 flex flex-col gap-3">
      <div className="text-muted-foreground">{icon}</div>
      <h3 className="font-extrabold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
