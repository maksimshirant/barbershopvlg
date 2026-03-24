import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const REVIEWS = [
  {
    name: 'Илья',
    role: 'постоянный гость',
    quote: 'Сказал, как обычно укладываю волосы, и форму сразу попали точно. Без лишних слов и без сюрпризов.',
  },
  {
    name: 'Роман',
    role: 'новый клиент',
    quote: 'Первый визит прошёл спокойно: удобная запись, чёткое время, понятный прайс и чистый fade без доработок дома.',
  },
  {
    name: 'Артём',
    role: 'гость с бородой',
    quote: 'Здесь не просто подровняли бороду, а собрали весь образ. Понравилось внимание к деталям и аккуратность.',
  },
  {
    name: 'Максим',
    role: 'ходит раз в 3 недели',
    quote: 'Нравится предсказуемый результат. Приходишь в своё время, уходишь с нужной формой, без ожидания и шума.',
  },
]

export function Reviews({
  id,
  onOpenBooking,
}: {
  id: string
  onOpenBooking: () => void
}) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-[var(--color-bg)] bg-cover bg-center bg-no-repeat py-16 md:py-20"
      style={{ backgroundImage: "url('/фон2.jpg')" }}
    >
      <div className="absolute -inset-px bg-[linear-gradient(180deg,rgba(16,12,11,0.76),rgba(28,27,23,0.66))]" />

      <div className="relative z-10">
        <Container>
          <div className="flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="text-4xl leading-none tracking-[0.06em] text-[var(--color-accent-soft)] [font-family:var(--font-hero)] sm:text-5xl">
                Отзывы
              </div>
              <h2 className="mt-4 max-w-2xl text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
                Нам доверяют форму, сервис и точность результата
              </h2>
            </div>
            <div className="shrink-0">
              <Button onClick={onOpenBooking} variant="outline">
                Записаться онлайн
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[280px_1fr]">
            <div className="border border-white/10 bg-[rgba(16,12,11,0.3)] p-6 backdrop-blur-md">
              <div className="text-6xl leading-none text-white [font-family:var(--font-montserrat)]">
                4.9
              </div>
              <div className="mt-3 text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
                Средняя оценка гостей. Возвращаются за стабильным результатом, спокойной атмосферой и удобной записью.
              </div>
              <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 text-sm font-extralight text-zinc-300 [font-family:var(--font-body)]">
                <div>218+ отзывов на локальных площадках</div>
                <div>7 дней в неделю, без лишнего ожидания</div>
                <div>Мастера, к которым записываются повторно</div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {REVIEWS.map((review) => (
                <article key={review.name} className="border border-white/10 bg-[rgba(16,12,11,0.25)] p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-lg text-white [font-family:var(--font-montserrat)]">
                        {review.name}
                      </div>
                      <div className="mt-1 text-[11px] font-extralight uppercase tracking-[0.24em] text-zinc-500 [font-family:var(--font-body)]">
                        {review.role}
                      </div>
                    </div>
                    <div className="text-sm font-extralight text-[var(--color-accent)] [font-family:var(--font-body)]">
                      ★★★★★
                    </div>
                  </div>
                  <p className="mt-5 text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
                    “{review.quote}”
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
