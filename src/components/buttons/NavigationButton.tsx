import Image from 'next/image'
import React from 'react'

import clsxm from '@/lib/clsxm'

enum ButtonVariant {
  'primary',
}

interface Button {
  /** Button color variant */
  variant?: keyof typeof ButtonVariant
  /** Button has been selected */
  active?: boolean
  /** Button icon */
  icon?: React.ReactNode
  /** Button has loading bar */
  isTimed?: boolean
}

interface ButtonWithIcon extends Button {
  icon: React.ReactNode
  game?: never
}

interface ButtonWithGame extends Button {
  icon?: never
  game: StaticImageData
}

type ButtonProps = (ButtonWithIcon | ButtonWithGame) &
  React.ComponentPropsWithRef<'button'>

const NavigationButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      active,
      icon,
      game,
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
          'inline-flex h-14 xl:h-16 2xl:h-20 text-xs xl:text-sm 2xl:text-base items-center duration-200 transition-colors rounded-xl px-5 font-semibold text-left',
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
          game && [
            'pl-2.5 2xl:pl-3 h-16 2xl:h-20 text-primary-150 font-normal',
          ],
          className
        )}
        {...rest}
      >
        {icon && (
          <div className="mr-4 text-lg xl:text-xl xl:mr-5 2xl:mr-7 fill-primary-200">
            {icon}
          </div>
        )}
        {game && (
          <div className="mr-3.5 overflow-hidden rounded-md w-7 md:w-8 xl:w-9 2xl:w-10 xl:mr-4 2xl:mr-5">
            <Image
              src={game}
              alt="Quick launch game image"
              layout="responsive"
            />
          </div>
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
