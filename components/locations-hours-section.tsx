import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { RevealText } from "@/components/reveal-text"

export function LocationsHoursSection() {
  return (
    <section id="locations" className="w-full scroll-mt-24 py-16 md:py-20 px-6" style={{ backgroundColor: "var(--brand-blue)" }}>
      <Reveal className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <RevealText as="h3" className="text-[1.563rem] font-extrabold uppercase tracking-wide text-white mb-3">
            Hamburg Pavilion, Lexington
          </RevealText>
          <div className="w-10 border-t-2 border-white/60 mb-4" />
          <RevealText as="p" className="text-xl text-white leading-relaxed mb-2">
            1775 Alysheba Way, Suite 201
            <br />
            Lexington, KY 40509
          </RevealText>
          <RevealText as="p" className="text-xl font-bold text-white mb-6">(859) 278-5007</RevealText>
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
          <RevealText as="h3" className="text-[1.563rem] font-extrabold uppercase tracking-wide text-white mb-3">
            Brannon Crossing, Nicholasville
          </RevealText>
          <div className="w-10 border-t-2 border-white/60 mb-4" />
          <RevealText as="p" className="text-xl text-white leading-relaxed mb-2">
            615 East Brannon Road
            <br />
            Nicholasville, KY 40356
          </RevealText>
          <RevealText as="p" className="text-xl font-bold text-white mb-6">(859) 278-5007</RevealText>
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
          <RevealText as="h3" className="text-[1.563rem] font-extrabold uppercase tracking-wide text-white mb-3">
            Business Hours
          </RevealText>
          <div className="w-10 border-t-2 border-white/60 mb-4" />
          <RevealText as="p" className="text-xl text-white leading-relaxed">
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
          </RevealText>
          <RevealText as="p" className="text-xl font-bold text-white mt-4">
            Evening hours available at both locations.
            <br />
            Call to schedule.
          </RevealText>
        </div>
      </Reveal>
    </section>
  )
}
