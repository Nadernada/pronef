'use client'

interface ButtonProps {
  outline?: boolean
  fill?: boolean
  label: string
  onClick?: () => void
  className?: string
  type?: 'submit' | 'button' | undefined
}

const Button: React.FC<ButtonProps> = ({
  outline,
  label,
  fill,
  onClick,
  className,
  type
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
        hover:bg-neutral-800
        transition-colors
        ${outline && 'border-black border-[1px]'}
        ${fill && 'bg-black text-white'}
        ${className}
      `}
    >
      {label}
    </button>
  )
}

export default Button