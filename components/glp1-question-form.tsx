"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function Glp1QuestionForm() {
  const [question, setQuestion] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)

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
        <p className="text-muted-foreground">Thanks! We&apos;ll be in touch shortly.</p>
      </div>
    )
  }

  return (
    <form
      className="rounded-xl bg-muted p-8"
      onSubmit={(e) => {
        e.preventDefault()
        if (question.trim() !== "") setSubmitted(true)
      }}
    >
      <label className="block font-bold text-foreground mb-1" htmlFor="glp1-question">
        Question
      </label>
      <textarea
        id="glp1-question"
        rows={4}
        required
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full border-0 border-b border-gray-400 bg-transparent pb-2 mb-6 resize-y focus:outline-none focus:border-[var(--brand-blue)]"
      />
      <Button
        type="submit"
        size="lg"
        disabled={question.trim() === ""}
        className="transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_var(--brand-blue)]"
      >
        Send Message
      </Button>
    </form>
  )
}
