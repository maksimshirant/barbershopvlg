import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'outline'
type Size = 'xs' | 'sm' | 'md'

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cx(
        'inline-flex items-center justify-center gap-2 rounded-none border font-semibold uppercase transition duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950',
        'disabled:cursor-not-allowed disabled:opacity-60',
        size === 'xs' && 'px-3 py-1.5 text-[10px] tracking-[0.14em]',
        size === 'sm' && 'px-4 py-2 text-xs',
        size === 'md' && 'px-5 py-3 text-sm tracking-[0.16em]',
        variant === 'primary' &&
          'border-[var(--color-accent)] bg-[var(--color-accent)] text-[#100C0B] shadow-[0_16px_40px_rgba(138,115,86,0.16)] lg:hover:border-[var(--color-accent-bright)] lg:hover:bg-[var(--color-accent-bright)]',
        variant === 'outline' &&
          'border-white/14 bg-transparent text-zinc-100 lg:hover:border-[var(--color-accent)] lg:hover:text-[var(--color-accent-soft)]',
        variant === 'ghost' &&
          'border-transparent bg-transparent text-zinc-100 lg:hover:text-[var(--color-accent-soft)]',
        className,
      )}
    >
      {children}
    </button>
  )
}
