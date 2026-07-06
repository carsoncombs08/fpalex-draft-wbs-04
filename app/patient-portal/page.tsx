import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Apple, ChevronDown, KeyRound, Play } from "lucide-react"

export const metadata: Metadata = {
  title: "Patient Portal Sign In | Family Practice Associates of Lexington",
  description: "Sign in to the Family Practice Associates of Lexington patient portal.",
}

const PORTAL_URL = "https://fpalex.followmyhealth.com/"

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" className="size-5">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.9-2.26 5.36-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.94 23.94 0 0 0 0 24c0 3.86.92 7.5 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.15 15.89-5.82l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.97 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  )
}

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
    <main className="min-h-[100dvh] flex flex-col items-center bg-white px-6 py-16">
      <div className="w-full max-w-2xl">
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

        <div className="border-b border-gray-200 pb-10 mb-8">
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

        <div className="rounded-lg border border-gray-300 p-6 mb-8">
          <p className="text-center font-bold text-gray-800 mb-4">or, use an alternative</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2.5 font-bold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              <Apple className="size-5" fill="currentColor" />
              Apple
            </Link>
            <Link
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2.5 font-bold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              <CernerLogo />
              Cerner
            </Link>
            <Link
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2.5 font-bold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              <GoogleLogo />
              Google
            </Link>
            <Link
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2.5 font-bold text-gray-800 hover:bg-gray-50 transition-colors"
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
            <Link href="#" className="text-blue-800 underline">
              FAQ
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="#" className="text-blue-800 underline">
              Help
            </Link>
            <span className="text-gray-400">|</span>
            <span className="flex items-center gap-1 text-blue-800">
              English <ChevronDown className="size-3.5" />
            </span>
            <span className="text-gray-400">|</span>
            <Link href="/" className="text-blue-800 underline">
              About
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
