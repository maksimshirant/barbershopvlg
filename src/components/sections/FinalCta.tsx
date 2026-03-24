import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function FinalCta({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section className="border-t border-white/10 bg-[linear-gradient(135deg,#1C1B17,#100C0B)] py-16 md:py-20">
      <Container>
        <div className="border border-[var(--color-accent)]/25 bg-[rgba(16,12,11,0.2)] px-6 py-10 sm:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--color-accent-soft)]">
              Финальный шаг
            </div>
            <h2 className="mt-4 text-4xl leading-[1.02] text-white [font-family:var(--font-display)] sm:text-5xl">
              Готов обновить стиль? Выбери мастера и приходи без ожидания.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-300">
              Запись занимает меньше минуты. Оставь имя и телефон, а остальное мы подтвердим с тобой спокойно и без лишних звонков.
            </p>
            <div className="mt-8">
              <Button onClick={onOpenBooking} variant="primary">
                Записаться онлайн
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
