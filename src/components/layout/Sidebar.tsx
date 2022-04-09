import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiFillTag } from 'react-icons/ai'

import * as ROUTES from '@/constant/routes'
import clsxm from '@/lib/clsxm'

import NavigationButton from '../buttons/NavigationButton'

import RocketLeague from '~/images/rocketleague.jpg'
import Trackmania from '~/images/trackmania.jpg'
import EpicGamesLogo from '~/svg/EpicGamesLogo.svg'
import LibraryIcon from '~/svg/LibraryIcon.svg'
import UnrealEngineLogo from '~/svg/UnrealEngineLogo.svg'

const Sidebar: React.FunctionComponent<{ open: boolean }> = ({
  open = true,
}) => {
  const router = useRouter()

  return (
    <nav
      aria-label="Primary"
      className={clsxm([
        'md:sticky fixed top-0 z-40 flex-col flex h-full xl:w-72 2xl:w-96 bg-primary-700',
        open ? 'basis-6/12 w-1/2 px-4' : 'w-0 lg:min-w-max lg:px-4',
        'duration-500 transition-all ease-in-out',
      ])}
    >
      <div className="flex items-center justify-center invisible px-4 text-4xl md:visible h-header fill-primary-150">
        <EpicGamesLogo />
      </div>
      <div className="overflow-x-hidden">
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
        <div className="space-y-0.5">
          <NavigationButton game={RocketLeague}>
            Rocket League®
          </NavigationButton>
          <NavigationButton game={Trackmania}>Trackmania</NavigationButton>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
