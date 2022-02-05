import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

import Button from '@/components/buttons/Button'
import DropdownButton from '@/components/buttons/DropdownButton'
import FriendListButton from '@/components/buttons/FriendListButton'
import SearchBar from '@/components/SearchBar'

const Header: React.FunctionComponent = () => {
  return (
    <header className="sticky top-0 w-full h-header bg-primary-700">
      <nav
        aria-label="Secondary"
        className="flex items-center justify-between w-full h-full"
      >
        <div className="flex items-center flex-auto">
          <MdOutlineKeyboardArrowLeft className="mx-1 text-2xl text-primary-200 active:text-primary-150" />
          <SearchBar
            placeholder="Search"
            className="hidden mx-2 w-44 md:flex"
          />
          <DropdownButton variant="ghost" className="xl:hidden">
            Discover
          </DropdownButton>
          <div className="hidden px-4 space-x-4 xl:flex">
            <Button variant="ghost">Discover</Button>
            <Button variant="ghost">Browse</Button>
            <Button variant="ghost">News</Button>
          </div>
        </div>
        <div className="flex items-center">
          <div className="px-6 space-x-2">
            <Button
              variant="ghost"
              className="font-semibold text-primary-300 hover:text-primary-150 focus:text-primary-150"
            >
              Wishlist
            </Button>
            <Button
              variant="ghost"
              className="font-semibold text-primary-300 hover:text-primary-150 focus:text-primary-150"
            >
              Cart
            </Button>
          </div>
          <div className="px-6 space-x-4 border-l border-primary-500">
            <FriendListButton />
            <FriendListButton />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
