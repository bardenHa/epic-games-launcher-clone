import type { NextPage } from 'next'

import BannerHero from '@/components/BannerHero'

import DyingLight2Cover from '~/images/covers/dyinglight2.jpg'
import EvilDeadCover from '~/images/covers/evildead.jpg'
import SifuCover from '~/images/covers/sifu.jpg'
import WarhammerCover from '~/images/covers/warhammer.jpg'
import RocketLeagueCover from '~/images/rocketleague.jpg'

const featuredGames = [
  {
    title: 'Lunar New Year Sales 2022',
    image: RocketLeagueCover,
  },
  {
    title: 'Get Your Coupon',
    image: RocketLeagueCover,
  },
  {
    title: 'Dying Light 2 Stay Human',
    image: DyingLight2Cover,
  },
  {
    title: 'Sifu - EGS Exclusive',
    image: SifuCover,
  },
  {
    title: 'Evil Dead: The Game',
    image: EvilDeadCover,
  },
  {
    title: 'Total War: WARHAMMER III',
    image: WarhammerCover,
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
