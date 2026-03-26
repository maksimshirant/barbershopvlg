import { useEffect, useRef, useState } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Benefits } from './components/sections/Benefits'
import { Services } from './components/sections/Services'
import { Pricing } from './components/sections/Pricing'
import { Barbers } from './components/sections/Barbers'
import { Gallery } from './components/sections/Gallery'
import { Reviews } from './components/sections/Reviews'
import { Faq } from './components/sections/Faq'
import { Contact } from './components/sections/Contact'
import { BookingModal } from './components/booking/BookingModal'
import { PrivacyPolicyModal } from './components/legal/PrivacyPolicyModal'
import type { BookingModalPreset } from './components/booking/types'

const NAV = [
  { href: '#services', label: 'Услуги' },
  { href: '#barbers', label: 'Мастера' },
  { href: '#works', label: 'Работы' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contact', label: 'Контакты' },
] as const

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [preset, setPreset] = useState<BookingModalPreset | null>(null)
  const [servicesBackdropOpacity, setServicesBackdropOpacity] = useState(0)
  const servicesStageRef = useRef<HTMLDivElement | null>(null)

  const onOpenBooking = (nextPreset?: BookingModalPreset) => {
    setPreset(nextPreset ?? null)
    setBookingOpen(true)
  }

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')
    return () => document.documentElement.classList.remove('scroll-smooth')
  }, [])

  useEffect(() => {
    const updateBackdrop = () => {
      const stage = servicesStageRef.current
      if (!stage) return

      const rect = stage.getBoundingClientRect()
      const fadeDistance = Math.max(window.innerHeight * 0.45, 220)
      const nextOpacity = 1 - Math.min(Math.max(rect.top / fadeDistance, 0), 1)

      setServicesBackdropOpacity((current) =>
        Math.abs(current - nextOpacity) < 0.01 ? current : nextOpacity,
      )
    }

    updateBackdrop()
    window.addEventListener('scroll', updateBackdrop, { passive: true })
    window.addEventListener('resize', updateBackdrop)

    return () => {
      window.removeEventListener('scroll', updateBackdrop)
      window.removeEventListener('resize', updateBackdrop)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] [font-family:var(--font-body)]">
      <div
        aria-hidden="true"
        className="services-scroll-backdrop"
        style={{ opacity: servicesBackdropOpacity }}
      />
      <Header nav={NAV} onOpenBooking={() => onOpenBooking()} />
      <main className="relative z-10">
        <Hero onPrimaryCta={() => onOpenBooking({ service: 'Классическая стрижка' })} />
        <Benefits />
        <div ref={servicesStageRef} className="services-scroll-stage">
          <Services id="services" onPickService={(service) => onOpenBooking({ service })} />
          <Pricing id="pricing" onBook={(service) => onOpenBooking({ service })} />
          <Barbers id="barbers" onBook={(barber) => onOpenBooking({ barber })} />
          <Gallery id="works" />
          <Reviews id="reviews" onOpenBooking={() => onOpenBooking()} />
          <Faq />
          <Contact id="contact" />
        </div>
      </main>
      <div className="services-scroll-stage">
        <Footer
          nav={NAV}
          onOpenBooking={() => onOpenBooking()}
          onOpenPrivacy={() => setPrivacyOpen(true)}
        />
      </div>

      <BookingModal
        open={bookingOpen}
        preset={preset}
        onClose={() => setBookingOpen(false)}
      />
      <PrivacyPolicyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  )
}
