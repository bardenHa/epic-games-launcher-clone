import Button from '@/components/buttons/Button'
import SearchBar from '@/components/SearchBar'

const Header: React.FunctionComponent = () => {
  return (
    <header className="sticky top-0 w-full h-header bg-primary-700">
      <nav
        aria-label="Secondary"
        className="flex items-center justify-between w-full h-full"
      >
        <div className="flex flex-auto">
          <SearchBar
            placeholder="Search"
            className="hidden mx-2 w-44 md:flex"
          />
          <Button className="md:hidden">Discover</Button>
          <div className="hidden md:flex">
            <Button>Discover</Button>
            <Button>Browse</Button>
            <Button>News</Button>
          </div>
        </div>
        <div className="flex">
          <Button>Wishlist</Button>
          <Button>Cart</Button>
          <div>profile buttons</div>
        </div>
      </nav>
    </header>
  )
}

export default Header
