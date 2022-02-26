import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import HeroButton from './buttons/HeroButton'
interface featuredGame {
  title: string
  image: StaticImageData
  banner: StaticImageData
  active?: boolean
}

interface BannerHero {
  featuredGames: Array<featuredGame>
}

let interval: ReturnType<typeof setTimeout> | null = null

const BannerHero: React.FunctionComponent<BannerHero> = ({ featuredGames }) => {
  const [running, setRunning] = useState(false)
  const [activeRow, setActiveRow] = useState(0)

  const startTimer = () => {
    interval = setInterval(() => {
      setActiveRow((activeRow) => (activeRow >= 5 ? 0 : activeRow + 1))
    }, 8000)
  }

  useEffect(() => {
    if (running) {
      startTimer()
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

  const handleButtonClick = (index: number) => {
    cleanup()
    setRunning(true)
    setActiveRow(index)
    startTimer()
  }

  return (
    <section className="flex lg:space-x-4 2xl:space-x-8 h-min">
      <div className="flex-auto overflow-hidden cursor-pointer h-min rounded-2xl">
        <BannerImage key={activeRow} image={featuredGames[activeRow].banner} />
      </div>
      <div className="flex-col flex-none hidden space-y-1 lg:flex">
        {featuredGames.map((game, index) => (
          <HeroButton
            onClick={() => handleButtonClick(index)}
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

const activeBannerImage = {
  active: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, type: 'tween', ease: 'easeInOut' },
  },
  rest: {
    x: 900,
    opacity: 0.1,
    transition: { duration: 0.35, type: 'tween', ease: 'easeInOut' },
  },
}

const BannerImage: React.FunctionComponent<{
  image: StaticImageData
}> = ({ image }) => (
  <AnimatePresence>
    <motion.div
      key={image.src}
      variants={activeBannerImage}
      initial="rest"
      animate="active"
      className="flex-auto overflow-hidden cursor-pointer h-min rounded-2xl"
    >
      <Image src={image} alt="featured game banner" layout="responsive" />
    </motion.div>
  </AnimatePresence>
)

export default BannerHero
