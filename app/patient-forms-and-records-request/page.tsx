import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Patient Forms and Records Request | Family Practice Associates of Lexington",
  description: "Patient forms and medical records request information for Family Practice Associates of Lexington.",
}

export default function PatientFormsAndRecordsRequestPage() {
  return (
    <main className="min-h-[100dvh] flex flex-col">
      <SiteHeader activePage="other" />

      {/* Hero */}
      <section className="relative group/photo w-full h-[35vh] hover:h-[calc(100vw*0.6637)] bg-background overflow-hidden transition-[height] duration-500 ease-in-out">
        <Image
          src="/assets/image/fpa-patient-forms-hero-bg.webp"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center text-balance">
            Patient Forms and Records Request
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-6 py-4">
        <ol className="max-w-4xl mx-auto flex items-center gap-2 text-sm">
          <li>
            <Link href="/" className="hover:underline" style={{ color: "var(--brand-blue)" }}>
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="size-4 text-muted-foreground" />
          </li>
          <li className="text-foreground">Patient Resources</li>
          <li>
            <ChevronRight className="size-4 text-muted-foreground" />
          </li>
          <li style={{ color: "var(--brand-blue)" }}>Patient Forms and Records Request</li>
        </ol>
      </nav>

      {/* Content */}
      <section className="px-6 py-10 md:py-14 flex-1">
        <Reveal className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4" style={{ color: "var(--brand-blue)" }}>
            Medical and Billing Records Requests
          </h2>
          <p className="text-gray-900 leading-relaxed mb-2">
            Family Practice Associates (FPA) respects the health information rights of our patients and has
            partnered with Provider1st to securely provide copies of medical records to patients, guardians/legal
            representatives, or third-party requestors with appropriate HIPAA authorization.
          </p>
          <p className="text-gray-900 leading-relaxed">
            If you have any questions or would like to check the status of your request, you can quickly and
            conveniently contact Provider1st by email at{" "}
            <a href="mailto:requests@provider1st.com" className="hover:underline" style={{ color: "var(--brand-blue)" }}>
              requests@provider1st.com
            </a>{" "}
            or by phone:
          </p>
        </Reveal>

        <Reveal className="max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-center"
            style={{ color: "var(--brand-blue)" }}
          >
            Records Requests
          </h2>
          <p className="text-gray-900 leading-relaxed mb-6">
            FPA also partners with Provider1st to provide you or your authorized representative with itemized
            copies of your billing statements upon request, for purposes such as insurance reimbursement or HSA
            claims.
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex gap-2 text-gray-900">
              <span className="shrink-0">•</span>
              <span>
                <span className="font-bold">Email or Fax Requests</span>: If you already have a completed HIPAA
                Authorization Form, you may send your request via email or fax:
                <ul className="mt-2 space-y-1 pl-6">
                  <li className="flex gap-2">
                    <span className="shrink-0">◦</span>
                    <span>
                      <span className="font-bold">Email:</span>{" "}
                      <a
                        href="mailto:requests@provider1st.com"
                        className="hover:underline"
                        style={{ color: "var(--brand-blue)" }}
                      >
                        requests@provider1st.com
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0">◦</span>
                    <span>
                      <span className="font-bold">Fax:</span> 800-818-2114
                    </span>
                  </li>
                </ul>
              </span>
            </li>
            <li className="flex gap-2 text-gray-900">
              <span className="shrink-0">•</span>
              <span>
                <span className="font-bold">Check Request Status</span>: Call 855-514-2378 to check the status of
                your request or for assistance.
              </span>
            </li>
          </ul>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]"
            >
              <Link
                href="https://request.provider1st.com/?cLFXpvAQkdgJbS46Q7ZG2pcuon2YsHBETq7L+dozp5g="
                target="_blank"
                rel="noopener noreferrer"
              >
                Online Request for Records
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal className="max-w-4xl mx-auto text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6" style={{ color: "var(--brand-blue)" }}>
            Patient Forms:
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]"
            >
              <Link
                href="https://cdn.hibuwebsites.com/7e29e1036607439698f5a108b9fc30dd/files/uploaded/FAP-Provider1st-+athorization-Form.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Provider 1st Authorization to Discuss
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]"
            >
              <Link
                href="https://cdn.hibuwebsites.com/7e29e1036607439698f5a108b9fc30dd/files/uploaded/Forms+Completion+Process.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Forms Completion Process
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]"
            >
              <Link
                href="https://cdn.hibuwebsites.com/7e29e1036607439698f5a108b9fc30dd/files/uploaded/FAP-ROI-AUTH+-TO-DISCUSS-+FORMS-8147cd07.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Authorization To Discuss
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  )
}
