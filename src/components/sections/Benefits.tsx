import { Container } from '../ui/Container'

const BENEFITS = [
  {
    title: 'Заголовок преимущества',
    text: 'Короткое описание преимущества в одну-две строки.',
  },
  {
    title: 'Заголовок преимущества',
    text: 'Короткое описание преимущества в одну-две строки.',
  },
  {
    title: 'Заголовок преимущества',
    text: 'Короткое описание преимущества в одну-две строки.',
  },
  {
    title: 'Заголовок преимущества',
    text: 'Короткое описание преимущества в одну-две строки.',
  },
]

export function Benefits() {
  return (
    <section className="border-t border-white/10 bg-[var(--color-bg)] py-16 md:py-20">
      <Container>
        <div className="grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {BENEFITS.map((item, index) => (
            <article
              key={`${index}-${item.title}`}
              className="group relative bg-[linear-gradient(180deg,rgba(28,27,23,0.96)_0%,rgba(16,12,11,0.98)_100%)] p-7 transition duration-300 lg:hover:bg-[linear-gradient(180deg,rgba(28,27,23,0.98)_0%,rgba(16,12,11,1)_100%)] md:min-h-[280px]"
            >
              <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[var(--color-accent)] transition-transform duration-300 lg:group-hover:scale-x-100" />
              <h2 className="max-w-[14rem] text-[1.5rem] leading-tight text-white [font-family:var(--font-montserrat)] sm:text-[1.75rem]">
                {item.title}
              </h2>
              <p className="mt-5 max-w-[16rem] text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
