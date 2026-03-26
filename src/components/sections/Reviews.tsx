import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const REVIEWS = [
  {
    name: 'Никита Зорин',
    details: '2 отзыва',
    date: '16 сентября 2025',
    quote:
      'Прекрасное уютное место, где вас хорошо обслужат. Особенное спасибо мастеру Олегу, который ответственно подошел к работе. Я остался доволен причёской всем советую туда приходить постригаться .',
  },
  {
    name: 'Наталья Пенькова',
    details: '1 отзыв',
    date: '18 января 2026',
    quote:
      'Очень понравилось, делали стрижку сыну, первый барбершоп, после которого он доволен. Приятная обстановка, отдельное спасибо мастеру Исаму!',
  },
  {
    name: 'Городской житель',
    details: '1 отзыв',
    date: '29 июня 2025',
    quote:
      'Сегодня не ожинанно для себя, открыл это замечательное место , пришёл просто подстричь бороду , а эти красавцы побрили и не смог себе отказать в стрижке, всё на высшем уровне , Спасибо большое!\nУдачи и побольше клиентов!!!',
  },
  {
    name: 'Богдан Путилин',
    details: '1 отзыв',
    date: '23 марта 2025',
    quote:
      'Приветствую✌🏻\nОчень хороший барбершоп, сегодня побывал в нем и остался очень доволен, барьеры профессионалы своего ремесла, хочу отметить Мурада и Рузанну, они знают свое дело, отзывчие добрые люди, буду советовать своим близким и друзьям\nУдачи!',
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
      className="relative overflow-hidden bg-transparent py-16 md:py-20"
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
                5/5
              </div>
              <div className="mt-3 text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
                Средняя оценка гостей: 5 из 5. Возвращаются за стабильным результатом, спокойной атмосферой и удобной записью.
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
                        {review.details}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-extralight text-[var(--color-accent)] [font-family:var(--font-body)]">
                        ★★★★★
                      </div>
                      <div className="mt-1 text-[11px] font-extralight uppercase tracking-[0.2em] text-zinc-500 [font-family:var(--font-body)]">
                        {review.date}
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 whitespace-pre-line text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
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
