import { Container } from '../ui/Container'
import type { HeaderNavItem } from './Header'

export function Footer({
  nav,
  onOpenBooking,
  onOpenPrivacy,
}: {
  nav: ReadonlyArray<HeaderNavItem>
  onOpenBooking: () => void
  onOpenPrivacy: () => void
}) {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-bg)] pb-24 md:pb-0">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <div className="text-lg tracking-[0.06em] text-white [font-family:var(--font-hero)]">
              Barbershop VLG
            </div>
            <div className="mt-3 text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
              Тут что нибудь крутое напишите
            </div>
          </div>

          <div>
            <div className="text-[11px] font-extralight uppercase tracking-[0.24em] text-[var(--color-accent-soft)] [font-family:var(--font-body)]">
              Навигация
            </div>
            <div className="mt-5 grid gap-3">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-extralight uppercase tracking-[0.18em] text-zinc-300 transition [font-family:var(--font-body)] lg:hover:text-[var(--color-accent-soft)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-extralight uppercase tracking-[0.24em] text-[var(--color-accent-soft)] [font-family:var(--font-body)]">
              Быстрые ссылки
            </div>
            <div className="mt-5 grid gap-3 text-sm font-extralight text-zinc-300 [font-family:var(--font-body)]">
              <button
                type="button"
                onClick={onOpenBooking}
                className="text-left transition lg:hover:text-[var(--color-accent-soft)]"
              >
                Записаться онлайн
              </button>
              <a className="transition lg:hover:text-[var(--color-accent-soft)]" href="tel:+79000000000">
                +7 (900) 000-00-00
              </a>
              <a className="transition lg:hover:text-[var(--color-accent-soft)]" href="mailto:example@example.ru">
                example@example.ru
              </a>
              <a
                className="transition lg:hover:text-[var(--color-accent-soft)]"
                href="#contact"
                aria-label="Telegram"
                title="Telegram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M21 4L3.9 10.58C2.73 11.05 2.74 11.7 3.68 11.98L8.07 13.35L18.23 6.94C18.71 6.65 19.15 6.81 18.79 7.13L10.56 14.56V19.4C10.56 20.1 10.88 20.37 11.26 20.37C11.64 20.37 11.81 20.2 12.02 19.91L14.15 16.94L18.58 20.2C19.39 20.64 19.97 20.41 20.18 19.42L23.09 5.72C23.4 4.5 22.61 3.95 21 4Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs font-extralight text-zinc-500 [font-family:var(--font-body)] md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Barbershop VLG. Все права защищены.</div>
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="text-left uppercase tracking-[0.18em] transition lg:hover:text-[var(--color-accent-soft)] md:text-right"
          >
            Политика конфиденциальности
          </button>
        </div>
      </Container>
    </footer>
  )
}
