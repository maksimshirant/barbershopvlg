import { Container } from '../ui/Container'

export function Contact({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-[var(--color-bg)] bg-cover bg-center bg-no-repeat py-16 md:py-20"
      style={{ backgroundImage: "url('/контакты.jpg')" }}
    >
      <div className="absolute -inset-px bg-[linear-gradient(180deg,rgba(16,12,11,0.74),rgba(28,27,23,0.68))]" />

      <div className="relative z-10">
        <Container>
          <div className="border-b border-white/10 pb-10">
            <div className="text-4xl leading-none tracking-[0.06em] text-[var(--color-accent-soft)] [font-family:var(--font-hero)] sm:text-5xl">
              Контакты
            </div>
            <h2 className="mt-4 max-w-2xl text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
              Адрес, график и карта в одном спокойном блоке
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="flex flex-col justify-center gap-8">
              <div>
                <div className="text-[11px] font-extralight uppercase tracking-[0.24em] text-zinc-500 [font-family:var(--font-body)]">
                  Адрес
                </div>
                <div className="mt-3 text-3xl leading-tight text-white [font-family:var(--font-montserrat)]">
                  Волгоград, Аллея Героев
                </div>
              </div>

              <div>
                <div className="text-[11px] font-extralight uppercase tracking-[0.24em] text-zinc-500 [font-family:var(--font-body)]">
                  Телефон
                </div>
                <a
                  href="tel:+79000000000"
                  className="mt-3 block text-3xl leading-tight text-white transition lg:hover:text-[var(--color-accent-soft)] [font-family:var(--font-montserrat)]"
                >
                  +7 (900) 000-00-00
                </a>
              </div>

              <div>
                <div className="text-[11px] font-extralight uppercase tracking-[0.24em] text-zinc-500 [font-family:var(--font-body)]">
                  График
                </div>
                <div className="mt-3 text-3xl leading-tight text-white [font-family:var(--font-montserrat)]">
                  Ежедневно 10:00-21:00
                </div>
              </div>
            </div>

            <div className="overflow-hidden border border-white/10 bg-[rgba(16,12,11,0.25)]">
              <div className="relative aspect-[16/12]">
                <iframe
                  title="Яндекс Карта Волгоград"
                  src="https://yandex.ru/map-widget/v1/?ll=44.501842%2C48.707067&mode=search&text=%D0%92%D0%BE%D0%BB%D0%B3%D0%BE%D1%80%D0%B0%D0%B4%2C%20%D0%90%D0%BB%D0%BB%D0%B5%D1%8F%20%D0%93%D0%B5%D1%80%D0%BE%D0%B5%D0%B2&z=15"
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
