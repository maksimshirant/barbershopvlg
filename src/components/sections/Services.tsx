import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

type Service = {
  title: string
  bookingService: string
  desc: string
  meta: string
  features: string[]
}

const SERVICES: Service[] = [
  {
    title: 'Классическая стрижка',
    bookingService: 'Классическая стрижка',
    desc: 'Чистая мужская стрижка под форму лица и привычную укладку.',
    meta: '45–60 мин • от 1500 ₽',
    features: ['Мытьё головы', 'Укладка', 'Консультация по форме'],
  },
  {
    title: 'Фейд / Тейпер',
    bookingService: 'Фейд / Тейпер',
    desc: 'Плотный переход, точный контур и аккуратный силуэт без компромиссов.',
    meta: '60 мин • от 1800 ₽',
    features: ['Высокий/средний/низкий фейд', 'Линии и контур', 'Финишная укладка'],
  },
  {
    title: 'Борода и уход',
    bookingService: 'Борода (моделирование)',
    desc: 'Моделирование, форма и аккуратная работа с линиями роста.',
    meta: '30–45 мин • от 900 ₽',
    features: ['Горячее полотенце', 'Контур', 'Масло/бальзам'],
  },
  {
    title: 'Комплексы',
    bookingService: 'Стрижка + борода',
    desc: 'Если нужно сразу собрать образ: стрижка, борода и финальная укладка.',
    meta: '75–90 мин • от 2300 ₽',
    features: ['Стрижка + борода', 'Комфортный тайминг', 'Один визит вместо двух'],
  },
]

export function Services({
  id,
  onPickService,
}: {
  id: string
  onPickService: (service: string) => void
}) {
  return (
    <section id={id} className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute -inset-px">
        <img
          src="/фон2.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,11,0.88)_0%,rgba(16,12,11,0.74)_28%,rgba(16,12,11,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_16%_10%,rgba(138,115,86,0.16),transparent_38%)]" />
      </div>

      <Container>
        <div className="relative">
          <div className="border-b border-white/10 pb-10">
            <div className="text-4xl leading-none tracking-[0.06em] text-[var(--color-accent-soft)] [font-family:var(--font-hero)] sm:text-5xl">
              Услуги
            </div>
            <h2 className="mt-4 max-w-2xl text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
              Выберите услугу и запишитесь на удобное время
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="group flex min-h-[320px] flex-col border border-white/10 bg-[rgba(16,12,11,0.3)] p-6 backdrop-blur-md transition duration-300 lg:hover:border-[var(--color-accent)]/30 lg:hover:bg-[rgba(16,12,11,0.4)] sm:min-h-[340px] sm:p-8"
              >
                <div className="max-w-[18rem]">
                  <div className="text-[11px] font-extralight uppercase tracking-[0.24em] text-[var(--color-accent-soft)] [font-family:var(--font-body)]">
                    {s.meta}
                  </div>
                  <div className="mt-4 text-[30px] leading-tight text-white [font-family:var(--font-montserrat)]">
                    {s.title}
                  </div>
                  <div className="mt-3 text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
                    {s.desc}
                  </div>
                </div>

                <ul className="mt-8 grid gap-3">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="text-xs font-extralight uppercase tracking-[0.18em] text-zinc-400 [font-family:var(--font-body)]"
                    >
                      • {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <Button onClick={() => onPickService(s.bookingService)} variant="outline">
                    Записаться на услугу
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
