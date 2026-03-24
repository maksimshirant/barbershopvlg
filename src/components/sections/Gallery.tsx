import { Container } from '../ui/Container'

const WORKS = [
  { title: 'Skin fade', meta: 'Чистый переход и плотный контур', image: '/works/work-1.jpg' },
  { title: 'Texture crop', meta: 'Форма под естественную укладку', image: '/works/work-2.jpg' },
  { title: 'Beard design', meta: 'Симметрия и аккуратный силуэт', image: '/works/work-3.jpg' },
  { title: 'Classic scissor cut', meta: 'Спокойная длина и пластика', image: '/works/work-4.jpg' },
  { title: 'Buzz + beard', meta: 'Минималистичный уход без лишнего', image: '/works/work-5.jpg' },
  { title: 'Shop atmosphere', meta: 'Кожа, металл, тёплый свет', image: '/works/work-6.jpg' },
]

export function Gallery({ id }: { id: string }) {
  return (
    <section id={id} className="border-t border-white/10 bg-[var(--color-bg)] py-16 md:py-20">
      <Container>
        <div className="border-b border-white/10 pb-10">
          <div className="text-4xl leading-none tracking-[0.06em] text-[var(--color-accent-soft)] [font-family:var(--font-hero)] sm:text-5xl">
            Работы
          </div>
          <h2 className="mt-4 max-w-2xl text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
            Результат должен считываться без длинных объяснений
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {WORKS.map((work) => (
            <article
              key={work.title}
              className="group relative overflow-hidden border border-white/10 bg-[var(--color-surface)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 lg:group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(138,115,86,0.16),transparent_36%),radial-gradient(circle_at_75%_70%,rgba(255,255,255,0.05),transparent_34%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.14)_42%,rgba(0,0,0,0.78)_100%)]" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-2xl text-white [font-family:var(--font-montserrat)]">
                    {work.title}
                  </div>
                  <div className="mt-2 max-w-[18rem] text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
                    {work.meta}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
