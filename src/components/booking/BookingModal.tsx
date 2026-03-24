import { useEffect, useEffectEvent, useState } from 'react'
import { Modal } from '../ui/Modal'
import { Button } from '../ui/Button'
import type { BookingModalPreset } from './types'
import { useBookingMutation } from './useBookingMutation'

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

function normalizePhone(raw: string) {
  return raw.replace(/[^\d+]/g, '')
}

type BookingFormState = {
  name: string
  phone: string
  service: string
  barber: string
  datetime: string
  privacyAccepted: boolean
}

const SERVICE_OPTIONS = [
  'Консультация',
  'Классическая стрижка',
  'Фейд / Тейпер',
  'Борода (моделирование)',
  'Стрижка + борода',
  'Королевское бритьё',
]

const BARBER_OPTIONS = ['Алексей', 'Максим', 'Иван', 'Даниил']

function createInitialForm(preset: BookingModalPreset | null): BookingFormState {
  return {
    name: '',
    phone: '',
    service: preset?.service ?? '',
    barber: preset?.barber ?? '',
    datetime: '',
    privacyAccepted: false,
  }
}

export function BookingModal({
  open,
  preset,
  onClose,
  onOpenPrivacy,
}: {
  open: boolean
  preset: BookingModalPreset | null
  onClose: () => void
  onOpenPrivacy: () => void
}) {
  const mutation = useBookingMutation()
  const resetMutation = useEffectEvent(() => {
    mutation.reset()
  })
  const [form, setForm] = useState<BookingFormState>(() => createInitialForm(preset))
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!open) return

    setForm(createInitialForm(preset))
    setSubmitted(false)
    resetMutation()
  }, [open, preset])

  const disabled = mutation.isPending

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    if (!form.privacyAccepted) return

    await mutation.mutateAsync({
      name: form.name,
      phone: normalizePhone(form.phone),
      service: form.service || undefined,
      barber: form.barber || undefined,
      datetime: form.datetime || undefined,
    })
  }

  const onRequestClose = () => {
    if (!disabled) {
      onClose()
    }
  }

  return (
    <Modal
      open={open}
      title={mutation.isSuccess ? 'В ближайшее время с вами свяжется менеджер' : 'В ближайшее время с вами свяжется менеджер'}
      onClose={onRequestClose}
    >
      {mutation.isSuccess ? (
        <div className="grid gap-5">
          <div className="rounded-none border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 px-5 py-5 text-sm text-zinc-100">
            <div className="text-[11px] font-extralight uppercase tracking-[0.24em] text-[var(--color-accent-soft)] [font-family:var(--font-body)]">
              Готово
            </div>
            <div className="mt-3 font-extralight leading-7 text-zinc-200 [font-family:var(--font-body)]">
              Мы получили заявку на <span className="font-medium">{form.service || 'услугу'}</span>
              {form.barber ? (
                <>
                  {' '}
                  к мастеру <span className="font-medium">{form.barber}</span>
                </>
              ) : null}
              .
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <Button variant="outline" onClick={onRequestClose} className="sm:min-w-[172px]">
              Вернуться на сайт
            </Button>
            <Button
              variant="primary"
              className="sm:min-w-[172px]"
              onClick={() => {
                setForm(createInitialForm(preset))
                setSubmitted(false)
                mutation.reset()
              }}
            >
              Отправить ещё одну
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Имя"
              value={form.name}
              onChange={(v) => setForm((s) => ({ ...s, name: v }))}
              placeholder="Иван"
              invalid={submitted && !form.name.trim()}
            />
            <Field
              label="Телефон"
              value={form.phone}
              onChange={(v) => setForm((s) => ({ ...s, phone: v }))}
              placeholder="+7 900 000-00-00"
              invalid={submitted && !form.phone.trim()}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Select
              label="Услуга"
              value={form.service}
              onChange={(v) => setForm((s) => ({ ...s, service: v }))}
              options={['', ...SERVICE_OPTIONS]}
            />
            <Select
              label="Барбер (по желанию)"
              value={form.barber}
              onChange={(v) => setForm((s) => ({ ...s, barber: v }))}
              options={['', ...BARBER_OPTIONS]}
            />
          </div>

          <Field
            label="Дата и время (по желанию)"
            value={form.datetime}
            onChange={(v) => setForm((s) => ({ ...s, datetime: v }))}
            placeholder="Например: 22.03 18:30"
          />

          <label
            className={cx(
              'flex items-start gap-3 px-1 py-1 text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]',
              submitted && !form.privacyAccepted && 'text-rose-300',
            )}
          >
            <input
              type="checkbox"
              checked={form.privacyAccepted}
              onChange={(e) => setForm((s) => ({ ...s, privacyAccepted: e.target.checked }))}
              className="mt-1 h-4 w-4 rounded-none border-white/20 bg-white/[0.03] text-[var(--color-accent)] focus:ring-[var(--color-accent)]"
            />
            <span>
              Я соглашаюсь с{' '}
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="font-medium text-[var(--color-accent-soft)] transition [font-family:var(--font-body)] lg:hover:text-[var(--color-accent)]"
              >
                политикой конфиденциальности
              </button>
              .
            </span>
          </label>

          {mutation.isError ? (
            <div className="rounded-none border border-rose-500/30 bg-rose-500/10 px-5 py-4 text-sm font-extralight text-zinc-100 [font-family:var(--font-body)]">
              {mutation.error.message}
            </div>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={onRequestClose}
              disabled={disabled}
              className="sm:min-w-[160px]"
            >
              Отмена
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={disabled}
              className="sm:min-w-[190px]"
            >
              {mutation.isPending ? 'Подтверждаем…' : 'Подтвердить запись'}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  )
}

function Label({ children }: { children: string }) {
  return (
    <div className="text-[11px] font-extralight uppercase tracking-[0.22em] text-zinc-400 [font-family:var(--font-body)]">
      {children}
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  invalid,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  invalid?: boolean
}) {
  return (
    <label className="grid gap-2">
      <div className="flex items-center justify-between gap-4">
        <Label>{label}</Label>
      </div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cx(
          'h-12 w-full rounded-none border bg-white/[0.03] px-4 text-sm font-extralight text-zinc-100 placeholder:text-zinc-600 [font-family:var(--font-body)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950',
          invalid ? 'border-rose-500/50' : 'border-white/10',
        )}
      />
    </label>
  )
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
}) {
  return (
    <label className="grid gap-2">
      <Label>{label}</Label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full rounded-none border border-white/10 bg-white/[0.03] px-4 text-sm font-extralight text-zinc-100 [font-family:var(--font-body)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      >
        {options.map((o) => (
          <option key={o || '__empty'} value={o}>
            {o || 'Не выбрано'}
          </option>
        ))}
      </select>
    </label>
  )
}
