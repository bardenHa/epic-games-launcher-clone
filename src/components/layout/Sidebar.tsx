import Button from '../buttons/Button'
import NavigationButton from '../buttons/NavigationButton'

import EpicGamesLogo from '~/svg/EpicGamesLogo.svg'

const Sidebar: React.FunctionComponent = () => {
  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-10 flex-col hidden h-full px-4 min-w-max bg-primary-700 md:flex"
    >
      <div className="flex items-center justify-center h-20 text-4xl fill-primary-150">
        <EpicGamesLogo />
      </div>
      <div className="flex flex-col space-y-0.5">
        <NavigationButton active={true}>Store</NavigationButton>
        <NavigationButton>Library</NavigationButton>
        <NavigationButton>Unreal Engine</NavigationButton>
      </div>
      <h3 className="mt-6">Quick Launch</h3>
      <Button className="py-4 rounded-xl">Store</Button>
      <Button className="py-4 rounded-xl">Library</Button>
      <Button className="py-4 rounded-xl">Unreal Engine</Button>
    </nav>
  )
}

export default Sidebar
