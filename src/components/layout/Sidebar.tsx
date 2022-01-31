import { AiFillTag } from 'react-icons/ai'

import Button from '../buttons/Button'
import NavigationButton from '../buttons/NavigationButton'

import EpicGamesLogo from '~/svg/EpicGamesLogo.svg'
import LibraryIcon from '~/svg/LibraryIcon.svg'
import UnrealEngineLogo from '~/svg/UnrealEngineLogo.svg'

const Sidebar: React.FunctionComponent = () => {
  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-10 flex-col hidden h-full px-4 xl:w-72 2xl:w-96 min-w-max bg-primary-700 md:flex"
    >
      <div className="flex items-center justify-center text-4xl h-header fill-primary-150">
        <EpicGamesLogo />
      </div>
      <div className="flex flex-col space-y-0.5">
        <NavigationButton active={true} icon={<AiFillTag />}>
          Store
        </NavigationButton>
        <NavigationButton icon={<LibraryIcon />}>Library</NavigationButton>
        <NavigationButton icon={<UnrealEngineLogo />}>
          Unreal Engine
        </NavigationButton>
      </div>
      <h3 className="mt-6">Quick Launch</h3>
      <Button className="py-4 rounded-xl">Store</Button>
      <Button className="py-4 rounded-xl">Library</Button>
      <Button className="py-4 rounded-xl">Unreal Engine</Button>
    </nav>
  )
}

export default Sidebar
