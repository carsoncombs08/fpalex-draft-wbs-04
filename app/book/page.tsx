"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  UserPlus,
  UserCheck,
  Thermometer,
  HeartPulse,
  ClipboardList,
  Baby,
  Star,
  Award,
  Stethoscope,
  Clock,
  Phone,
  Check,
  ChevronLeft,
} from "lucide-react"

type PatientType = "new" | "existing"
type ReasonKey = "sick" | "wellness" | "followup" | "pediatric"
type LocationKey = "hamburg" | "brannon"
type DayKey = "tomorrow" | "dayAfter"
type Page = "booking" | "confirm"

const STEPS = ["Patient Type", "Reason & Location", "Pick a Time", "Confirm"]

const PATIENT_TYPES: { key: PatientType; label: string; icon: React.ElementType }[] = [
  { key: "new", label: "New Patient", icon: UserPlus },
  { key: "existing", label: "Existing Patient", icon: UserCheck },
]

const REASONS: { key: ReasonKey; label: string; icon: React.ElementType }[] = [
  { key: "sick", label: "Sick Visit", icon: Thermometer },
  { key: "wellness", label: "Annual Wellness", icon: HeartPulse },
  { key: "followup", label: "Follow-up", icon: ClipboardList },
  { key: "pediatric", label: "Pediatric Visit", icon: Baby },
]

const LOCATIONS: { key: LocationKey; label: string }[] = [
  { key: "hamburg", label: "Hamburg Pavilion, Lexington" },
  { key: "brannon", label: "Brannon Crossing, Nicholasville" },
]

const TIMES_BY_DAY: Record<DayKey, string[]> = {
  tomorrow: ["9:15 AM", "10:00 AM", "1:30 PM", "3:45 PM"],
  dayAfter: ["8:30 AM", "11:15 AM", "2:00 PM", "4:15 PM"],
}

const DAY_LABELS: Record<DayKey, string> = {
  tomorrow: "Tomorrow",
  dayAfter: "Day After Tomorrow",
}

