import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { ImSpinner2 } from 'react-icons/im'
import { RiArrowUpSLine } from 'react-icons/ri'

import clsxm from '@/lib/clsxm'

enum ButtonVariant {
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
}

type ButtonProps = {
  /** Show loading spinner and disable button */
  isLoading?: boolean
  /** Button color variant */
  variant?: keyof typeof ButtonVariant
} & React.ComponentPropsWithRef<'button'>

const ArrowIcon = {
  hover: {
    rotate: 0,
    transition: { duration: 0.15, type: 'tween', ease: 'easeInOut' },
  },
  rest: {
    rotate: 180,
    transition: { duration: 0.15, type: 'tween', ease: 'easeInOut' },
  },
}

const DropdownButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled

    const [dropdownOpen, setDropdownOpen] = useState(false)

    return (
      <motion.div
        initial="rest"
        animate={dropdownOpen ? 'hover' : 'rest'}
        className="h-full"
      >
        <button
          ref={ref}
          type="button"
          disabled={disabled}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
          className={clsxm(
            'inline-flex items-center rounded p-2 pr-1',
            'focus:border-primary-150',
            'transition-colors duration-75',
            'text-xs font-medium xl:text-base xl:font-normal',
            [
              variant === 'primary' && [
                'bg-primary-500 text-primary-150',
                'border border-primary-700',
                'disabled:bg-primary-400 disabled:hover:bg-primary-400',
              ],
              variant === 'outline' && [
                'text-primary-500',
                'border border-primary-500',
              ],
              variant === 'ghost' && [
                'text-primary-150',
                'border border-primary-700',
              ],
              variant === 'light' && [
                'bg-white text-dark ',
                'border border-gray-300',
              ],
              variant === 'dark' && [
                'bg-gray-900 text-white',
                'border border-gray-600',
              ],
            ],
            'disabled:cursor-not-allowed',
            isLoading &&
              'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
            className
          )}
          {...rest}
        >
          {isLoading && (
            <div
              className={clsxm(
                'absolute h-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                {
                  'text-white': ['primary', 'dark'].includes(variant),
                  'text-black': ['light'].includes(variant),
                  'text-primary-500': ['outline', 'ghost'].includes(variant),
                }
              )}
            >
              <ImSpinner2 className="animate-spin" />
            </div>
          )}
          {children}
          <motion.span className="pl-0.5 text-lg" variants={ArrowIcon}>
            <RiArrowUpSLine />
          </motion.span>
        </button>
      </motion.div>
    )
  }
)

export default DropdownButton
