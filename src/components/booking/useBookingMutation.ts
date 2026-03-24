import { useMutation } from '@tanstack/react-query'
import type { BookingPayload, BookingResult } from '../../api/contact'
import { fakeSendBooking } from '../../api/contact'

export function useBookingMutation() {
  return useMutation<BookingResult, Error, BookingPayload>({
    mutationFn: fakeSendBooking,
  })
}

