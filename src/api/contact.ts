export type BookingPayload = {
  name: string
  phone: string
  service?: string
  barber?: string
  datetime?: string
  comment?: string
}

export type BookingResult = { ok: true }

export async function fakeSendBooking(payload: BookingPayload): Promise<BookingResult> {
  await new Promise((r) => setTimeout(r, 900))

  if (!payload.name.trim()) throw new Error('Укажите имя')
  if (!payload.phone.trim()) throw new Error('Укажите телефон')

  return { ok: true }
}

