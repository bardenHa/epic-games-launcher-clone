import Image from 'next/image'

import HeroButton from './buttons/HeroButton'

import DylingLight2 from '~/images/banners/dyinglight2.jpg'

interface featuredGame {
  title: string
  image: StaticImageData
}

interface BannerHero {
  featuredGames: Array<featuredGame>
}

const BannerHero: React.FunctionComponent<BannerHero> = ({ featuredGames }) => {
  return (
    <section className="flex lg:space-x-4 2xl:space-x-8 h-min">
      <div className="flex-auto overflow-hidden cursor-pointer h-min rounded-2xl">
        <Image
          src={DylingLight2}
          alt="featured game banner"
          layout="responsive"
        />
      </div>
      <div className="flex-col flex-none hidden space-y-1 lg:flex">
        {featuredGames.map((game, index) => (
          <HeroButton
            key={index}
            game={game.image}
            className="w-52 xl:w-60 2xl:w-72 h-1/6"
          >
            {game.title}
          </HeroButton>
        ))}
      </div>
    </section>
  )
}

export default BannerHero
