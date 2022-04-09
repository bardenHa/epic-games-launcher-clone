import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { BiPlay } from 'react-icons/bi'

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

const launchText = {
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.15, type: 'tween', ease: 'easeInOut' },
  },
  rest: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.15, type: 'tween', ease: 'easeInOut' },
  },
}

const childrenText = {
  hover: {
    y: 0,
    transition: { duration: 0.15, type: 'tween', ease: 'easeInOut' },
  },
  rest: {
    y: 'calc(50%)',
    transition: { duration: 0.15, type: 'tween', ease: 'easeInOut' },
  },
}

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
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="w-full"
      >
        <button
          ref={ref}
          type="button"
          className={clsxm(
            'inline-flex h-14 xl:h-16 2xl:h-20 text-xs xl:text-sm 2xl:text-base items-center duration-200 transition-colors rounded-xl px-5 font-semibold text-left w-full',
            [
              variant === 'primary' && [
                'bg-primary-700 text-primary-200',
                'border border-primary-700',
                'hover:bg-primary-600',
                'focus:border-primary-150',
                'disabled:bg-primary-400 disabled:hover:bg-primary-400',
              ],
            ],
            active && [
              'bg-primary-800 text-primary-150',
              'hover:bg-primary-500',
            ],
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
            <div className="mr-3.5 hidden md:block overflow-hidden rounded-md w-7 md:w-8 xl:w-9 2xl:w-10 xl:mr-4 2xl:mr-5">
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
          {game ? (
            <div>
              <motion.div variants={childrenText} className="mt-1 xl:mt-0">
                {children}
              </motion.div>
              <motion.span
                variants={launchText}
                className="inline-flex items-center mt-1 2xl:text-sm xl:text-xs text-[0.6rem] text-primary-200"
              >
                <BiPlay className="text-lg 2xl:text-xl" />
                Launch
              </motion.span>
            </div>
          ) : (
            children
          )}
        </button>
      </motion.div>
    )
  }
)

export default NavigationButton
