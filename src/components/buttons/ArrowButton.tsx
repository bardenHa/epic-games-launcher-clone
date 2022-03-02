import React from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

import clsxm from '@/lib/clsxm'

type ButtonProps = {
  /** Flip arrow direction */
  flipped?: boolean
} & React.ComponentPropsWithRef<'button'>

const ArrowButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, disabled: buttonDisabled, flipped = false, ...rest }, ref) => {
    const disabled = buttonDisabled

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={clsxm(
          'inline-flex items-center justify-center rounded-full p-2 bg-primary-800 border border-primary-700',
          'focus:border-primary-150',
          'hover:bg-primary-500',
          'transition-colors duration-300',
          'text-lg xl:text-xl',
          'disabled:cursor-not-allowed',
          className
        )}
        {...rest}
      >
        {flipped ? <BiChevronLeft /> : <BiChevronRight />}
      </button>
    )
  }
)

export default ArrowButton
