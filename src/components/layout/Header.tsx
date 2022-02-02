import Button from '@/components/buttons/Button'

const Header: React.FunctionComponent = () => {
  return (
    <header className="sticky top-0 w-full h-header bg-primary-700">
      <nav aria-label="Secondary" className="flex justify-between w-full">
        <div className="flex">
          <div className="">
            <input type="text" placeholder="search" />
          </div>
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
