import { AiFillTag } from 'react-icons/ai'

import NavigationButton from '../buttons/NavigationButton'

import RocketLeague from '~/images/rocketleague.jpg'
import Trackmania from '~/images/trackmania.jpg'
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
      <h3 className="pb-2 pl-3 mt-12 text-[0.55rem] tracking-widest leading-none uppercase">
        Quick Launch
      </h3>
      <NavigationButton game={RocketLeague}>Rocket League®</NavigationButton>
      <NavigationButton game={Trackmania}>Trackmania</NavigationButton>
    </nav>
  )
}

export default Sidebar
