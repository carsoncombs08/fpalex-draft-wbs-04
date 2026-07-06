import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Family Practice Associates of Lexington",
  description:
    "Contact Family Practice Associates of Lexington: send us a message, get directions to our locations, or find our phone, fax, and hours.",
}

export default function ContactUsPage() {
  return (
    <main className="min-h-[100dvh] flex flex-col">
      <SiteHeader activePage="other" />

      <section className="px-6 py-12 md:py-16 flex-1">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />

          <div>
            <h3 className="text-xl font-extrabold text-foreground mb-1">Family Practice Associates of Lexington</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              1775 Alysheba Way
              <br />
              Suite 201
              <br />
              Lexington, KY 40509
            </p>
            <Button asChild size="lg" className="mb-10">
              <Link
                href="https://www.google.com/maps/search/?api=1&query=1775+Alysheba+Way+Suite+201+Lexington+KY+40509"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </Link>
            </Button>

            <h3 className="text-xl font-extrabold uppercase text-foreground mb-1">Brannon Crossing, Nicholasville</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              615 East Brannon Road
              <br />
              Nicholasville, KY 40356
            </p>
            <Button asChild size="lg" className="mb-10">
              <Link
                href="https://www.google.com/maps/search/?api=1&query=615+East+Brannon+Road+Nicholasville+KY+40356"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </Link>
            </Button>

            <hr className="border-dotted border-t-2 border-border mb-6" />

            <p className="text-muted-foreground leading-relaxed mb-4">
              Alysheba Way (Hamburg Pavilion): Open Monday&ndash;Friday, 8:00 AM &ndash; 5:00 PM, and Saturday,
              9:00 AM &ndash; 1:00 PM.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Brannon Crossing: Open Monday&ndash;Friday, 8:00 AM &ndash; 5:00 PM. Evening hours available. Call
              to schedule.
            </p>

            <h3 className="font-extrabold text-foreground mb-2">Holiday Hours</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-4">
              <li>Saturday, July 4, 2026: Closed</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Evening appointments available. Call to schedule. Saturdays are for acute visits only. Our phones
              are open from 8:00 AM to 12:30 PM on Saturdays to schedule those appointments.
            </p>

            <hr className="border-dotted border-t-2 border-border mb-6" />

            <p className="font-bold text-foreground mb-1">
              Main Phone: <a href="tel:+18592785007" className="font-normal text-muted-foreground">(859) 278-5007</a>
            </p>
            <p className="font-bold text-foreground mb-6">
              Fax: <span className="font-normal text-muted-foreground">(859) 278-6867</span>
            </p>

            <hr className="border-dotted border-t-2 border-border mb-6" />

            <a href="mailto:askfpa@fpalex.com" className="text-muted-foreground hover:underline mb-6 block">
              askfpa@fpalex.com
            </a>

            <hr className="border-dotted border-t-2 border-border mb-6" />

            <h3 className="font-extrabold text-foreground mb-2">Payment Methods</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-8 space-y-1">
              <li>American Express</li>
              <li>Cash</li>
              <li>Check</li>
              <li>Discover</li>
              <li>MasterCard</li>
              <li>Visa</li>
            </ul>

            <div className="flex items-center gap-5">
              <Link href="https://www.facebook.com/FPALexington/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="size-6 text-foreground hover:opacity-70 transition-opacity" />
              </Link>
              <Link href="https://www.instagram.com/fpa_lexington/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="size-6 text-foreground hover:opacity-70 transition-opacity" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCUKnBm_TxilL_kEARbmIe3Q"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube className="size-6 text-foreground hover:opacity-70 transition-opacity" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/family-practice-associates-of-lexington"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-6 text-foreground hover:opacity-70 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
