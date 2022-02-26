import Image from 'next/image'
import { useEffect, useState } from 'react'

import HeroButton from './buttons/HeroButton'

import DylingLight2 from '~/images/banners/dyinglight2.jpg'

interface featuredGame {
  title: string
  image: StaticImageData
  active?: boolean
}

interface BannerHero {
  featuredGames: Array<featuredGame>
}

let interval: ReturnType<typeof setTimeout> | null = null

const BannerHero: React.FunctionComponent<BannerHero> = ({ featuredGames }) => {
  const [running, setRunning] = useState(false)
  const [activeRow, setActiveRow] = useState(0)
  // const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setActiveRow((activeRow) => (activeRow >= 5 ? 0 : activeRow + 1))
      }, 8500)
    } else {
      clearInterval(Number(interval))
    }
  }, [running])

  const cleanup = () => {
    setRunning(false)
    clearInterval(Number(interval))
  }

  useEffect(() => {
    setRunning(true)

    return cleanup
  }, [])

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
            active={index === activeRow}
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
