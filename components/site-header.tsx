"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { openChatWidget } from "@/lib/chat-widget"

const SERVICES = [
  { href: "/services/primary-care", label: "Primary Care" },
  { href: "#", label: "Pediatric Care" },
  { href: "#", label: "Women's Health" },
  { href: "#", label: "Behavioral Health" },
]

export function SiteHeader({ activePage = "home" }: { activePage?: "home" | "other" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/assets/image/fpa-logo.png"
            className="h-[2.7rem] sm:h-[3.3rem] w-auto"
            alt="Family Practice Associates of Lexington, P.S.C."
            width={1585}
            height={288}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 text-sm text-muted-foreground">
          <Link
            href="/"
            className={activePage === "home" ? "text-foreground border-b-2 border-primary pb-1" : "hover:text-foreground transition-colors"}
          >
            Home
          </Link>
          <div className="group relative">
            <Link href="#" className="flex items-center gap-1 hover:text-foreground transition-colors">
              About FPA <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-50">
              <div className="min-w-[160px] rounded-md border border-border bg-background py-2 shadow-md">
                <Link href="/#about-us" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                  About Us
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                  Our Providers
                </Link>
              </div>
            </div>
          </div>
          <div className="group relative">
            <Link href="#" className="flex items-center gap-1 hover:text-foreground transition-colors">
              Our Services <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-50">
              <div className="min-w-[180px] rounded-md border border-border bg-background py-2 shadow-md">
                {SERVICES.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
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
            <Link href="/" className="text-sm text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
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
              href="/#about-us"
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
            {SERVICES.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {s.label}
              </Link>
            ))}
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
  )
}
