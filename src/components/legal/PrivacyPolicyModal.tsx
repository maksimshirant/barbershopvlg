import { Modal } from '../ui/Modal'

const POLICY_ITEMS = [
  'Мы запрашиваем только те данные, которые нужны для подтверждения записи: имя, телефон, выбранная услуга, мастер и удобное время.',
  'Данные используются только для связи с вами по заявке, подтверждения записи и уточнения деталей визита.',
  'Мы не передаём ваши данные третьим лицам, кроме случаев, когда это требуется законом.',
  'Вы можете запросить уточнение, изменение или удаление своих данных, связавшись с нами по телефону, указанному на сайте.',
]

export function PrivacyPolicyModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  return (
    <Modal
      open={open}
      eyebrow="Политика"
      title="Как мы используем и храним данные, оставленные через форму записи"
      onClose={onClose}
    >
      <div className="grid gap-5">
        {POLICY_ITEMS.map((item) => (
          <p key={item} className="text-sm font-extralight leading-7 text-zinc-300 [font-family:var(--font-body)]">
            {item}
          </p>
        ))}
        <p className="border-t border-white/10 pt-5 text-sm font-extralight leading-7 text-zinc-400 [font-family:var(--font-body)]">
          Отправляя заявку, вы подтверждаете согласие на обработку персональных данных в
          рамках записи в барбершоп.
        </p>
      </div>
    </Modal>
  )
}
