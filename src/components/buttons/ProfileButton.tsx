import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'

import clsxm from '@/lib/clsxm'

type ButtonProps = React.ComponentPropsWithRef<'button'>

const ProfileButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, disabled: buttonDisabled, ...rest }, ref) => {
    const disabled = buttonDisabled

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={clsxm(
          'inline-flex relative items-center justify-center rounded-full p-3 h-10 w-10 xl:w-12 xl:h-12 bg-primary-800 border border-primary-700',
          'focus:border-primary-150',
          'hover:bg-primary-500',
          'transition-colors duration-300',
          'text-base xl:text-xl leading-none font-normal',
          'disabled:cursor-not-allowed',
          className
        )}
        {...rest}
      >
        U
        <GoPrimitiveDot className="absolute bottom-0 right-0 text-xs xl:text-sm fill-green-500" />
      </button>
    )
  }
)

export default ProfileButton
