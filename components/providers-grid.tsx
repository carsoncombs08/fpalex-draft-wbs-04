"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export type Provider = {
  name: string
  image: string
}

export const MD_PROVIDERS: Provider[] = [
  { name: "Keith Applegate, MD, FAAFP", image: "/assets/image/providers/keith-applegate.webp" },
  { name: "Rajeana Conway, MD", image: "/assets/image/providers/rajeana-conway.webp" },
  { name: "Aletia Farmer, MD", image: "/assets/image/providers/aletia-farmer.webp" },
  { name: "Amanda Foxx, MD", image: "/assets/image/providers/amanda-foxx.webp" },
  { name: "Joseph Gerhardstein, MD, FAAFP", image: "/assets/image/providers/joseph-gerhardstein.webp" },
  { name: "Mary Henkel, MD", image: "/assets/image/providers/mary-henkel.webp" },
  { name: "Susan Monohan, MD", image: "/assets/image/providers/susan-monohan.webp" },
  { name: "John Ressor, MD", image: "/assets/image/providers/john-ressor.webp" },
  { name: "Ashley Rollins, MD", image: "/assets/image/providers/ashley-rollins.webp" },
  { name: "James Rossi, MD", image: "/assets/image/providers/james-rossi.webp" },
  { name: "Hasanki Warnakula, MD", image: "/assets/image/providers/hasanki-warnakula.webp" },
]

export const NP_PA_PROVIDERS: Provider[] = [
  { name: "Lindsey Clickner, APRN", image: "/assets/image/providers/lindsey-clickner.webp" },
  { name: "Samantha Criswell, APRN", image: "/assets/image/providers/samantha-criswell.webp" },
  { name: "Todd Greene, PA-C", image: "/assets/image/providers/todd-greene.webp" },
  { name: "Todd Martin, APRN", image: "/assets/image/providers/todd-martin.webp" },
  { name: "Mary Oaks, PA-C", image: "/assets/image/providers/mary-oaks.webp" },
  { name: "Meagan Obst, APRN", image: "/assets/image/providers/meagan-obst.webp" },
  { name: "Shelby Riggs, APRN", image: "/assets/image/providers/shelby-riggs.webp" },
  { name: "Amanda Shackleford, APRN", image: "/assets/image/providers/amanda-shackleford.webp" },
]

export const BEHAVIORAL_HEALTH_PROVIDERS: Provider[] = [
  { name: "Michael Bennett, LPCC", image: "/assets/image/providers/michael-bennett.webp" },
  { name: "Kristy Carter, APRN, PMHNP-BC", image: "/assets/image/providers/kristy-carter.webp" },
]

export function ProvidersGrid({ providers }: { providers: Provider[] }) {
  const [openItems, setOpenItems] = React.useState<Set<number>>(new Set())

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {providers.map((provider, index) => {
        const isOpen = openItems.has(index)
        return (
          <div key={provider.name} className="bg-muted p-3">
            <div className="relative w-full aspect-[448/279] overflow-hidden rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]">
              <Image src={provider.image} alt={provider.name} fill className="object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-extrabold" style={{ color: "var(--brand-blue)" }}>
              {provider.name}
            </h3>
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="mt-3 w-full flex items-center justify-between gap-3 bg-background px-4 py-3 text-left transition-colors hover:bg-accent"
            >
              <span className="text-lg font-extrabold" style={{ color: "var(--brand-blue)" }}>
                Learn More
              </span>
              <span
                className="flex items-center justify-center size-8 rounded-sm text-white shrink-0"
                style={{ backgroundColor: "var(--brand-blue)" }}
              >
                {isOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
              </span>
            </button>
            {isOpen && (
              <div className="pt-4 px-1">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ready to schedule a visit with {provider.name.split(",")[0]}? Contact our office or book an
                  appointment online.
                </p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/book">Book Appointment</Link>
                </Button>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
