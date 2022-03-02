import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

import clsxm from '@/lib/clsxm'

enum ButtonVariant {
  'primary',
}

type SearchBarProps = {
  /** Button color variant */
  variant?: keyof typeof ButtonVariant
  /** Button has been selected */
  active?: boolean
  /** Button icon */
  icon?: React.ReactNode
  /** Button has loading bar */
  isTimed?: boolean
} & React.ComponentPropsWithRef<'input'>

const SearchBar: React.FunctionComponent<SearchBarProps> = ({
  placeholder,
  className,
  variant = 'primary',
  ...rest
}) => {
  const [focus, setFocus] = useState(false)

  return (
    <div
      className={clsxm(
        'flex text-xs xl:text-sm 2xl:text-base h-max items-center rounded-full p-3',
        [
          variant === 'primary' && ['bg-primary-800 text-primary-200'],
          focus && 'bg-primary-500',
        ],
        className
      )}
      {...rest}
    >
      <span className="flex-none mr-3">
        <FiSearch />
      </span>
      <input
        className="flex-1 w-full font-semibold bg-transparent outline-none focus:bg-primary-500"
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  )
}

export default SearchBar
