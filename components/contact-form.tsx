"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function ContactForm({
  heading = "Send Us a Message",
  subheading = "Please fill out this short form and we'll contact you shortly.",
}: {
  heading?: string
  subheading?: string
}) {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)

  const canSubmit = name.trim() !== "" && email.trim() !== "" && phone.trim() !== ""

  if (submitted) {
    return (
      <div className="rounded-xl bg-muted p-8 text-center">
        <div
          className="mx-auto mb-4 flex items-center justify-center size-14 rounded-full text-white"
          style={{ backgroundColor: "var(--brand-blue)" }}
        >
          <Check className="size-7" />
        </div>
        <h3 className="text-xl font-extrabold text-foreground mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">Thanks, {name.split(" ")[0]}! We&apos;ll be in touch shortly.</p>
      </div>
    )
  }

  return (
    <form
      className="rounded-xl bg-muted p-8"
      onSubmit={(e) => {
        e.preventDefault()
        if (canSubmit) setSubmitted(true)
      }}
    >
      <h2 className="text-3xl font-extrabold mb-2 text-foreground">
        {heading}
      </h2>
      <p className="text-foreground mb-6">{subheading}</p>

      <label className="block font-bold text-foreground mb-1" htmlFor="contact-name">
        Name*
      </label>
      <input
        id="contact-name"
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border-0 border-b border-gray-400 bg-transparent pb-2 mb-6 focus:outline-none focus:border-[var(--brand-blue)]"
      />

      <label className="block font-bold text-foreground mb-1" htmlFor="contact-email">
        Email*
      </label>
      <input
        id="contact-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border-0 border-b border-gray-400 bg-transparent pb-2 mb-6 focus:outline-none focus:border-[var(--brand-blue)]"
      />

      <label className="block font-bold text-foreground mb-1" htmlFor="contact-phone">
        Phone*
      </label>
      <input
        id="contact-phone"
        type="tel"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border-0 border-b border-gray-400 bg-transparent pb-2 mb-6 focus:outline-none focus:border-[var(--brand-blue)]"
      />

      <label className="block font-bold text-foreground mb-1" htmlFor="contact-message">
        Message
      </label>
      <textarea
        id="contact-message"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border-0 border-b border-gray-400 bg-transparent pb-2 mb-6 resize-y focus:outline-none focus:border-[var(--brand-blue)]"
      />

      <p className="font-bold text-foreground mb-4">This site is protected by reCAPTCHA.</p>

      <Button
        type="submit"
        size="lg"
        disabled={!canSubmit}
        className="transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]"
      >
        Send Message
      </Button>
    </form>
  )
}
