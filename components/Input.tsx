import { forwardRef } from 'react'

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  type,
  disabled,
  ...props
}, ref) => {
  return (
    <input
      type={type}
      className={`
        flex
        flex-row
        rounded-md
        w-full
        p-2
        transition
        file:border-0
        file:bg-transparent
        file:text-sm
        file:font-medium
        text-neutral-500
        ${className}`
      }
      disabled={disabled}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export default Input