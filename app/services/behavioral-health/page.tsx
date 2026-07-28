import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Behavioral Health | Family Practice Associates of Lexington",
  description: "Behavioral health services in Central Kentucky from Family Practice Associates of Lexington, including Grief Group Therapy.",
}

export default function BehavioralHealthPage() {
  return (
    <main className="min-h-[100dvh] flex flex-col">
      <SiteHeader activePage="other" />

      {/* Hero */}
      <section className="relative">
        <Image
          src="/assets/image/fpa-behavioral-health-hero.webp"
          alt="Behavioral Health"
          width={2000}
          height={759}
          className="w-full h-auto"
          priority
        />
        <h1 className="sr-only">Behavioral Health</h1>
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
          <li style={{ color: "var(--brand-blue)" }}>Behavioral Health</li>
        </ol>
      </nav>

      {/* Content */}
      <section className="px-6 py-8 md:py-12 flex-1">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-balance" style={{ color: "var(--brand-blue)" }}>
            Grief Group Therapy
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            FPA is offering a group therapy experience for anyone navigating grief after the loss of a loved
            one. As part of our commitment to whole-person care, our clinical therapist is now leading a
            skill-building group for adults who are coping with loss. This 6-session, once-per-month group
            will meet at our Brannon Crossing location.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our grief group provides a compassionate space to explore the complex emotions of grief, while
            offering practical coping strategies and the healing power of community support. Whether your
            grief is recent or something you&apos;ve carried for years, all are welcome. Pre-registration is
            required, as group size is limited to ensure personalized care.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">Learn more below.</p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            <span className="font-bold text-foreground">Details:</span>
            <br />
            6 classes for a one-time payment of $360. If you are unable to attend a session, you will receive
            the materials covered in the group via email.
          </p>

          <ContactForm
            heading="Register or Request More Information on Grief Group Therapy:"
            subheading="Please fill out this short form and we'll contact you shortly."
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
