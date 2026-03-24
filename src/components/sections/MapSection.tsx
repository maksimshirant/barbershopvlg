import { Container } from '../ui/Container'

export function MapSection() {
  return (
    <section className="border-t border-zinc-900 bg-[var(--color-bg)] py-16 md:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-soft)]">
              Карта
            </div>
            <div className="mt-2 text-3xl font-semibold tracking-tight text-zinc-50 [font-family:Cinzel,serif] sm:text-4xl">
              Как нас найти
            </div>
            <div className="mt-5 text-sm leading-7 text-zinc-300">
              Здесь будет интерактивная карта (Яндекс/Google) после подтверждения адреса. Пока —
              стилизованный плейсхолдер в тонкой рамке.
            </div>

            <div className="mt-8 grid gap-4">
              <div className="border border-zinc-800 bg-[rgba(16,12,11,0.2)] px-5 py-4">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
                  Метро / остановка
                </div>
                <div className="mt-2 text-sm text-zinc-200">Остановка “Центр” (пример)</div>
              </div>
              <div className="border border-zinc-800 bg-[rgba(16,12,11,0.2)] px-5 py-4">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
                  Парковка
                </div>
                <div className="mt-2 text-sm text-zinc-200">Есть рядом со входом</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden border border-zinc-800 bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-bg)]">
            <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_30%_20%,rgba(138,115,86,0.14),transparent_60%),linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:auto,56px_56px,56px_56px]" />
            <div className="relative aspect-[16/9] w-full" />
            <div className="border-t border-zinc-800 bg-[rgba(16,12,11,0.3)] px-6 py-5 backdrop-blur-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-soft)]">
                Адрес
              </div>
              <div className="mt-2 text-sm text-zinc-200">Волгоград, ул. Примерная, 10</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
