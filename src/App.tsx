
import { useEffect, useState } from 'react'
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

  const onOpenBooking = (nextPreset?: BookingModalPreset) => {
    setPreset(nextPreset ?? null)
    setBookingOpen(true)
  }

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')
    return () => document.documentElement.classList.remove('scroll-smooth')
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] [font-family:var(--font-body)]">
      <Header nav={NAV} onOpenBooking={() => onOpenBooking()} />
      <main>
        <Hero onPrimaryCta={() => onOpenBooking({ service: 'Классическая стрижка' })} />
        <Benefits />
        <Services id="services" onPickService={(service) => onOpenBooking({ service })} />
        <Pricing id="pricing" onBook={(service) => onOpenBooking({ service })} />
        <Barbers id="barbers" onBook={(barber) => onOpenBooking({ barber })} />
        <Gallery id="works" />
        <Reviews id="reviews" onOpenBooking={() => onOpenBooking()} />
        <Faq />
        <Contact id="contact" />
      </main>
      <Footer
        nav={NAV}
        onOpenBooking={() => onOpenBooking()}
        onOpenPrivacy={() => setPrivacyOpen(true)}
      />

      <BookingModal
        open={bookingOpen}
        preset={preset}
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onClose={() => setBookingOpen(false)}
      />
      <PrivacyPolicyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  )
}
