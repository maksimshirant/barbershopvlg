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
    name: 'Иса',
    role: 'Senior barber',
    experience: '7 лет опыта',
    about: 'Сильнее всего работает с fade и классическими формами.',
  },
  {
    name: 'Олег',
    role: 'Top barber',
    experience: '6 лет опыта',
    about: 'Любит чистую геометрию, бороду и аккуратный силуэт.',
  },
  {
    name: 'Мурад',
    role: 'Barber',
    experience: '4 года опыта',
    about: 'Хорошо чувствует длину и текстуру под повседневную укладку.',
  },
  {
    name: 'Рузанна',
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
      className="relative overflow-hidden bg-transparent py-16 md:py-20"
    >
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
                className="group relative min-w-full snap-start overflow-hidden border border-white/10 bg-[rgba(16,12,11,0.18)] backdrop-blur-md md:min-w-0"
              >
                <div className="relative aspect-[4/5] bg-[linear-gradient(145deg,rgba(28,27,23,0.76),rgba(16,12,11,0.88))]">
                  <img
                    src="/чел.jpg"
                    alt={barber.name}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 lg:group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(138,115,86,0.16),transparent_34%),radial-gradient(circle_at_72%_74%,rgba(255,255,255,0.05),transparent_26%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,10,0.1)_0%,rgba(12,10,10,0.18)_28%,rgba(12,10,10,0.82)_72%,rgba(12,10,10,0.96)_100%)]" />

                  <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
                    <div className="text-[1.65rem] leading-none text-white [font-family:var(--font-montserrat)] sm:text-[1.9rem]">
                      {barber.name}
                    </div>
                    <div className="mt-2 text-[10px] font-extralight uppercase tracking-[0.2em] text-[var(--color-accent-soft)] [font-family:var(--font-body)] sm:text-[11px]">
                      {barber.role} • {barber.experience}
                    </div>
                    <p className="mt-3 max-w-[18rem] text-[13px] font-extralight leading-5 text-zinc-200 [font-family:var(--font-body)] sm:text-sm sm:leading-6">
                      {barber.about}
                    </p>
                    <div className="mt-4">
                      <Button
                        onClick={() => onBook(barber.name)}
                        variant="outline"
                        size="xs"
                        className="flex w-full justify-center border-white/20 bg-black/10 backdrop-blur-sm xl:w-auto"
                      >
                        Записаться к мастеру
                      </Button>
                    </div>
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
