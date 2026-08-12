export function StethoscopeIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 620" fill="none" className={className} aria-hidden="true">
      {/* earpieces */}
      <path d="M62 22 L62 44" stroke="#111827" strokeWidth="16" strokeLinecap="round" />
      <path d="M138 22 L138 44" stroke="#111827" strokeWidth="16" strokeLinecap="round" />

      {/* tubes from earpieces down to the Y-junction */}
      <path
        d="M62 46 C 62 90, 70 96, 90 100"
        stroke="#9ca3af"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M138 46 C 138 90, 130 96, 110 100"
        stroke="#9ca3af"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />

      {/* main tube flowing down to the chestpiece */}
      <path
        d="M100 100
           C 60 150, 60 220, 100 260
           C 150 300, 150 360, 100 400
           C 60 440, 60 480, 110 520
           C 135 540, 138 555, 138 575"
        stroke="var(--brand-blue)"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />

      {/* chestpiece */}
      <circle cx="138" cy="590" r="26" fill="#9ca3af" />
      <circle cx="138" cy="590" r="15" fill="#6b7280" />
      <circle cx="138" cy="590" r="4" fill="#e5e7eb" />
    </svg>
  )
}
