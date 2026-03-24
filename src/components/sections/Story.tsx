import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

export function Story({
  id,
  onCta,
}: {
  id: string
  onCta: () => void
}) {
  return (
    <section id={id} className="border-t border-zinc-900 bg-[var(--color-bg)] py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="История"
          title="Традиции. Атмосфера. Детали."
          description="Стиль как в прототипе: тёмная палитра, строгая сетка, крупные заголовки с винтажным характером и много воздуха между блоками."
          right={
            <Button onClick={onCta} variant="outline">
              Записаться на консультацию
            </Button>
          }
        />

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-6 text-sm leading-7 text-zinc-300">
            <p>
              Мы работаем в классической школе барберинга: чистый контур, правильные переходы,
              грамотная геометрия. В процессе всегда объясняем, как укладывать и чем поддерживать
              форму.
            </p>
            <p>
              Пока без финальных фотографий и логотипа — поэтому закладываем дизайн так, чтобы он
              выглядел цельно даже на плейсхолдерах: рамки, тонкие линии, аккуратные акценты.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="border border-zinc-800 bg-[var(--color-bg)] p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-soft)]">
                  Без лишнего
                </div>
                <div className="mt-2 text-sm text-zinc-200">Минимализм, но с характером.</div>
              </div>
              <div className="border border-zinc-800 bg-[var(--color-bg)] p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-soft)]">
                  По записи
                </div>
                <div className="mt-2 text-sm text-zinc-200">Уважение к вашему времени.</div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] border border-zinc-800 bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-bg)]"
              >
                <div className="h-full w-full opacity-60 [background-image:radial-gradient(circle_at_35%_25%,rgba(138,115,86,0.18),transparent_55%)]" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
