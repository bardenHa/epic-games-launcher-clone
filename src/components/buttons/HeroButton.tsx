import { motion } from 'framer-motion'
import Image from 'next/image'
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
  /** Button game image */
  game: StaticImageData
} & React.ComponentPropsWithRef<'button'>

const activeButton = {
  active: {
    width: '100%',
    transition: { duration: 8, type: 'linear' },
  },
  rest: {
    width: 0,
    transition: { duration: 8, type: 'linear' },
  },
}

const HeroButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, variant = 'primary', active, game, ...rest },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        className={clsxm(
          'inline-flex overflow-hidden relative text-xs xl:text-sm 2xl:text-base items-center duration-200 transition-colors rounded-xl px-5 font-semibold text-left w-full',
          [
            variant === 'primary' && [
              'bg-primary-700 text-primary-200',
              'border border-primary-700',
              'hover:bg-primary-600',
            ],
          ],
          active && ['bg-primary-600'],
          game && ['pl-2.5 xl:pl-4 2xl:pl-5 text-primary-150 font-normal'],
          className
        )}
        {...rest}
      >
        {active ? (
          <>
            {game && (
              <div className="mr-3.5 z-10 overflow-hidden rounded-md w-7 md:w-8 xl:w-10 2xl:w-12 xl:mr-4 2xl:mr-5">
                <Image
                  src={game}
                  alt="Quick launch game image"
                  layout="responsive"
                />
              </div>
            )}
            <h6 className="z-10 whitespace-normal">{children}</h6>
            <motion.div
              initial="rest"
              animate="active"
              variants={activeButton}
              className="absolute left-0 h-full rounded-l-xl bg-primary-500 bg-clip-border"
            ></motion.div>
          </>
        ) : (
          <>
            {game && (
              <div className="mr-3.5 overflow-hidden rounded-md w-7 md:w-8 xl:w-10 2xl:w-12 xl:mr-4 2xl:mr-5">
                <Image
                  src={game}
                  alt="Quick launch game image"
                  layout="responsive"
                />
              </div>
            )}

            <h6 className="whitespace-normal">{children}</h6>
          </>
        )}
      </button>
    )
  }
)

export default HeroButton
