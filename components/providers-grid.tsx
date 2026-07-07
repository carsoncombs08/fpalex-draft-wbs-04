"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export type Provider = {
  name: string
  image: string
  bio?: string
}

export const MD_PROVIDERS: Provider[] = [
  {
    name: "Keith Applegate, MD, FAAFP",
    image: "/assets/image/providers/keith-applegate.webp",
    bio: "Dr. Applegate joined FPA in 1987 and is originally from Louisville, KY. He earned his medical degree at the University of Kentucky in 1984. He completed his residency at the University of Cincinnati and went on to complete his fellowship at the American Academy of Family Physicians in 1985. Dr. Applegate specializes in family medicine and can see patients of all ages.\n\nFor fun, Dr. Applegate enjoys bicycling, gardening, and traveling.",
  },
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
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  return (
    <>
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/70 pointer-events-none transition-opacity duration-300 ${
          hoveredIndex !== null ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {providers.map((provider, index) => {
          const isHovered = hoveredIndex === index
          return (
            <div
              key={provider.name}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex(index)}
            >
              <div className="relative w-full aspect-[448/279] overflow-hidden rounded-xl">
                <Image src={provider.image} alt={provider.name} fill className="object-cover" />
              </div>
              <h3 className="mt-3 text-lg font-extrabold" style={{ color: "var(--brand-blue)" }}>
                {provider.name}
              </h3>

              <div
                className={`absolute left-0 top-0 z-50 w-[85vw] max-w-[420px] origin-top-left transition-all duration-200 ${
                  isHovered ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="relative w-full aspect-[448/279] overflow-hidden rounded-xl shadow-2xl">
                  <Image src={provider.image} alt={provider.name} fill className="object-cover" />
                  <button
                    type="button"
                    aria-label="Close"
                    onClick={(e) => {
                      e.stopPropagation()
                      setHoveredIndex(null)
                    }}
                    className="absolute top-2 right-2 flex items-center justify-center size-8 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                  >
                    <X className="size-4" />
                  </button>
                </div>
                <div className="rounded-b-xl bg-white p-4 shadow-2xl">
                  <h3 className="text-lg font-extrabold mb-1" style={{ color: "var(--brand-blue)" }}>
                    {provider.name}
                  </h3>
                  <div className="max-h-[45vh] overflow-y-auto mb-3 pr-1">
                    {provider.bio ? (
                      provider.bio.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed text-sm mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        Ready to schedule a visit with {provider.name.split(",")[0]}? Contact our office or book an
                        appointment online.
                      </p>
                    )}
                  </div>
                  <Button asChild size="sm" className="w-full">
                    <Link href="/book">Book Appointment</Link>
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
