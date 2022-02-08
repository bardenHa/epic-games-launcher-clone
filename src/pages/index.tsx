import type { NextPage } from 'next'

import BannerHero from '@/components/BannerHero'

import RocketLeague from '~/images/rocketleague.jpg'

const featuredGames = [
  {
    title: 'Lunar New Year Sales 2022',
    image: RocketLeague,
  },
  {
    title: 'Get Your Coupon',
    image: RocketLeague,
  },
  {
    title: 'Dying Light 2 Stay Human',
    image: RocketLeague,
  },
  {
    title: 'Sifu - EGS Exclusive',
    image: RocketLeague,
  },
  {
    title: 'Evil Dead: The Game',
    image: RocketLeague,
  },
  {
    title: 'Total War: WARHAMMER III',
    image: RocketLeague,
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
