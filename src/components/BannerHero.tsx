import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import Button from './buttons/Button'
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
        <BannerSlider key={activeRow} image={featuredGames[activeRow].banner} />
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

const BannerSlider: React.FunctionComponent<{
  image: StaticImageData
}> = ({ image }) => (
  <AnimatePresence>
    <motion.div
      key={image.src}
      variants={activeBannerImage}
      initial="rest"
      animate="active"
      className="relative flex-auto overflow-hidden cursor-pointer h-min rounded-2xl"
    >
      <Image src={image} alt="featured game banner" layout="responsive" />
      <div className="absolute flex flex-col justify-end inset-8">
        <div className="max-w-sm pr-8">
          <h4 className="text-xs font-medium">NOW AVAILABLE</h4>
          <p className="pt-2 font-semibold tracking-wide">
            Embark on your path of revenge and master the devastating techniques
            of Pak Mei Kung Fu.
          </p>
          <p className="pt-2 text-xs">
            Starting at{' '}
            <span className="text-base font-semibold align-text-top">
              £31.99
            </span>
          </p>
          <div className="flex pt-2 space-x-3">
            <Button
              variant="light"
              className="items-center w-40 py-3 text-[0.7rem] border-0"
            >
              BUY NOW
            </Button>
            <Button
              variant="ghost"
              className="w-40 py-3 text-[0.7rem] border-transparent"
            >
              <AiOutlinePlusCircle className="mr-1 text-2xl" />
              Add to wishlist
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
)

export default BannerHero
