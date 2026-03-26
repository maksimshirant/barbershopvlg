import { useState } from 'react'
import { Container } from '../ui/Container'

const ITEMS = [
  {
    question: 'Нужна ли предварительная запись?',
    answer: 'Да. Так мы держим спокойный график без очередей и принимаем каждого гостя в своё время.',
  },
  {
    question: 'Можно ли записаться день в день?',
    answer: 'Часто да. Если в расписании есть окно, подтверждаем запись в тот же день.',
  },
  {
    question: 'Сколько длится мужская стрижка?',
    answer: 'В среднем 45–60 минут. Комплексы со стрижкой и бородой занимают дольше.',
  },
  {
    question: 'Какие способы оплаты доступны?',
    answer: 'Принимаем наличные и банковские карты. Подробности можно уточнить при записи.',
  },
  {
    question: 'Есть ли парковка и как вас найти?',
    answer: 'Да, рядом есть парковка. В блоке контактов собран ориентир по входу и расположению.',
  },
]

export function Faq() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="border-t border-white/10 bg-transparent py-16 md:py-20">
      <Container>
        <div className="border-b border-white/10 pb-10">
          <div className="text-4xl leading-none tracking-[0.06em] text-[var(--color-accent-soft)] [font-family:var(--font-hero)] sm:text-5xl">
            FAQ
          </div>
          <h2 className="mt-4 max-w-2xl text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
            Закрываем вопросы до записи
          </h2>
        </div>

        <div className="mt-10 grid gap-4">
          {ITEMS.map((item, index) => {
            const open = index === active

            return (
              <article key={item.question} className="border border-white/10 bg-[rgba(16,12,11,0.2)]">
                <button
                  type="button"
                  onClick={() => setActive(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="text-lg text-white [font-family:var(--font-montserrat)]">
                    {item.question}
                  </span>
                  <span className="text-xs font-extralight uppercase tracking-[0.24em] text-[var(--color-accent-soft)] [font-family:var(--font-body)]">
                    {open ? 'Скрыть' : 'Открыть'}
                  </span>
                </button>
                {open ? (
                  <div className="border-t border-white/10 px-5 py-5 text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
                    {item.answer}
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
