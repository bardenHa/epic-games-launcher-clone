import Image from 'next/image'

import HeroButton from './buttons/HeroButton'

import DylingLight2 from '~/images/banners/dyinglight2.jpg'
import RocketLeague from '~/images/rocketleague.jpg'

const BannerHero: React.FunctionComponent = () => {
  return (
    <section className="flex space-x-4 2xl:space-x-8 h-min">
      <div className="flex-auto overflow-hidden cursor-pointer h-min rounded-2xl">
        <Image
          src={DylingLight2}
          alt="featured game banner"
          layout="responsive"
        />
      </div>
      <div className="flex-col flex-none hidden space-y-1 lg:flex">
        <HeroButton game={RocketLeague} className="w-52 xl:w-60 2xl:w-72 h-1/6">
          Lunar New Year Sales 2022
        </HeroButton>
        <HeroButton game={RocketLeague} className="w-52 xl:w-60 2xl:w-72 h-1/6">
          Get Your Coupon
        </HeroButton>
        <HeroButton game={RocketLeague} className="w-52 xl:w-60 2xl:w-72 h-1/6">
          Dying Light 2 Stay Human
        </HeroButton>
        <HeroButton game={RocketLeague} className="w-52 xl:w-60 2xl:w-72 h-1/6">
          Sifu - EGS Exclusive
        </HeroButton>
        <HeroButton game={RocketLeague} className="w-52 xl:w-60 2xl:w-72 h-1/6">
          Evil Dead: The Game
        </HeroButton>
        <HeroButton game={RocketLeague} className="w-52 xl:w-60 2xl:w-72 h-1/6">
          Total War: WARHAMMER III
        </HeroButton>
      </div>
    </section>
  )
}

export default BannerHero
