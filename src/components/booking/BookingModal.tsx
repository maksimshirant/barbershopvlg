import { useEffect, useEffectEvent, useState } from 'react'
import type { BookingModalPreset } from './types'

const YCLIENTS_IFRAME_SRC = 'https://wXXXXXX.yclients.com/'

export function BookingModal({
  open,
  preset,
  onClose,
}: {
  open: boolean
  preset: BookingModalPreset | null
  onClose: () => void
}) {
  const [vpnToastVisible, setVpnToastVisible] = useState(true)
  const bookingTitle = preset?.service
    ? `Онлайн запись на услугу «${preset.service}».`
    : preset?.barber
      ? `Онлайн запись к мастеру ${preset.barber}.`
      : 'Онлайн запись'

  const handleClose = useEffectEvent(() => {
    onClose()
  })

  useEffect(() => {
    if (!open) return

    setVpnToastVisible(true)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
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
      aria-label={bookingTitle}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-[rgba(16,12,11,0.58)] backdrop-blur-sm"
        aria-label="Закрыть"
      />

      <div className="absolute inset-0">
        <iframe
          title="Онлайн запись YCLIENTS"
          src={YCLIENTS_IFRAME_SRC}
          className="block h-[100dvh] w-[100dvw] border-0 bg-white"
          loading="lazy"
        />
      </div>

      <button
        type="button"
        onClick={onClose}
        className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(16,12,11,0.72)] text-zinc-100 backdrop-blur-md transition lg:right-5 lg:top-5 lg:h-14 lg:w-14 lg:hover:text-[var(--color-accent-soft)]"
        aria-label="Закрыть окно"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 lg:h-8 lg:w-8"
          aria-hidden="true"
        >
          <path
            d="M6 6L18 18M18 6L6 18"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {vpnToastVisible ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center px-3 pb-3 sm:px-5 sm:pb-5">
          <div className="pointer-events-auto flex w-full max-w-xl items-center gap-3 rounded-2xl border border-white/10 bg-[rgba(16,12,11,0.82)] px-4 py-3 text-xs font-extralight leading-5 text-zinc-100 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-md sm:text-sm">
            <div className="flex-1 [font-family:var(--font-body)]">
              Для стабильной работы сервиса онлайн бронирования отключите VPN.
            </div>
            <button
              type="button"
              onClick={() => setVpnToastVisible(false)}
              className="shrink-0 rounded-full border border-[var(--color-accent)]/40 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent-soft)] transition lg:hover:border-[var(--color-accent)]/70 lg:hover:text-white"
            >
              Ок
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
