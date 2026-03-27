import { CONTACT_INFO } from '../../content/siteConfig'
import { Container } from '../ui/Container'

export function Contact({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-transparent py-16 md:py-20"
    >
      <div className="absolute -inset-px bg-[linear-gradient(180deg,rgba(16,12,11,0.74),rgba(28,27,23,0.68))]" />

      <div className="relative z-10">
        <Container>
          <div className="border-b border-white/10 pb-10">
            <div className="text-4xl leading-none tracking-[0.06em] text-[var(--color-accent-soft)] [font-family:var(--font-hero)] sm:text-5xl">
              Контакты
            </div>
            <h2 className="mt-4 max-w-2xl text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
              Записаться и найти нас легко.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="flex flex-col justify-center gap-8">
              <div>
                <div className="text-[11px] font-extralight uppercase tracking-[0.24em] text-zinc-500 [font-family:var(--font-body)]">
                  Адрес
                </div>
                <div className="mt-3 text-3xl leading-tight text-white [font-family:var(--font-montserrat)]">
                  {CONTACT_INFO.address}
                </div>
              </div>

              <div>
                <div className="text-[11px] font-extralight uppercase tracking-[0.24em] text-zinc-500 [font-family:var(--font-body)]">
                  Телефон
                </div>
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="mt-3 block text-3xl leading-tight text-white transition lg:hover:text-[var(--color-accent-soft)] [font-family:var(--font-montserrat)]"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>

              <div>
                <div className="text-[11px] font-extralight uppercase tracking-[0.24em] text-zinc-500 [font-family:var(--font-body)]">
                  График
                </div>
                <div className="mt-3 text-3xl leading-tight text-white [font-family:var(--font-montserrat)]">
                  {CONTACT_INFO.hours}
                </div>
              </div>
            </div>

            <div className="overflow-hidden border border-white/10 bg-[rgba(16,12,11,0.25)]">
              <div className="relative aspect-[16/12]">
                <iframe
                  title="Карта"
                  src="https://yandex.ru/map-widget/v1/?ll=30.346483%2C59.938631&pt=30.346483%2C59.938631%2Cpm2rdm&z=16"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
