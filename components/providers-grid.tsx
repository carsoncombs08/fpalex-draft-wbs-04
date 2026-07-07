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
  {
    name: "Rajeana Conway, MD",
    image: "/assets/image/providers/rajeana-conway.webp",
    bio: "Originally from Maysville, KY, Dr. Conway joined FPA in 2018. Dr. Conway earned her medical degree from The University of Cincinnati College of Medicine in 2015 and completed her residency in internal medicine at The Christ Hospital in 2018. Her clinical interests include preventative medicine, management of chronic diseases, and primary care dermatology. Dr. Conway can see patients who are 18 years old and older.\n\nIn her free time, Dr. Conway enjoys spending time with her family, going to church, watching TV, crafting, and going to the lake.",
  },
  {
    name: "Aletia Farmer, MD",
    image: "/assets/image/providers/aletia-farmer.webp",
    bio: "Dr. Farmer joined FPA in 2021 and is a native of Lexington, KY. Dr. Farmer graduated from medical school at the University of Kentucky in 2005 and completed her residency in Internal Medicine in 2008. While at UK, she received numerous awards and recognitions, including Beale Primary Care Scholarship and Primary Care Resident Award. Dr. Farmer is trained in all aspects of internal medicine and its specialties, managing both acute and chronic conditions. Her clinical interests include Women's Health, preventative medicine, and chronic disease management. Dr. Farmer can see patients who are 18 years old and older.\n\nFor fun, Dr. Farmer enjoys boating, snow skiing, and gardening.",
  },
  {
    name: "Amanda Foxx, MD",
    image: "/assets/image/providers/amanda-foxx.webp",
    bio: "Dr. Foxx is originally from Lexington, KY, and joined FPA in 2015. Dr. Foxx attended medical school at the University of Kentucky and graduated in 2011. She went on to complete a dual residency in Internal Medicine and Pediatrics at UK in 2015, where she was Chief Resident. Dr. Amanda Foxx has a special interest in preventative care and women's health. She enjoys taking care of all patients from newborns to the elderly.\n\nDuring her free time, Dr. Foxx enjoys spending time with family, reading, playing piano, and going to the lake.",
  },
  {
    name: "Joseph Gerhardstein, MD, FAAFP",
    image: "/assets/image/providers/joseph-gerhardstein.webp",
    bio: "Dr. Gerhardstein joined FPA in 2003 and is originally from Fort Thomas, KY. He graduated from medical school at the University of Kentucky in 1987. He completed his residency at the University of Kentucky and went on to complete a fellowship at the American Academy of Family Physicians in 1999. Dr. Gerhardstein specializes in all aspects of family medicine for patients of all ages.",
  },
  {
    name: "Mary Henkel, MD",
    image: "/assets/image/providers/mary-henkel.webp",
    bio: "Originally from Ashland, KY, Dr. Henkel joined FPA in 1996. Dr. Henkel attended medical school at the University of Kentucky in 1992 and completed her internship in Internal Medicine and residency in Family Medicine at the University of Kentucky in 1995. Dr. Henkel specializes in all aspects of family medicine for patients 6 years old and older.\n\nDuring her free time, Dr. Henkel enjoys biking, Pilates, and skiing.",
  },
  {
    name: "Susan Monohan, MD",
    image: "/assets/image/providers/susan-monohan.webp",
    bio: "A native of Winchester, KY, Dr. Monohan has been with FPA since 2011. Dr. Monohan attended medical school at the University of Kentucky in 2000 and completed her residency at Indiana University in 2004. Dr. Monohan specializes in Internal Medicine and Pediatrics and can see patients of all ages.\n\nDr. Monohan resides in Lexington with her husband and her 3 children. Most of her free time is spent cheering on her children in their many sporting activities, including track, cross country, and gymnastics. Dr. Monohan's other hobbies include boating and watching UK sports.",
  },
  {
    name: "John Ressor, MD",
    image: "/assets/image/providers/john-ressor.webp",
    bio: "Dr. Reesor joined FPA in 2001 and is originally from Louisville, KY. He attended medical school at the University of Kentucky and completed his residency at the Memorial Medical Center in Savannah, GA. Dr. Reesor specializes in family medicine for patients who are 2 years old or older.\n\nFor fun, Dr. Reesor enjoys fishing and golfing.",
  },
  {
    name: "Ashley Rollins, MD",
    image: "/assets/image/providers/ashley-rollins.webp",
    bio: "Dr. Rollins joined FPA in 2018 and is originally from Lexington, KY. Dr. Rollins earned her medical degree from The University of Kentucky in 2014 and completed her residency in Internal Medicine at the University of Kentucky Hospital in 2018. Dr. Rollins specializes in Internal Medicine and Pediatrics. She also has an interest in women's health and preventative medicine. Dr. Rollins enjoys taking care of all patients, from newborns to the elderly.\n\nIn her free time, Dr. Rollins enjoys spending time with her family, skiing, camping, and going to the lake.",
  },
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
