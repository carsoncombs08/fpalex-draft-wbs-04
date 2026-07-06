import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Primary Care | Family Practice Associates of Lexington",
  description:
    "Comprehensive primary care services in Central Kentucky, including annual physicals, chronic disease management, immunizations, and same-day sick visits.",
}

const SERVICES = [
  "Annual Physical Exams & Preventive Screenings",
  "Chronic Disease Management (diabetes, hypertension, asthma, and more)",
  "Immunizations & Vaccinations",
  "Same-Day Sick Visit Care",
  "Women's Health Services",
  "Pediatric & Adolescent Care",
  "Geriatric Care",
  "Behavioral & Mental Health Support",
]

export default function PrimaryCarePage() {
  return (
    <main className="min-h-[100dvh] flex flex-col">
      <SiteHeader activePage="other" />

      {/* Hero */}
      <section className="relative">
        <Image
          src="/assets/image/fpa-primary-care-hero.webp"
          alt="Primary Care"
          width={2000}
          height={784}
          className="w-full h-auto"
          priority
        />
        <h1 className="sr-only">Primary Care</h1>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-6 py-4">
        <ol className="max-w-4xl mx-auto flex items-center gap-2 text-sm">
          <li>
            <Link href="/" className="hover:underline" style={{ color: "var(--brand-blue)" }}>
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="size-4 text-muted-foreground" />
          </li>
          <li className="text-foreground">Our Services</li>
          <li>
            <ChevronRight className="size-4 text-muted-foreground" />
          </li>
          <li style={{ color: "var(--brand-blue)" }}>Primary Care</li>
        </ol>
      </nav>

      {/* Content */}
      <section className="px-6 py-8 md:py-12 flex-1">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-balance" style={{ color: "var(--brand-blue)" }}>
            Comprehensive Primary Care Services in Central Kentucky
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Family Practice Associates of Lexington offers a wide range of primary care services to meet the
            diverse health needs of Central Kentucky residents. Your first line of defense for optimal health
            and wellness. We offer:
          </p>
          <ul className="space-y-3 mb-10">
            {SERVICES.map((s) => (
              <li key={s} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                <span
                  className="mt-2 size-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: "var(--brand-blue)" }}
                />
                {s}
              </li>
            ))}
          </ul>
          <Button asChild size="lg">
            <Link href="/book">Book Today</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
