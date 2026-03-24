import type { ReactNode } from 'react'

export function SectionHeading({
  eyebrow,
  title,
  right,
}: {
  eyebrow?: string
  title: string
  description?: string
  right?: ReactNode
}) {
  return (
    <div className="flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <div className="text-4xl leading-none tracking-[0.06em] text-[var(--color-accent-soft)] [font-family:var(--font-display)] sm:text-5xl">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 [font-family:var(--font-body)]">
          {title}
        </h2>
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  )
}
