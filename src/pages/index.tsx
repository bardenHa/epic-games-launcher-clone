import type { NextPage } from 'next'

import BannerHero from '@/components/BannerHero'

import BattlefrontTwoBanner from '~/images/banners/battlefront.jpg'
import DyingLight2Banner from '~/images/banners/dyinglight2.jpg'
import EvilDeadBanner from '~/images/banners/evildead.jpg'
import GodOfWarBanner from '~/images/banners/godofwar.jpg'
import SifuBanner from '~/images/banners/sifu.jpg'
import WarhammerBanner from '~/images/banners/warhammer.jpg'
import BattlefrontTwoCover from '~/images/covers/battlefront.jpg'
import DyingLight2Cover from '~/images/covers/dyinglight2.jpg'
import EvilDeadCover from '~/images/covers/evildead.jpg'
import GodOfWarCover from '~/images/covers/godofwar.jpg'
import SifuCover from '~/images/covers/sifu.jpg'
import WarhammerCover from '~/images/covers/warhammer.jpg'

const featuredGames = [
  {
    title: 'God of War',
    image: GodOfWarCover,
    banner: GodOfWarBanner,
  },
  {
    title: 'Battlefront',
    image: BattlefrontTwoCover,
    banner: BattlefrontTwoBanner,
  },
  {
    title: 'Dying Light 2 Stay Human',
    image: DyingLight2Cover,
    banner: DyingLight2Banner,
  },
  {
    title: 'Sifu - EGS Exclusive',
    image: SifuCover,
    banner: SifuBanner,
  },
  {
    title: 'Evil Dead: The Game',
    image: EvilDeadCover,
    banner: EvilDeadBanner,
  },
  {
    title: 'Total War: WARHAMMER III',
    image: WarhammerCover,
    banner: WarhammerBanner,
  },
]

const Store: NextPage = () => {
  return (
    <main className="w-full space-y-8 bg-primary-700 min-h-main">
      <BannerHero featuredGames={featuredGames} />
      <h1 className="text-3xl font-semibold md:text-5xl lg:text-7xl">Store</h1>
    </main>
  )
}

export default Store
