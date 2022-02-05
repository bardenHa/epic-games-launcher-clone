import React from 'react'
import { FaUserFriends } from 'react-icons/fa'

import clsxm from '@/lib/clsxm'

type ButtonProps = React.ComponentPropsWithRef<'button'>

const FriendListButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, disabled: buttonDisabled, ...rest }, ref) => {
    const disabled = buttonDisabled

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={clsxm(
          'inline-flex items-center justify-center rounded-full p-3 bg-primary-800 border border-primary-700',
          'focus:border-primary-150',
          'hover:bg-primary-500',
          'transition-colors duration-300',
          'text-base xl:text-xl',
          'disabled:cursor-not-allowed',
          className
        )}
        {...rest}
      >
        <FaUserFriends />
      </button>
    )
  }
)

export default FriendListButton
