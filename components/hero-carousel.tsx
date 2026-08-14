"use client"

import React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export type HeroCarouselImage = {
  src: string
  alt: string
}

export function HeroCarousel({
  images,
  intervalMs = 9000,
}: {
  images: HeroCarouselImage[]
  intervalMs?: number
}) {
  const [index, setIndex] = React.useState(0)
  const timerRef = React.useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = React.useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (images.length <= 1) return
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, intervalMs)
  }, [images.length, intervalMs])

  React.useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [startTimer])

  const goTo = (i: number) => {
    setIndex(((i % images.length) + images.length) % images.length)
    startTimer()
  }

  return (
    <>
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center size-9 rounded-full bg-black/30 text-white transition-colors hover:bg-black/50"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center size-9 rounded-full bg-black/30 text-white transition-colors hover:bg-black/50"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </>
  )
}
