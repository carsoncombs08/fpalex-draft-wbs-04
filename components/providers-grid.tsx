"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

type Provider = {
  name: string
  image: string
}

const PROVIDERS: Provider[] = [
  { name: "Keith Applegate, MD, FAAFP", image: "/assets/image/providers/keith-applegate.webp" },
  { name: "Rajeana Conway, MD", image: "/assets/image/providers/rajeana-conway.webp" },
  { name: "Aletia Farmer, MD", image: "/assets/image/providers/aletia-farmer.webp" },
  { name: "Amanda Foxx, MD", image: "/assets/image/providers/amanda-foxx.webp" },
]

export function ProvidersGrid() {
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
      {PROVIDERS.map((provider, index) => {
        const isOpen = openItems.has(index)
        return (
          <div key={provider.name} className="bg-muted p-3">
            <div className="relative w-full aspect-[448/279] overflow-hidden">
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
