import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiFillTag } from 'react-icons/ai'

import * as ROUTES from '@/constant/routes'

import NavigationButton from '../buttons/NavigationButton'

import RocketLeague from '~/images/rocketleague.jpg'
import Trackmania from '~/images/trackmania.jpg'
import EpicGamesLogo from '~/svg/EpicGamesLogo.svg'
import LibraryIcon from '~/svg/LibraryIcon.svg'
import UnrealEngineLogo from '~/svg/UnrealEngineLogo.svg'

const Sidebar: React.FunctionComponent = () => {
  const router = useRouter()

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-10 flex-col hidden h-full px-4 xl:w-72 2xl:w-96 min-w-max bg-primary-700 lg:flex"
    >
      <div className="flex items-center justify-center text-4xl h-header fill-primary-150">
        <EpicGamesLogo />
      </div>
      <div className="flex flex-col space-y-0.5">
        <Link href={ROUTES.STORE}>
          <a>
            <NavigationButton
              active={router.pathname === ROUTES.STORE}
              icon={<AiFillTag />}
            >
              Store
            </NavigationButton>
          </a>
        </Link>
        <Link href={ROUTES.LIBRARY}>
          <a>
            <NavigationButton
              active={router.pathname === ROUTES.LIBRARY}
              icon={<LibraryIcon />}
            >
              Library
            </NavigationButton>
          </a>
        </Link>
        <Link href={ROUTES.UNREAL_ENGINE}>
          <a>
            <NavigationButton
              active={router.pathname === ROUTES.UNREAL_ENGINE}
              icon={<UnrealEngineLogo />}
            >
              Unreal Engine
            </NavigationButton>
          </a>
        </Link>
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
