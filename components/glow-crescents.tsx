import React from "react"

const LAYERS = [
  { suffix: "", inset: "-inset-x-24 sm:-inset-x-36 md:-inset-x-48", opacity: "opacity-[0.8]" },
  { suffix: "Outer", inset: "-inset-x-36 sm:-inset-x-52 md:-inset-x-72", opacity: "opacity-40" },
  { suffix: "Outermost", inset: "-inset-x-48 sm:-inset-x-68 md:-inset-x-96", opacity: "opacity-20" },
]

// The blue parenthesis-shaped glow "halo rings", "(  )", used behind the hero heading.
export function GlowCrescents({ idPrefix, fadeClassName = "" }: { idPrefix: string; fadeClassName?: string }) {
  return (
    <>
      {LAYERS.map((layer) => (
        <div
          key={layer.suffix}
          aria-hidden="true"
          className={`pointer-events-none absolute ${layer.inset} -top-20 md:-top-28 bottom-24 -z-10 flex items-center justify-between ${layer.opacity} transition-opacity duration-500 ease-in-out ${fadeClassName}`}
        >
          <svg viewBox="0 0 200 600" preserveAspectRatio="none" className="h-full w-48 sm:w-64 md:w-80 blur-lg">
            <defs>
              <linearGradient id={`${idPrefix}glowFadeLeft${layer.suffix}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="1" />
                <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path fill={`url(#${idPrefix}glowFadeLeft${layer.suffix})`} d="M170,0 C20,80 20,520 170,600 C100,520 100,80 170,0 Z" />
          </svg>
          <svg viewBox="0 0 200 600" preserveAspectRatio="none" className="h-full w-48 sm:w-64 md:w-80 blur-lg">
            <defs>
              <linearGradient id={`${idPrefix}glowFadeRight${layer.suffix}`} x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="1" />
                <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path fill={`url(#${idPrefix}glowFadeRight${layer.suffix})`} d="M30,0 C180,80 180,520 30,600 C100,520 100,80 30,0 Z" />
          </svg>
        </div>
      ))}
    </>
  )
}
