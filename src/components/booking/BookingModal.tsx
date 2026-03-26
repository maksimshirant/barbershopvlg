import { Modal } from '../ui/Modal'
import type { BookingModalPreset } from './types'

const YCLIENTS_IFRAME_SRC = 'https://wXXXXXX.yclients.com/'

export function BookingModal({
  open,
  preset,
  onClose,
}: {
  open: boolean
  preset: BookingModalPreset | null
  onClose: () => void
}) {
  const bookingTitle = preset?.service
    ? `Онлайн запись на услугу «${preset.service}».`
    : preset?.barber
      ? `Онлайн запись к мастеру ${preset.barber}.`
      : 'Выберите услугу, мастера и удобное время прямо в виджете.'

  return (
    <Modal
      open={open}
      title={bookingTitle}
      onClose={onClose}
      panelClassName="max-w-5xl"
      contentClassName="px-0 py-0 sm:px-0 sm:py-0"
      contentScrollable={false}
    >
      <div className="bg-[#120e0d]">
        <iframe
          title="Онлайн запись YCLIENTS"
          src={YCLIENTS_IFRAME_SRC}
          className="block h-[calc(100vh-11.5rem)] min-h-[545px] w-full border-0 sm:h-[78vh] sm:min-h-[620px]"
          loading="lazy"
        />
      </div>
    </Modal>
  )
}
