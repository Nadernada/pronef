'use client'

interface ButtonProps {
  outline?: boolean
  fill?: boolean
  label: string
  onClick?: () => void
  className?: string
  type?: 'submit' | 'button' | undefined
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  outline,
  label,
  fill,
  onClick,
  className,
  type,
  disabled
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        rounded-full
        text-sm
        font-medium
        mt-2
        px-2
        md:px-6 py-1
        transition-colors
        ${outline && 'border-black border-[1px]'}
        ${fill && 'bg-black text-white'}
        ${disabled? null : className + ' hover:bg-neutral-800'}
      `}
      disabled={disabled}
    >
      {disabled? 'Uploading...' : label}
    </button>
  )
}

export default Button