function Stepper({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto">
      {STEPS.map((label, i) => {
        const stepNum = i + 1
        const done = stepNum < current
        const active = stepNum === current
        return (
          <React.Fragment key={label}>
            <div className="flex items-center gap-2 shrink-0">
              <div
                className={`flex items-center justify-center size-8 rounded-full text-sm font-bold shrink-0 transition-colors ${
                  done || active ? "text-white" : "bg-muted text-muted-foreground"
                }`}
                style={done || active ? { backgroundColor: "var(--brand-blue)" } : undefined}
              >
                {done ? <Check className="size-4" /> : stepNum}
              </div>
              <span
                className={`text-sm font-bold whitespace-nowrap ${
                  active ? "text-foreground" : done ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            </div>
            {stepNum < STEPS.length && (
              <div
                className="h-0.5 w-6 sm:w-12 shrink-0 transition-colors"
                style={{ backgroundColor: done ? "var(--brand-blue)" : "var(--border)" }}
              />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

function SelectCard({
  selected,
  onClick,
  icon: Icon,
  label,
}: {
  selected: boolean
  onClick: () => void
  icon: React.ElementType
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex items-center justify-center gap-2 rounded-lg border-2 border-black px-4 py-4 font-bold text-sm sm:text-base transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)] ${
        selected ? "text-[var(--brand-blue)]" : "text-foreground hover:bg-accent"
      }`}
      style={selected ? { borderColor: "var(--brand-blue)", backgroundColor: "color-mix(in oklab, var(--brand-blue) 8%, transparent)" } : undefined}
    >
      <Icon className="size-5 shrink-0" />
      {label}
    </button>
  )
}

function Sidebar() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border p-6">
        <h3 className="font-extrabold text-foreground mb-4">Why patients trust FPA</h3>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <Star className="size-4 shrink-0" style={{ color: "var(--brand-blue)" }} />
            4.8/5 from 340+ Google reviews
          </li>
          <li className="flex items-center gap-2">
            <Award className="size-4 shrink-0" style={{ color: "var(--brand-blue)" }} />
            NCQA Recognized Practice
          </li>
          <li className="flex items-center gap-2">
            <Stethoscope className="size-4 shrink-0" style={{ color: "var(--brand-blue)" }} />
            20+ board-certified providers
          </li>
          <li className="flex items-center gap-2">
            <Clock className="size-4 shrink-0" style={{ color: "var(--brand-blue)" }} />
            Same-week appointments available
          </li>
        </ul>
      </div>

      <div
        className="rounded-xl border p-6"
        style={{ borderColor: "var(--brand-blue)", backgroundColor: "color-mix(in oklab, var(--brand-blue) 6%, transparent)" }}
      >
        <h3 className="font-extrabold text-foreground mb-2">No account needed</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Book as a guest in under a minute. Create a portal account later if you&apos;d like ongoing access to
          records.
        </p>
      </div>

      <div className="rounded-xl border border-border p-6">
        <h3 className="font-extrabold text-foreground mb-2">Prefer to call?</h3>
        <a href="tel:+18592785007" className="flex items-center gap-2 font-bold text-lg" style={{ color: "var(--brand-blue)" }}>
          <Phone className="size-4" />
          (859) 278-5007
        </a>
        <p className="text-sm text-muted-foreground mt-1">Mon&ndash;Fri, 8am&ndash;5pm</p>
      </div>
    </div>
  )
}

export default function BookPage() {
  const [page, setPage] = React.useState<Page>("booking")
  const [patientType, setPatientType] = React.useState<PatientType | null>(null)
  const [reason, setReason] = React.useState<ReasonKey | null>(null)
  const [location, setLocation] = React.useState<LocationKey>("hamburg")
  const [day, setDay] = React.useState<DayKey>("tomorrow")
  const [time, setTime] = React.useState<string | null>(null)
  const [name, setName] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)

  const locationLabel = LOCATIONS.find((l) => l.key === location)?.label
  const reasonLabel = REASONS.find((r) => r.key === reason)?.label
  const patientTypeLabel = PATIENT_TYPES.find((p) => p.key === patientType)?.label

  // The stepper stays in sync with what the visitor has actually filled in,
  // rather than which page is showing, since steps 1-3 all live on one screen.
  const currentStep = !patientType ? 1 : !reason ? 2 : !time ? 3 : 4
  const stepperValue = submitted ? 5 : page === "confirm" ? 4 : currentStep

  const canContinue = patientType !== null && reason !== null && time !== null
  const canConfirm = name.trim() !== "" && phone.trim() !== "" && email.trim() !== ""

  const resetAll = () => {
    setSubmitted(false)
    setPage("booking")
    setPatientType(null)
    setReason(null)
    setLocation("hamburg")
    setDay("tomorrow")
    setTime(null)
    setName("")
    setPhone("")
    setEmail("")
  }

  return (
    <main className="min-h-[100dvh] flex flex-col bg-background">
      {/* Focused booking header */}
      <header className="border-b border-border px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/image/fpa-logo.png"
              alt="Family Practice Associates of Lexington, P.S.C."
              width={1585}
              height={288}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="tel:+18592785007"
              className="hidden sm:flex items-center gap-1.5 font-bold text-sm text-foreground hover:text-[var(--brand-blue)] transition-colors"
            >
              <Phone className="size-4" style={{ color: "var(--brand-blue)" }} />
              (859) 278-5007
            </a>
            <Button asChild variant="outline" size="sm">
              <Link href="/">
                <ChevronLeft className="size-4" />
                Back to Site
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 px-6 py-10 md:py-14">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <Stepper current={stepperValue} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 rounded-xl border border-border p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div
                    className="mx-auto mb-6 flex items-center justify-center size-16 rounded-full text-white"
                    style={{ backgroundColor: "var(--brand-blue)" }}
                  >
                    <Check className="size-8" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-foreground mb-3">Appointment Requested!</h2>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Thanks, {name.split(" ")[0] || "there"}! We&apos;ll call {phone} to confirm your{" "}
                    {reasonLabel?.toLowerCase()} at {locationLabel} for {DAY_LABELS[day].toLowerCase()} at {time}.
                  </p>
                  <Button onClick={resetAll}>Book Another Appointment</Button>
                </div>
              ) : page === "booking" ? (
                <div className="space-y-8">
                  <div>
                    <h2 className="font-extrabold text-foreground text-lg mb-4">What are you booking?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {PATIENT_TYPES.map((p) => (
                        <SelectCard
                          key={p.key}
                          selected={patientType === p.key}
                          onClick={() => setPatientType(p.key)}
                          icon={p.icon}
                          label={p.label}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wide text-muted-foreground mb-3">
                      Reason for Visit
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {REASONS.map((r) => (
                        <SelectCard
                          key={r.key}
                          selected={reason === r.key}
                          onClick={() => setReason(r.key)}
                          icon={r.icon}
                          label={r.label}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wide text-muted-foreground mb-3">
                      Location
                    </h3>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value as LocationKey)}
                      className="w-full rounded-lg border border-border px-4 py-3 font-bold text-foreground bg-background"
                    >
                      {LOCATIONS.map((l) => (
                        <option key={l.key} value={l.key}>
                          {l.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wide text-muted-foreground mb-3">
                      Available Times &mdash; {DAY_LABELS[day]}
                    </h3>
                    <div className="flex gap-2 mb-4">
                      {(Object.keys(DAY_LABELS) as DayKey[]).map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => {
                            setDay(d)
                            setTime(null)
                          }}
                          aria-pressed={day === d}
                          className={`rounded-full px-4 py-1.5 text-sm font-bold border-2 border-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)] ${
                            day === d ? "text-white" : "text-muted-foreground hover:bg-accent"
                          }`}
                          style={day === d ? { backgroundColor: "var(--brand-blue)", borderColor: "var(--brand-blue)" } : undefined}
                        >
                          {DAY_LABELS[d]}
                        </button>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {TIMES_BY_DAY[day].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTime(t)}
                          aria-pressed={time === t}
                          className={`rounded-lg border-2 border-black px-4 py-3 font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)] ${
                            time === t ? "text-[var(--brand-blue)]" : "text-foreground hover:bg-accent"
                          }`}
                          style={
                            time === t
                              ? { borderColor: "var(--brand-blue)", backgroundColor: "color-mix(in oklab, var(--brand-blue) 8%, transparent)" }
                              : undefined
                          }
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <Button onClick={() => canContinue && setPage("confirm")} disabled={!canContinue}>
                      Continue
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="rounded-lg bg-muted p-4 space-y-1 text-sm">
                    <p>
                      <span className="font-bold text-foreground">Patient Type:</span>{" "}
                      <span className="text-muted-foreground">{patientTypeLabel}</span>
                    </p>
                    <p>
                      <span className="font-bold text-foreground">Reason:</span>{" "}
                      <span className="text-muted-foreground">{reasonLabel}</span>
                    </p>
                    <p>
                      <span className="font-bold text-foreground">Location:</span>{" "}
                      <span className="text-muted-foreground">{locationLabel}</span>
                    </p>
                    <p>
                      <span className="font-bold text-foreground">When:</span>{" "}
                      <span className="text-muted-foreground">
                        {DAY_LABELS[day]} at {time}
                      </span>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-extrabold uppercase tracking-wide text-muted-foreground mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border border-border px-4 py-3 text-foreground bg-background"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wide text-muted-foreground mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-lg border border-border px-4 py-3 text-foreground bg-background"
                        placeholder="(859) 555-0142"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wide text-muted-foreground mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-border px-4 py-3 text-foreground bg-background"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button variant="outline" onClick={() => setPage("booking")}>
                      Back
                    </Button>
                    <Button onClick={() => canConfirm && setSubmitted(true)} disabled={!canConfirm}>
                      Confirm Appointment
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  )
}
