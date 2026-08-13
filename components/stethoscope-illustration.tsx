export function StethoscopeIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 640" fill="none" className={className} aria-hidden="true">
      {/* earpieces */}
      <path d="M58 24 L50 54" stroke="#1f2937" strokeWidth="18" strokeLinecap="round" />
      <path d="M126 24 L134 54" stroke="#1f2937" strokeWidth="18" strokeLinecap="round" />

      {/* tubes from earpieces down to the Y-junction */}
      <path
        d="M50 56 C 46 92, 55 105, 82 112"
        stroke="#a3a9b3"
        strokeWidth="15"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M134 56 C 138 92, 129 105, 102 112"
        stroke="#a3a9b3"
        strokeWidth="15"
        strokeLinecap="round"
        fill="none"
      />

      {/* main tube, loose flowing curves down to the chestpiece */}
      <path
        d="M92 112
           C 30 160, 30 260, 100 300
           C 175 344, 175 440, 105 490
           C 70 516, 60 545, 92 575
           C 112 594, 128 600, 140 605"
        stroke="var(--brand-blue)"
        strokeWidth="15"
        strokeLinecap="round"
        fill="none"
      />

      {/* chestpiece, tilted disc for a 3/4 perspective */}
      <ellipse cx="150" cy="610" rx="34" ry="24" fill="#a3a9b3" transform="rotate(-18 150 610)" />
      <ellipse cx="150" cy="610" rx="20" ry="13" fill="#6b7280" transform="rotate(-18 150 610)" />
      <circle cx="150" cy="610" r="4" fill="#e5e7eb" />
    </svg>
  )
}
