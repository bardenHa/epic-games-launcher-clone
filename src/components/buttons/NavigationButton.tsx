import React from 'react'

import clsxm from '@/lib/clsxm'

enum ButtonVariant {
  'primary',
}

type ButtonProps = {
  /** Button color variant */
  variant?: keyof typeof ButtonVariant
  /** Button has been selected */
  active?: boolean
  /** Button icon */
  icon?: React.ReactNode
  /** Button has loading bar */
  isTimed?: boolean
} & React.ComponentPropsWithRef<'button'>

const NavigationButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      active,
      icon,
      isTimed,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        className={clsxm(
          'flex h-14 text-xs items-center rounded-xl px-5 font-semibold',
          [
            variant === 'primary' && [
              'bg-primary-700 text-primary-200',
              'border border-primary-700',
              'hover:bg-primary-600',
              'focus:border-primary-150',
              'disabled:bg-primary-400 disabled:hover:bg-primary-400',
            ],
          ],
          active && ['bg-primary-800 text-primary-150', 'hover:bg-primary-500'],
          className
        )}
        {...rest}
      >
        {icon && (
          <div
            className={clsxm(
              'absolute h-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': ['primary', 'dark'].includes(variant),
                'text-black': ['light'].includes(variant),
                'text-primary-500': ['outline', 'ghost'].includes(variant),
              }
            )}
          ></div>
        )}
        {isTimed && (
          <div
            className={clsxm(
              'absolute h-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': ['primary', 'dark'].includes(variant),
                'text-black': ['light'].includes(variant),
                'text-primary-500': ['outline', 'ghost'].includes(variant),
              }
            )}
          ></div>
        )}
        {children}
      </button>
    )
  }
)

export default NavigationButton
