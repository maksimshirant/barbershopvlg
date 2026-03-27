import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { assetUrl } from '../../lib/assetUrl'

const HERO_FACTS = [
  { value: '5/5', label: 'рейтинг гостей' },
  { value: '7/7', label: 'работаем ежедневно' },
  { value: '10 мин', label: 'от центра города' },
]

export function Hero({ onPrimaryCta }: { onPrimaryCta: () => void }) {
  const heroBackground = assetUrl('запасной фон.jpg')

  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10">
      <div className="absolute -inset-px">
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,12,11,0.92)_0%,rgba(16,12,11,0.66)_34%,rgba(16,12,11,0.42)_62%,rgba(16,12,11,0.76)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_14%_18%,rgba(138,115,86,0.18),transparent_42%),linear-gradient(180deg,rgba(28,27,23,0.16),rgba(16,12,11,0.58))]" />
      </div>
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

      <Container>
        <div className="relative grid gap-10 py-14 sm:py-16 md:items-center md:py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,430px)] lg:gap-12 xl:gap-16 xl:py-28">
          <div className="min-w-0 max-w-2xl lg:pr-6 xl:pr-10">
            <h1 className="mt-4 max-w-[10ch] origin-top-left text-[2.2rem] leading-[0.98] tracking-[0.01em] text-white [font-family:var(--font-hero)] [transform:scaleX(0.93)_scaleY(1.15)] max-[380px]:max-w-[9.5ch] max-[380px]:text-[1.85rem] sm:mt-6 sm:max-w-[12ch] sm:text-[3rem] sm:[transform:scaleY(1.15)] md:text-[3.75rem] xl:text-[4.5rem]">
              МУЖСКИЕ СТРИЖКИ И БРИТЬЁ БЕЗ КОМПРОМИССОВ
            </h1>
            <div className="mt-[11%]">
              <p className="max-w-xl text-sm font-extralight leading-6 text-zinc-300 [font-family:var(--font-body)] sm:text-base sm:leading-7">
                Очень пафосный текст про то что мы делаем и почему мы лучшие
              </p>

              <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  onClick={onPrimaryCta}
                  variant="primary"
                  className="border-[#8A7356] bg-[#8A7356] text-[#100C0B] shadow-[0_16px_40px_rgba(138,115,86,0.16)] lg:hover:border-[#8A7356] lg:hover:bg-[#8A7356]"
                >
                  Записаться онлайн
                </Button>
                <Button
                  onClick={() => {
                    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  variant="outline"
                >
                  Посмотреть услуги
                </Button>
              </div>

              <HeroFacts className="mt-10 border-t border-white/10 pt-8 lg:hidden" />
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-end lg:pl-20 xl:pl-32">
            <HeroFacts className="w-full max-w-[430px] self-start border border-white/10 bg-[rgba(16,12,11,0.3)] p-8 backdrop-blur-md lg:-translate-y-14 xl:-translate-y-20" />
          </div>
        </div>
      </Container>
    </section>
  )
}

function HeroFacts({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
        {HERO_FACTS.map((fact) => (
          <div key={fact.label}>
            <div className="text-4xl leading-none text-white [font-family:var(--font-hero)]">
              {fact.value}
            </div>
            <div className="mt-2 text-[11px] font-extralight uppercase tracking-[0.24em] text-zinc-500 [font-family:var(--font-body)]">
              {fact.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
