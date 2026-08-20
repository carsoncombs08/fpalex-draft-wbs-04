"use client"

import React from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import Link from "next/link"
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, ArrowRight, X } from "lucide-react"

export type ServiceBlock =
  | { type: "p"; text: string; bold?: string }
  | { type: "list"; items: string[] }
  | { type: "heading"; text: string }

export type ServiceItem = {
  title: string
  image?: string
  description?: string
  listLabel?: string
  list?: string[]
  blocks?: ServiceBlock[]
  glow?: "green"
  href?: string
}

const PHONE_REGEX = /(\(?859\)?[-.\s]?278[-.\s]?5007)/g

function linkifyPhone(text: string): React.ReactNode {
  const parts = text.split(PHONE_REGEX)
  if (parts.length === 1) return text
  return parts.map((part, i) =>
    /^\(?859\)?[-.\s]?278[-.\s]?5007$/.test(part) ? (
      <a key={i} href="tel:+18592785007" className="hover:underline text-foreground">
        {part}
      </a>
    ) : (
      part
    ),
  )
}

function ServiceBody({ service }: { service: ServiceItem }) {
  if (service.blocks) {
    return (
      <>
        {service.blocks.map((block, i) => {
          if (block.type === "heading") {
            return (
              <p key={i} className="font-bold text-foreground mb-2">
                {linkifyPhone(block.text)}
              </p>
            )
          }
          if (block.type === "list") {
            return (
              <ul key={i} className="list-disc pl-5 mb-4 space-y-1 text-muted-foreground">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">
                    {linkifyPhone(item)}
                  </li>
                ))}
              </ul>
            )
          }
          return (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4">
              {block.bold && <span className="font-bold text-foreground">{block.bold} </span>}
              {linkifyPhone(block.text)}
            </p>
          )
        })}
      </>
    )
  }
  return (
    <>
      {service.description && (
        <p className="text-muted-foreground leading-relaxed mb-3">{linkifyPhone(service.description)}</p>
      )}
      {service.list && (
        <div className="mb-3">
          {service.listLabel && <p className="font-bold text-foreground mb-2">{service.listLabel}</p>}
          <ul className="space-y-1">
            {service.list.map((item) => (
              <li key={item} className="flex items-center gap-2 text-muted-foreground">
                <span className="size-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--brand-blue)" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export function ServiceAccordionGrid({ services }: { services: ServiceItem[] }) {
  // hoveredIndex anchors the popover's on-screen position to a grid tile.
  // activeIndex controls which service's content is shown, and moves
  // independently via the prev/next arrows so paging through services
  // doesn't relocate the popover out from under the cursor.
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)
  const [gridVisible, setGridVisible] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const gridRef = React.useRef<HTMLDivElement>(null)
  const cardRefs = React.useRef<(HTMLElement | null)[]>([])
  const popoverRef = React.useRef<HTMLDivElement | null>(null)
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const anchorRef = React.useRef<number | null>(null)
  const [pos, setPos] = React.useState<{ top: number; left: number } | null>(null)

  React.useEffect(() => setMounted(true), [])

  React.useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setGridVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const openIndex = (index: number) => {
    if (services[index].href) return
    clearCloseTimer()
    setHoveredIndex(index)
    setActiveIndex(index)
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimer.current = setTimeout(() => setHoveredIndex(null), 150)
  }

  const closeNow = () => {
    clearCloseTimer()
    setHoveredIndex(null)
  }

  // Steps to the next/previous service that isn't a plain link-out tile.
  const stepIndex = (from: number, dir: 1 | -1) => {
    let next = from
    for (let i = 0; i < services.length; i++) {
      next = (next + dir + services.length) % services.length
      if (!services[next].href) return next
    }
    return from
  }

  const goPrev = () => {
    clearCloseTimer()
    setActiveIndex((cur) => (cur === null ? null : stepIndex(cur, -1)))
  }

  const goNext = () => {
    clearCloseTimer()
    setActiveIndex((cur) => (cur === null ? null : stepIndex(cur, 1)))
  }

  React.useEffect(() => clearCloseTimer, [])

  // Anchors to the hovered tile only when it first opens. Paging through
  // services with the arrows keeps the previous position as the baseline
  // and only nudges it enough to keep the (possibly resized) popover
  // on-screen — jumping back to the tile's raw position on every content
  // size change would relocate the popover out from under the cursor and
  // re-trigger the underlying tile's hover.
  React.useLayoutEffect(() => {
    if (hoveredIndex === null) {
      anchorRef.current = null
      return
    }
    const popEl = popoverRef.current
    if (!popEl) return
    const popRect = popEl.getBoundingClientRect()
    const margin = 16

    let left: number
    let top: number
    if (anchorRef.current === hoveredIndex && pos) {
      left = pos.left
      top = pos.top
    } else {
      const cardEl = cardRefs.current[hoveredIndex]
      if (!cardEl) return
      const cardRect = cardEl.getBoundingClientRect()
      left = cardRect.left
      top = cardRect.top
    }
    anchorRef.current = hoveredIndex

    if (left + popRect.width > window.innerWidth - margin) {
      left = window.innerWidth - margin - popRect.width
    }
    if (left < margin) left = margin

    if (top + popRect.height > window.innerHeight - margin) {
      top = window.innerHeight - margin - popRect.height
    }
    if (top < margin) top = margin

    setPos({ top, left })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoveredIndex, activeIndex])

  const activeService = activeIndex !== null ? services[activeIndex] : null
  const isOpen = hoveredIndex !== null && pos !== null
  const isActiveGreen = activeService?.glow === "green"

  return (
    <div ref={gridRef} className="relative flex flex-wrap justify-center gap-6 mb-10 items-start">
      {services.map((service, index) => {
        const isGreen = service.glow === "green"
        const isCardActive = activeIndex === index
        const tileGlow = isGreen ? "shadow-[0_0_18px_#22c55e]" : ""
        const hoverGlow = isCardActive
          ? isGreen
            ? "scale-105 shadow-[0_0_18px_#22c55e,0_0_28px_8px_var(--brand-blue)]"
            : "scale-105 shadow-[0_0_28px_8px_var(--brand-blue)]"
          : ""
        const cardClassName = `relative w-full md:w-[calc(33.333%-1rem)] rounded-2xl border-2 border-black bg-muted overflow-hidden cursor-pointer transition-all duration-300 ease-out ${tileGlow} ${hoverGlow} ${
          gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`
        const cardStyle = { transitionDelay: isCardActive ? "0ms" : `${index * 80}ms` }
        const imageBlock = service.image && (
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image src={service.image} alt={service.title} fill className="object-cover" />
          </div>
        )

        if (service.href) {
          return (
            <Link
              key={service.title}
              href={service.href}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex((prev) => (prev === index ? null : prev))}
              className={`${cardClassName} block`}
              style={cardStyle}
            >
              {imageBlock}
              <div className="w-full flex items-start justify-between gap-4 bg-muted px-6 py-5 text-left">
                <span className="text-xl md:text-2xl font-extrabold text-foreground">{service.title}</span>
                <span className="flex items-center justify-center size-11 rounded-full bg-black text-white shrink-0">
                  <ArrowRight className="size-5" />
                </span>
              </div>
            </Link>
          )
        }

        return (
          <div
            key={service.title}
            ref={(el) => {
              cardRefs.current[index] = el
            }}
            onMouseEnter={() => openIndex(index)}
            onMouseLeave={scheduleClose}
            onClick={() => openIndex(index)}
            className={cardClassName}
            style={cardStyle}
          >
            {imageBlock}
            <div className="w-full flex items-start justify-between gap-4 bg-muted px-6 py-5 text-left">
              <span className="text-xl md:text-2xl font-extrabold text-foreground">{service.title}</span>
              <span className="flex items-center justify-center size-11 rounded-full bg-black text-white shrink-0">
                {isCardActive ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
              </span>
            </div>
          </div>
        )
      })}

      {mounted &&
        createPortal(
          <>
            <div
              aria-hidden="true"
              className={`fixed inset-0 z-40 bg-black/70 pointer-events-none transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />
            <div
              ref={popoverRef}
              style={{ top: pos?.top ?? -9999, left: pos?.left ?? -9999 }}
              className={`fixed z-50 flex w-[min(94vw,760px)] flex-col overflow-hidden rounded-xl border-2 bg-background transition-all duration-300 sm:flex-row ${
                isActiveGreen ? "border-[#22c55e]" : "border-[var(--brand-blue)]"
              } ${
                isOpen
                  ? `opacity-100 scale-100 pointer-events-auto ${
                      isActiveGreen
                        ? "shadow-[0_0_18px_#22c55e,0_0_40px_12px_var(--brand-blue)]"
                        : "shadow-[0_0_40px_12px_var(--brand-blue)]"
                    }`
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
              onMouseEnter={clearCloseTimer}
              onMouseLeave={scheduleClose}
            >
              {activeService && (
                <>
                  {activeService.image && (
                    <div className="relative w-full shrink-0 self-start aspect-[16/9] overflow-hidden sm:w-64">
                      <Image src={activeService.image} alt={activeService.title} fill className="object-cover" />
                      <button
                        type="button"
                        aria-label="Close"
                        onClick={(e) => {
                          e.stopPropagation()
                          closeNow()
                        }}
                        className="absolute top-2 right-2 z-10 flex items-center justify-center size-8 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                      >
                        <X className="size-4" />
                      </button>
                      {services.length > 1 && (
                        <>
                          <button
                            type="button"
                            aria-label="Previous service"
                            onClick={(e) => {
                              e.stopPropagation()
                              goPrev()
                            }}
                            className="absolute left-2 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center size-9 rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
                          >
                            <ChevronLeft className="size-5" />
                          </button>
                          <button
                            type="button"
                            aria-label="Next service"
                            onClick={(e) => {
                              e.stopPropagation()
                              goNext()
                            }}
                            className="absolute right-2 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center size-9 rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
                          >
                            <ChevronRight className="size-5" />
                          </button>
                        </>
                      )}
                    </div>
                  )}
                  <div className="max-h-[80vh] overflow-y-auto p-4 sm:p-5">
                    <h3 className="text-lg font-extrabold mb-2 text-foreground">{activeService.title}</h3>
                    <ServiceBody service={activeService} />
                  </div>
                </>
              )}
            </div>
          </>,
          document.body,
        )}
    </div>
  )
}
