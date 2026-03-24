import { useRef } from 'react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

type Barber = {
  name: string
  role: string
  experience: string
  about: string
}

const BARBERS: Barber[] = [
  {
    name: 'Алексей',
    role: 'Senior barber',
    experience: '7 лет опыта',
    about: 'Сильнее всего работает с fade и классическими формами.',
  },
  {
    name: 'Максим',
    role: 'Top barber',
    experience: '6 лет опыта',
    about: 'Любит чистую геометрию, бороду и аккуратный силуэт.',
  },
  {
    name: 'Иван',
    role: 'Barber',
    experience: '4 года опыта',
    about: 'Хорошо чувствует длину и текстуру под повседневную укладку.',
  },
  {
    name: 'Даниил',
    role: 'Barber',
    experience: '5 лет опыта',
    about: 'Работает спокойно и точно, особенно в комплексах стрижка + борода.',
  },
]

export function Barbers({
  id,
  onBook,
}: {
  id: string
  onBook: (barber: string) => void
}) {
  const sliderRef = useRef<HTMLDivElement | null>(null)

  const scrollCards = (direction: 'prev' | 'next') => {
    const slider = sliderRef.current
    if (!slider) return

    const cards = Array.from(slider.querySelectorAll('article'))
    const firstCard = cards[0]
    const cardWidth = firstCard instanceof HTMLElement ? firstCard.offsetWidth : slider.clientWidth
    const styles = window.getComputedStyle(slider)
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '0') || 0
    const offset = cardWidth + gap
    const maxScroll = slider.scrollWidth - slider.clientWidth
    const nextScrollLeft = direction === 'next' ? slider.scrollLeft + offset : slider.scrollLeft - offset
    const lastCard = cards[cards.length - 1]
    const lastCardLeft =
      lastCard instanceof HTMLElement ? lastCard.offsetLeft - slider.offsetLeft : maxScroll

    if (direction === 'next' && slider.scrollLeft >= lastCardLeft - 4) {
      slider.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }

    if (direction === 'prev' && slider.scrollLeft <= 4) {
      slider.scrollTo({ left: lastCardLeft, behavior: 'smooth' })
      return
    }

    slider.scrollBy({
      left: direction === 'next' ? offset : -offset,
      behavior: 'smooth',
    })
  }

  return (
    <section
      id={id}
      className="relative overflow-hidden bg-[var(--color-bg)] bg-cover bg-center bg-no-repeat py-16 md:py-20"
      style={{ backgroundImage: "url('/фон3.png?v=1')" }}
    >
      <div className="absolute -inset-px bg-[linear-gradient(180deg,rgba(16,12,11,0.72),rgba(28,27,23,0.58))]" />

      <div className="relative z-10">
        <Container>
          <div className="border-b border-white/10 pb-10">
            <div className="text-4xl leading-none tracking-[0.06em] text-[var(--color-accent-soft)] [font-family:var(--font-hero)] sm:text-5xl">
              Команда
            </div>
            <h2 className="mt-4 max-w-2xl text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
              Выбери мастера, которому доверяешь форму и стиль
            </h2>
          </div>
        </Container>

        <div className="mt-10 px-4 sm:px-6 lg:px-8">
          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0 xl:grid-cols-4"
          >
            {BARBERS.map((barber) => (
              <article
                key={barber.name}
                className="min-w-full snap-start overflow-hidden border border-white/10 bg-[rgba(16,12,11,0.3)] backdrop-blur-md md:min-w-0"
              >
                <div className="relative aspect-[4/5] border-b border-white/10 bg-[linear-gradient(145deg,rgba(28,27,23,0.95),rgba(16,12,11,1))]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(138,115,86,0.24),transparent_34%),radial-gradient(circle_at_72%_74%,rgba(255,255,255,0.08),transparent_26%)]" />
                </div>

                <div className="p-7 sm:p-8">
                  <div className="text-[2rem] leading-tight text-white [font-family:var(--font-montserrat)]">
                    {barber.name}
                  </div>
                  <div className="mt-2 text-[11px] font-extralight uppercase tracking-[0.24em] text-[var(--color-accent-soft)] [font-family:var(--font-body)]">
                    {barber.role} • {barber.experience}
                  </div>
                  <p className="mt-4 text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
                    {barber.about}
                  </p>
                  <div className="mt-6">
                    <Button
                      onClick={() => onBook(barber.name)}
                      variant="outline"
                      size="xs"
                      className="flex w-full justify-center xl:w-auto"
                    >
                      Записаться к мастеру
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4 flex gap-3 md:hidden">
            <Button
              type="button"
              variant="outline"
              size="xs"
              className="flex-1"
              onClick={() => scrollCards('prev')}
              aria-label="Предыдущий мастер"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M15 6L9 12L15 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="xs"
              className="flex-1"
              onClick={() => scrollCards('next')}
              aria-label="Следующий мастер"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
