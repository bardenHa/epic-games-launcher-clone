import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'

import ArrowButton from './buttons/ArrowButton'

import Battlefront from '~/images/covers/battlefront.jpg'

interface GameCarouselProps {
  title?: string
  games?: string
}

const activeLink = {
  active: {
    x: 7.5,
    transition: { duration: 0.15, type: 'tween', ease: 'easeInOut' },
  },
  rest: {
    x: 0,
    transition: { duration: 0.15, type: 'tween', ease: 'easeInOut' },
  },
}
//md:w-32 xl:w-9 2xl:w-10
const GameCarousel: React.FunctionComponent<GameCarouselProps> = ({
  title,
}) => {
  return (
    <div className="space-y-4">
      <CarouselHeader title={title} />
      <div className="flex space-x-3 xl:space-x-6 2xl:space-x-9">
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
      </div>
    </div>
  )
}

const CarouselHeader: React.FunctionComponent<{ title?: string }> = ({
  title,
}) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <motion.h2
          className="flex text-xl font-medium"
          whileHover="active"
          initial="rest"
          animate="rest"
        >
          <motion.a
            whileHover="active"
            initial="rest"
            animate="active"
            href="#"
            className=""
          >
            {title}
          </motion.a>
          <motion.div
            variants={activeLink}
            className="flex items-center justify-center"
          >
            <BiChevronRight />
          </motion.div>
        </motion.h2>
        <div className="space-x-3">
          <ArrowButton flipped={true} />
          <ArrowButton />
        </div>
      </div>
    </>
  )
}

const Game: React.FunctionComponent<{
  picture?: string
  salePrice?: number
  price?: number
}> = ({ salePrice = 0.83, price = 11.99 }) => {
  return (
    <article className="flex flex-col justify-between w-40 space-y-3 text-xs xl:text-sm 2xl:text-base basis-1/5">
      <div className="relative overflow-hidden rounded-lg group">
        <Image
          src={Battlefront}
          alt="Quick launch game image"
          layout="responsive"
        />
        <div className="absolute inset-0 transition-opacity bg-white opacity-0 group-hover:opacity-100 bg-opacity-10">
          <button className="absolute text-3xl right-3 top-3">
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
      <h6 className="w-full truncate">Battlefront II</h6>
      <div className="flex items-center space-x-3">
        {salePrice && (
          <>
            <p className="h-full p-1.5 rounded-md bg-accent-500">
              -{Math.round(((price - salePrice) / price) * 100)}%
            </p>
            <p className="line-through text-primary-300">£{price}</p>
          </>
        )}
        <p className="">£{salePrice ? salePrice : price}</p>
      </div>
    </article>
  )
}

export default GameCarousel
