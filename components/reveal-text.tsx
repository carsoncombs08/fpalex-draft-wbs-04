"use client"

import React from "react"

type WordCounter = { i: number }

function renderWords(node: React.ReactNode, counter: WordCounter, visible: boolean): React.ReactNode {
  if (typeof node === "string") {
    const parts = node.split(/(\s+)/)
    return parts.map((part, idx) => {
      if (part.trim() === "") return part
      const delay = counter.i * 25
      counter.i++
      return (
        <span
          key={idx}
          className={`inline-block transition-all duration-500 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{ transitionDelay: `${delay}ms` }}
        >
          {part}
        </span>
      )
    })
  }

  if (Array.isArray(node)) {
    return node.map((child, idx) => (
      <React.Fragment key={idx}>{renderWords(child, counter, visible)}</React.Fragment>
    ))
  }

  if (React.isValidElement(node)) {
    const props = node.props as { children?: React.ReactNode }
    if (props.children === undefined) return node
    return React.cloneElement(node as React.ReactElement<{ children?: React.ReactNode }>, {
      children: renderWords(props.children, counter, visible),
    })
  }

  return node
}

export function RevealText({
  as = "p",
  children,
  className = "",
  style,
}: {
  as?: keyof React.JSX.IntrinsicElements
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const ref = React.useRef<HTMLElement>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as as React.ElementType
  const counter: WordCounter = { i: 0 }

  return (
    <Tag ref={ref} className={className} style={style}>
      {renderWords(children, counter, visible)}
    </Tag>
  )
}
