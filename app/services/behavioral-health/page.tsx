import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { BehavioralHealthServicesAccordion } from "@/components/behavioral-health-services-accordion"
import { Button } from "@/components/ui/button"
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
      <section className="relative group/photo w-full h-[35vh] hover:h-[calc(100vw*0.3795)] bg-background overflow-hidden transition-[height] duration-500 ease-in-out">
        <Image
          src="/assets/image/fpa-behavioral-health-hero.webp"
          alt="Behavioral Health"
          fill
          className="object-cover"
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
          <ContactForm
            heading="Register or Request More Information on Grief Group Therapy:"
            subheading="Please fill out this short form and we'll contact you shortly."
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-10 mb-4 text-balance" style={{ color: "var(--brand-blue)" }}>
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

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-balance" style={{ color: "var(--brand-blue)" }}>
            Behavioral Health: Compassionate Support for Mental and Emotional Well-Being
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At Family Practice Associates of Lexington, we offer a wide range of behavioral health services to
            support the mental well-being of our patients in Central Kentucky. Our experienced team provides
            personalized care for various emotional and psychological challenges. We understand that seeking
            help is a significant step, and we&apos;re here to guide you through your journey to better mental
            health.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <BehavioralHealthServicesAccordion />
        </div>
        <div className="max-w-4xl mx-auto mt-4 text-center">
          <Button
            asChild
            size="lg"
            className="px-6 transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]"
          >
            <Link href="/book">Book Today</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
