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
  ChevronRight,
  CalendarDays,
} from "lucide-react"

type PatientType = "new" | "existing"
type ReasonKey = "sick" | "wellness" | "followup" | "pediatric"
type LocationKey = "hamburg" | "brannon"
type DayKey = "today" | "tomorrow" | "custom"
type Page = "booking" | "confirm"

const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"]
const CUSTOM_TIMES = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"]

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function formatShortDate(d: Date) {
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
}

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

const TIMES_BY_DAY: Record<"today" | "tomorrow", string[]> = {
  today: ["1:00 PM", "2:30 PM", "4:00 PM"],
  tomorrow: ["9:15 AM", "10:00 AM", "1:30 PM", "3:45 PM"],
}

const DAY_LABELS: Record<"today" | "tomorrow", string> = {
  today: "Today",
  tomorrow: "Tomorrow",
}

function Stepper({ doneSteps, active }: { doneSteps: boolean[]; active: number }) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto">
      {STEPS.map((label, i) => {
        const stepNum = i + 1
        const done = doneSteps[i]
        const isActive = stepNum === active
        return (
          <React.Fragment key={label}>
            <div className="flex items-center gap-2 shrink-0">
              <div
                className={`flex items-center justify-center size-8 rounded-full text-sm font-bold shrink-0 transition-all duration-200 ${
                  done || isActive ? "text-white" : "bg-muted text-muted-foreground"
                } ${isActive ? "scale-110 shadow-[0_0_14px_var(--brand-blue)]" : ""}`}
                style={done || isActive ? { backgroundColor: "var(--brand-blue)" } : undefined}
              >
                {done ? <Check className="size-4" /> : stepNum}
              </div>
              <span
                className={`text-sm font-bold whitespace-nowrap transition-colors ${
                  isActive ? "text-[var(--brand-blue)]" : done ? "text-foreground" : "text-muted-foreground"
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

function MiniCalendar({
  selectedDate,
  onSelect,
}: {
  selectedDate: Date | null
  onSelect: (d: Date) => void
}) {
  const today = React.useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])
  const [viewMonth, setViewMonth] = React.useState(() => new Date(today.getFullYear(), today.getMonth(), 1))

  const year = viewMonth.getFullYear()
  const month = viewMonth.getMonth()
  const startWeekday = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const canGoPrev = new Date(year, month, 1) > new Date(today.getFullYear(), today.getMonth(), 1)

  const cells: (number | null)[] = []
  for (let i = 0; i < startWeekday; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={() => canGoPrev && setViewMonth(new Date(year, month - 1, 1))}
          disabled={!canGoPrev}
          aria-label="Previous month"
          className="flex items-center justify-center size-8 rounded-full border-2 border-black disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent transition-colors"
        >
          <ChevronLeft className="size-4" />
        </button>
        <span className="font-extrabold text-foreground">
          {viewMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </span>
        <button
          type="button"
          onClick={() => setViewMonth(new Date(year, month + 1, 1))}
          aria-label="Next month"
          className="flex items-center justify-center size-8 rounded-full border-2 border-black hover:bg-accent transition-colors"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-1">
        {WEEKDAY_LABELS.map((w, i) => (
          <div key={i} className="text-center text-xs font-bold text-muted-foreground">
            {w}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((d, i) => {
          if (d === null) return <div key={i} />
          const cellDate = new Date(year, month, d)
          const isPast = cellDate < today
          const isSelected = selectedDate !== null && isSameDay(cellDate, selectedDate)
          return (
            <button
              key={i}
              type="button"
              disabled={isPast}
              onClick={() => onSelect(cellDate)}
              aria-pressed={isSelected}
              className={`aspect-square rounded-lg border-2 text-sm font-bold transition-all duration-200 ${
                isPast
                  ? "border-transparent text-muted-foreground/40 cursor-not-allowed"
                  : isSelected
                    ? "border-black text-[var(--brand-blue)] hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]"
                    : "border-black text-foreground hover:bg-accent hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]"
              }`}
              style={
                isSelected
                  ? { backgroundColor: "color-mix(in oklab, var(--brand-blue) 8%, transparent)" }
                  : undefined
              }
            >
              {d}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function CalendarModal({
  initialDate,
  onCancel,
  onConfirm,
}: {
  initialDate: Date | null
  onCancel: () => void
  onConfirm: (date: Date, time: string) => void
}) {
  const [pendingDate, setPendingDate] = React.useState<Date | null>(initialDate)
  const [pendingTime, setPendingTime] = React.useState<string | null>(null)

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [onCancel])

  const canConfirm = pendingDate !== null && pendingTime !== null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-md rounded-xl border-2 border-black bg-background p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-extrabold text-foreground text-lg mb-4 flex items-center gap-2">
          <CalendarDays className="size-5" style={{ color: "var(--brand-blue)" }} />
          Choose a Date &amp; Time
        </h3>

        <MiniCalendar
          selectedDate={pendingDate}
          onSelect={(d) => {
            setPendingDate(d)
            setPendingTime(null)
          }}
        />

        {pendingDate && (
          <div className="mt-5">
            <h4 className="text-xs font-extrabold uppercase tracking-wide text-muted-foreground mb-3">
              Available Times &mdash; {formatShortDate(pendingDate)}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {CUSTOM_TIMES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setPendingTime(t)}
                  aria-pressed={pendingTime === t}
                  className={`rounded-lg border-2 border-black px-3 py-2.5 font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)] ${
                    pendingTime === t ? "text-[var(--brand-blue)]" : "text-foreground hover:bg-accent"
                  }`}
                  style={
                    pendingTime === t
                      ? { borderColor: "var(--brand-blue)", backgroundColor: "color-mix(in oklab, var(--brand-blue) 8%, transparent)" }
                      : undefined
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-6">
          <Button variant="outline" onClick={onCancel}>
            Back
          </Button>
          <Button
            onClick={() => canConfirm && pendingDate && pendingTime && onConfirm(pendingDate, pendingTime)}
            disabled={!canConfirm}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
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
  const [day, setDay] = React.useState<DayKey>("today")
  const [customDate, setCustomDate] = React.useState<Date | null>(null)
  const [time, setTime] = React.useState<string | null>(null)
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false)
  const [name, setName] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)
  const [activeStep, setActiveStep] = React.useState(1)

  const locationLabel = LOCATIONS.find((l) => l.key === location)?.label
  const reasonLabel = REASONS.find((r) => r.key === reason)?.label
  const patientTypeLabel = PATIENT_TYPES.find((p) => p.key === patientType)?.label
  const whenLabel = day === "custom" && customDate ? formatShortDate(customDate) : day !== "custom" ? DAY_LABELS[day] : "Select a date"
  const whenPhrase = day === "custom" ? `on ${whenLabel}` : `for ${whenLabel.toLowerCase()}`

  // Each step's "done" state reflects its own field, independent of order, so
  // clicking any icon lights up that icon's own step right away.
  const doneSteps = [patientType !== null, reason !== null, time !== null, submitted]
  const stepperActive = submitted ? 4 : page === "confirm" ? 4 : activeStep

  const canContinue = patientType !== null && reason !== null && time !== null
  const canConfirm = name.trim() !== "" && phone.trim() !== "" && email.trim() !== ""

  const resetAll = () => {
    setSubmitted(false)
    setPage("booking")
    setPatientType(null)
    setReason(null)
    setLocation("hamburg")
    setDay("today")
    setCustomDate(null)
    setTime(null)
    setIsCalendarOpen(false)
    setName("")
    setPhone("")
    setEmail("")
    setActiveStep(1)
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
            <Stepper doneSteps={doneSteps} active={stepperActive} />
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
                    {reasonLabel?.toLowerCase()} at {locationLabel} {whenPhrase} at {time}.
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
                          onClick={() => {
                            setPatientType(p.key)
                            setActiveStep(1)
                          }}
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
                          onClick={() => {
                            setReason(r.key)
                            setActiveStep(2)
                          }}
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
                      onChange={(e) => {
                        setLocation(e.target.value as LocationKey)
                        setActiveStep(2)
                      }}
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
                      Available Times &mdash; {whenLabel}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(["today", "tomorrow"] as const).map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => {
                            setDay(d)
                            setCustomDate(null)
                            setTime(null)
                            setActiveStep(3)
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
                      <button
                        type="button"
                        onClick={() => setIsCalendarOpen(true)}
                        aria-pressed={day === "custom"}
                        className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-bold border-2 border-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)] ${
                          day === "custom" ? "text-white" : "text-muted-foreground hover:bg-accent"
                        }`}
                        style={day === "custom" ? { backgroundColor: "var(--brand-blue)", borderColor: "var(--brand-blue)" } : undefined}
                      >
                        <CalendarDays className="size-4" />
                        Another Time
                      </button>
                    </div>

                    {day === "custom" ? (
                      customDate && time ? (
                        <div className="flex items-center justify-between rounded-lg border-2 border-black px-4 py-3">
                          <span className="font-bold text-[var(--brand-blue)]">
                            {formatShortDate(customDate)} at {time}
                          </span>
                          <button
                            type="button"
                            onClick={() => setIsCalendarOpen(true)}
                            className="text-sm font-bold underline"
                            style={{ color: "var(--brand-blue)" }}
                          >
                            Change
                          </button>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Pick a day and time from the calendar to continue.
                        </p>
                      )
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {TIMES_BY_DAY[day].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => {
                              setTime(t)
                              setActiveStep(3)
                            }}
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
                    )}
                  </div>

                  {isCalendarOpen && (
                    <CalendarModal
                      initialDate={customDate}
                      onCancel={() => setIsCalendarOpen(false)}
                      onConfirm={(selectedDate, selectedTime) => {
                        setDay("custom")
                        setCustomDate(selectedDate)
                        setTime(selectedTime)
                        setActiveStep(3)
                        setIsCalendarOpen(false)
                      }}
                    />
                  )}

                  <div className="flex items-center justify-end">
                    <Button
                      onClick={() => {
                        if (canContinue) {
                          setPage("confirm")
                          setActiveStep(4)
                        }
                      }}
                      disabled={!canContinue}
                    >
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
                        {whenLabel} at {time}
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
                    <Button
                      variant="outline"
                      onClick={() => {
                        setPage("booking")
                        setActiveStep(3)
                      }}
                    >
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
