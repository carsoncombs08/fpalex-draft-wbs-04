import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Apple, ChevronDown, KeyRound, Play } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { GoogleLogo } from "@/components/google-logo"

export const metadata: Metadata = {
  title: "Patient Portal Sign In | Family Practice Associates of Lexington",
  description: "Sign in to the Family Practice Associates of Lexington patient portal.",
}

const PORTAL_URL = "https://fpalex.followmyhealth.com/"

function MicrosoftLogo() {
  return (
    <svg viewBox="0 0 24 24" className="size-5">
      <rect x="1" y="1" width="10" height="10" fill="#F25022" />
      <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
      <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
      <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
    </svg>
  )
}

function CernerLogo() {
  return (
    <svg viewBox="0 0 24 24" className="size-5">
      <path
        fill="none"
        stroke="#2E9C9C"
        strokeWidth="2.5"
        strokeLinecap="round"
        d="M4 12c2-4 6-6 8-4s2 6 6 4"
      />
    </svg>
  )
}

export default function PatientPortalPage() {
  return (
    <main className="min-h-[100dvh] flex flex-col items-center bg-background px-6 py-16">
      <Reveal className="w-full max-w-2xl">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Image
            src="/assets/image/fpa-logo.png"
            alt="Family Practice Associates of Lexington, P.S.C."
            width={1585}
            height={288}
            className="h-24 w-auto"
            priority
          />
        </div>

        <div className="border-b border-border pb-10 mb-8">
          <Link
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full rounded-lg py-5 text-white text-2xl font-extrabold shadow-md transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(180deg, #5b9bd5 0%, #2e6da4 100%)" }}
          >
            <KeyRound className="size-7" />
            Sign In
          </Link>
        </div>

        <div className="rounded-lg border border-border p-6 mb-8">
          <p className="text-center font-bold text-foreground mb-4">or, use an alternative</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-bold text-foreground hover:bg-accent transition-colors"
            >
              <Apple className="size-5" fill="currentColor" />
              Apple
            </Link>
            <Link
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-bold text-foreground hover:bg-accent transition-colors"
            >
              <CernerLogo />
              Cerner
            </Link>
            <Link
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-bold text-foreground hover:bg-accent transition-colors"
            >
              <GoogleLogo />
              Google
            </Link>
            <Link
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-bold text-foreground hover:bg-accent transition-colors"
            >
              <MicrosoftLogo />
              Microsoft
            </Link>
          </div>
        </div>

        <Link
          href={PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full rounded-lg py-4 text-white text-lg font-extrabold mb-10 transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#5b9bd5" }}
        >
          I need to sign up
        </Link>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-black text-white px-3 py-1.5"
            >
              <Apple className="size-6" />
              <span className="leading-tight text-left">
                <span className="block text-[10px]">Download on the</span>
                <span className="block text-sm font-bold -mt-0.5">App Store</span>
              </span>
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-black text-white px-3 py-1.5"
            >
              <Play className="size-5 fill-current" />
              <span className="leading-tight text-left">
                <span className="block text-[10px]">GET IT ON</span>
                <span className="block text-sm font-bold -mt-0.5">Google Play</span>
              </span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Link href="#" className="underline text-foreground">
              FAQ
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link href="#" className="underline text-foreground">
              Help
            </Link>
            <span className="text-muted-foreground">|</span>
            <span className="flex items-center gap-1 text-foreground">
              English <ChevronDown className="size-3.5" />
            </span>
            <span className="text-muted-foreground">|</span>
            <Link href="/" className="underline text-foreground">
              About
            </Link>
          </div>
        </div>
      </Reveal>
    </main>
  )
}
