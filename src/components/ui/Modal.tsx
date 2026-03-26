import { useEffect, useEffectEvent, type ReactNode } from 'react'

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export function Modal({
  open,
  eyebrow = 'Запись',
  title,
  description,
  children,
  panelClassName,
  contentClassName,
  contentScrollable = true,
  onClose,
}: {
  open: boolean
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  panelClassName?: string
  contentClassName?: string
  contentScrollable?: boolean
  onClose: () => void
}) {
  const handleClose = useEffectEvent(() => {
    onClose()
  })

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-[rgba(16,12,11,0.68)] backdrop-blur-xl"
        aria-label="Закрыть"
      />
      <div className="relative mx-auto flex min-h-full w-full items-end px-3 py-3 sm:items-center sm:px-6 sm:py-10">
        <div
          className={cx(
            'mx-auto flex max-h-[calc(100vh-1.5rem)] w-full max-w-2xl flex-col overflow-hidden rounded-none border border-white/10 bg-[linear-gradient(180deg,rgba(28,27,23,0.96)_0%,rgba(16,12,11,0.98)_100%)] shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:max-h-[calc(100vh-5rem)]',
            panelClassName,
          )}
        >
          <div className="border-b border-white/10 px-6 py-5 sm:px-7">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-4xl leading-none tracking-[0.06em] text-[var(--color-accent-soft)] [font-family:var(--font-hero)] sm:text-5xl">
                  {eyebrow}
                </div>
                <div className="mt-4 text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
                  {title}
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-16 w-16 items-center justify-center text-zinc-300 transition lg:hover:text-[var(--color-accent-soft)]"
                aria-label="Закрыть окно"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={cx(
              contentScrollable && 'overflow-y-auto',
              'px-6 py-6 sm:px-7 sm:py-7',
              contentClassName,
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
