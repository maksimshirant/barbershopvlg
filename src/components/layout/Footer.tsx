import { BRAND, CONTACT_INFO, SHOW_BRAND_LOGO } from '../../content/siteConfig'
import { Container } from '../ui/Container'
import { BrandMark } from './BrandMark'
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
    <footer className="border-t border-white/10 bg-transparent pb-24 md:pb-0">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <a
              href="#top"
              className="inline-flex items-center"
              aria-label={SHOW_BRAND_LOGO ? BRAND.name : BRAND.logoPlaceholder}
            >
              <BrandMark
                imageClassName="h-14 w-auto object-contain"
                placeholderClassName="inline-flex h-14 min-w-[170px] items-center justify-center border border-[var(--color-accent)]/45 px-5 text-xs font-light uppercase tracking-[0.34em] text-[var(--color-accent-soft)]"
              />
            </a>
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
              <a
                className="transition lg:hover:text-[var(--color-accent-soft)]"
                href={CONTACT_INFO.phoneHref}
              >
                {CONTACT_INFO.phoneDisplay}
              </a>
              <a
                className="transition lg:hover:text-[var(--color-accent-soft)]"
                href={CONTACT_INFO.emailHref}
              >
                {CONTACT_INFO.emailDisplay}
              </a>
              <a
                className="transition lg:hover:text-[var(--color-accent-soft)]"
                href={CONTACT_INFO.telegramHref}
                aria-label={CONTACT_INFO.telegramLabel}
                title={CONTACT_INFO.telegramLabel}
                target="_blank"
                rel="noreferrer"
              >
                Telegram: {CONTACT_INFO.telegramLabel}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs font-extralight text-zinc-500 [font-family:var(--font-body)] md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {BRAND.name}. Все права защищены.</div>
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
