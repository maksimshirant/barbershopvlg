import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

type PriceRow = {
  service: string
  duration: string
  price: string
}

const ROWS: PriceRow[] = [
  { service: 'Классическая стрижка', duration: '45 мин', price: '1500 ₽' },
  { service: 'Фейд / Тейпер', duration: '60 мин', price: '1800 ₽' },
  { service: 'Борода (моделирование)', duration: '30 мин', price: '900 ₽' },
  { service: 'Стрижка + борода', duration: '75 мин', price: '2300 ₽' },
  { service: 'Королевское бритьё', duration: '40 мин', price: '1400 ₽' },
]

export function Pricing({
  id,
  onBook,
}: {
  id: string
  onBook: (service: string) => void
}) {
  return (
    <section id={id} className="border-t border-white/10 bg-[var(--color-bg)] py-16 md:py-20">
      <Container>
        <div className="border-b border-white/10 pb-10">
          <div className="text-4xl leading-none tracking-[0.06em] text-[var(--color-accent-soft)] [font-family:var(--font-hero)] sm:text-5xl">
            Прайс
          </div>
          <h2 className="mt-4 max-w-2xl text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
            Прайс без скрытых сюрпризов
          </h2>
        </div>
      </Container>

      <div className="mt-10 border-y border-white/10 bg-[linear-gradient(180deg,rgba(28,27,23,0.96),rgba(16,12,11,0.98))]">
        <div className="hidden border-b border-white/10 bg-[rgba(16,12,11,0.2)] md:block">
          <Container>
            <div className="grid grid-cols-[minmax(0,1fr)_170px_170px] gap-x-16 py-5">
              <div className="text-xs font-extralight uppercase tracking-[0.22em] text-zinc-300 [font-family:var(--font-body)]">
                Услуга
              </div>
              <div className="text-xs font-extralight uppercase tracking-[0.22em] text-zinc-300 [font-family:var(--font-body)]">
                Время
              </div>
              <div className="text-xs font-extralight uppercase tracking-[0.22em] text-zinc-300 [font-family:var(--font-body)]">
                Цена
              </div>
            </div>
          </Container>
        </div>

        <div className="divide-y divide-white/10">
          {ROWS.map((row) => (
            <button
              key={row.service}
              type="button"
              onClick={() => onBook(row.service)}
              className="w-full cursor-pointer appearance-none bg-transparent text-left transition lg:hover:bg-white/[0.03]"
            >
              <Container>
                <div className="grid gap-5 py-6 md:grid-cols-[minmax(0,1fr)_170px_170px] md:items-center md:gap-x-16">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="text-lg text-white [font-family:var(--font-montserrat)]">
                        {row.service}
                      </div>
                      {row.service === 'Стрижка + борода' ? (
                        <span className="border border-[var(--color-accent)]/35 bg-[var(--color-accent)]/10 px-2 py-1 text-[10px] font-extralight uppercase tracking-[0.22em] text-[var(--color-accent-soft)] [font-family:var(--font-body)]">
                          Чаще всего выбирают
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-3 grid gap-3 text-[11px] font-extralight uppercase tracking-[0.2em] text-zinc-500 [font-family:var(--font-body)] md:hidden">
                      <div>
                        Время: <span className="text-zinc-300">{row.duration}</span>
                      </div>
                      <div>
                        Цена: <span className="text-[var(--color-accent-soft)]">{row.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden text-xs font-extralight uppercase tracking-[0.18em] text-zinc-300 [font-family:var(--font-body)] md:block">
                    {row.duration}
                  </div>

                  <div className="hidden text-sm font-extralight text-[var(--color-accent-soft)] [font-family:var(--font-body)] md:block">
                    {row.price}
                  </div>
                </div>
              </Container>
            </button>
          ))}
        </div>

        <div className="border-t border-white/10 bg-[rgba(16,12,11,0.2)]">
          <Container>
            <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm font-extralight text-zinc-300 [font-family:var(--font-body)]">
                Если нужна рекомендация по услуге, подскажем перед подтверждением записи.
              </div>
              <Button
                onClick={() => onBook('Консультация')}
                variant="outline"
                size="xs"
              >
                Записаться на консультацию
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}
