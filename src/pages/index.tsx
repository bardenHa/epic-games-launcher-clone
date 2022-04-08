import type { NextPage } from 'next'
import Head from 'next/head'

import BannerHero from '@/components/BannerHero'
import GameCarousel from '@/components/GameCarousel'
import GameHero from '@/components/GameHero'

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
    price: 39.99,
    description:
      'His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters.',
  },
  {
    title: 'Star Wars Battlefront II',
    image: BattlefrontTwoCover,
    banner: BattlefrontTwoBanner,
    price: 34.99,
    description:
      'Put your mastery of the blaster, lightsaber, and the Force to the test online and offline in STAR WARS™ Battlefront™ II: Celebration Edition.',
  },
  {
    title: 'Dying Light 2 Stay Human',
    image: DyingLight2Cover,
    banner: DyingLight2Banner,
    price: 54.99,
    description:
      'The virus won and civilization has fallen back to the Dark Ages. The City, one of the last human settlements, is on the brink of collapse.',
  },
  {
    title: 'Sifu - EGS Exclusive',
    image: SifuCover,
    banner: SifuBanner,
    price: 31.99,
    description:
      'Embark on your path of revenge and master the devastating techniques of Pak Mei Kung Fu.',
  },
  {
    title: 'Evil Dead: The Game',
    image: EvilDeadCover,
    banner: EvilDeadBanner,
    price: 31.99,
    description:
      'Step into the shoes of Ash Williams or his friends from the iconic Evil Dead franchise and work together in a game loaded with over-the-top co-op and PVP multiplayer action!',
  },
  {
    title: 'Total War: WARHAMMER III',
    image: WarhammerCover,
    banner: WarhammerBanner,
    price: 49.99,
    description:
      'Rally your forces and step into the Realm of Chaos, a dimension of mind-bending horror where the very fate of the world will be decided.',
  },
]

const Store: NextPage = () => {
  return (
    <>
      <Head>
        <title>Epic Games Launcher</title>
      </Head>
      <main className="w-full mb-3 space-y-8 bg-primary-700 min-h-main">
        <BannerHero featuredGames={featuredGames} />
        <GameCarousel title="Games on Sale" />
        <section className="flex flex-col space-y-8 sm:flex-row sm:space-y-0 sm:space-x-6 md:space-x-8">
          <GameHero
            title="Assassin's Creed Valhalla Sale"
            description="Enjoy legendary savings of up to 60% on Assassin's Creed Valhalla during this limited time sale."
            className="sm:w-1/2"
            bannerImage={SifuBanner}
          />
          <GameHero
            title="Assassin's Creed Valhalla Sale"
            description="Enjoy legendary savings of up to 60% on Assassin's Creed Valhalla during this limited time sale."
            className="sm:w-1/2"
            bannerImage={SifuBanner}
          />
        </section>
      </main>
    </>
  )
}

export default Store
