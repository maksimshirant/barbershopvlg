import { useEffect, useState } from 'react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export type HeaderNavItem = { href: string; label: string }

export function Header({
  nav,
  onOpenBooking,
}: {
  nav: ReadonlyArray<HeaderNavItem>
  onOpenBooking: () => void
}) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const nextScrolled = window.scrollY > 8
      setScrolled((current) => (current === nextScrolled ? current : nextScrolled))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return

    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [mobileOpen])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = previousOverflow
    }

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cx(
          'sticky top-0 z-50 border-b transition',
          scrolled
            ? 'border-white/10 bg-[rgba(8,8,9,0.92)] backdrop-blur-xl'
            : 'border-transparent bg-transparent',
          'relative',
        )}
      >
        <Container>
          <div className="flex min-h-16 items-center justify-between gap-4 py-3 lg:min-h-[74px]">
            <a href="#top" className="group inline-flex items-center">
              <div className="leading-tight">
                <div className="text-base tracking-[0.06em] text-white transition lg:group-hover:text-[var(--color-accent-soft)] [font-family:var(--font-body)] sm:text-lg">
                  Barbershop VLG
                </div>
                <div className="text-[9px] font-extralight uppercase tracking-[0.24em] text-zinc-500 transition [font-family:var(--font-body)] lg:group-hover:text-zinc-300 sm:text-[10px] sm:tracking-[0.28em]">
                  или что угодно
                </div>
              </div>
            </a>

            <nav className="hidden items-center gap-7 lg:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative py-2 text-[11px] font-extralight uppercase tracking-[0.22em] text-zinc-300 transition [font-family:var(--font-body)] lg:hover:text-[var(--color-accent-soft)]"
                >
                  <span>{item.label}</span>
                  <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[var(--color-accent)] transition-transform duration-300 lg:group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-6 lg:flex">
              <a
                href="tel:+79000000000"
                aria-label="Позвонить в Barbershop VLG"
                title="Позвонить"
                className="group relative py-2 text-[11px] font-extralight uppercase tracking-[0.2em] text-zinc-300 transition duration-200 [font-family:var(--font-body)] lg:hover:text-[var(--color-accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <span>+7 (900) 000-00-00</span>
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[var(--color-accent)] transition-transform duration-300 lg:group-hover:scale-x-100" />
              </a>
              <Button
                onClick={onOpenBooking}
                variant="primary"
                size="xs"
                className="border-[#8A7356] bg-[#8A7356] text-[#100C0B]/75 shadow-[0_16px_40px_rgba(138,115,86,0.16)] lg:hover:border-[#8A7356] lg:hover:bg-[#8A7356] lg:hover:text-[#100C0B]/75 [font-family:var(--font-body)]"
              >
                Заказать звонок
              </Button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:+79000000000"
                aria-label="Позвонить в Barbershop VLG"
                title="Позвонить"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(16,12,11,0.25)] text-zinc-100"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.11.37 2.29.56 3.5.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.21.19 2.39.56 3.5a1 1 0 0 1-.24 1.02l-2.2 2.27Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen((value) => !value)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(16,12,11,0.25)] text-white"
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
              >
                {mobileOpen ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 6L18 18M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <span className="relative h-4 w-4">
                    <span className="absolute left-0 top-0.5 block h-px w-4 bg-current transition" />
                    <span className="absolute left-0 top-[7px] block h-px w-4 bg-current transition" />
                    <span className="absolute left-0 top-[13px] block h-px w-4 bg-current transition" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </Container>

        {mobileOpen ? (
          <div className="absolute inset-x-0 top-full border-t border-white/10 bg-[rgba(16,12,11,0.96)] shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:hidden">
            <Container>
              <div className="py-5">
                <nav className="grid gap-2">
                  {nav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-xl bg-[rgba(16,12,11,0.25)] px-4 py-4 text-sm font-extralight uppercase tracking-[0.18em] text-zinc-200 [font-family:var(--font-body)]"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-5 grid gap-4 border-t border-white/10 pt-5">
                  <div className="grid gap-1 text-sm leading-6 text-zinc-400">
                    <div>Волгоград, центр города</div>
                    <div>Ежедневно 10:00-21:00</div>
                  </div>
                  <Button
                    onClick={() => {
                      setMobileOpen(false)
                      onOpenBooking()
                    }}
                    variant="primary"
                    className="border-[#8A7356] bg-[#8A7356] text-[#100C0B]/75 shadow-[0_16px_40px_rgba(138,115,86,0.16)] lg:hover:border-[#8A7356] lg:hover:bg-[#8A7356] lg:hover:text-[#100C0B]/75 [font-family:var(--font-body)]"
                  >
                    Записаться
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        ) : null}
      </header>
    </>
  )
}
