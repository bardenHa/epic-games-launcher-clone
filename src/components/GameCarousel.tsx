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
        <div className="relative overflow-hidden rounded-lg group basis-1/5">
          <Image
            src={Battlefront}
            alt="Quick launch game image"
            layout="responsive"
          />
          <div className="absolute inset-0 hidden bg-white group-hover:block bg-opacity-10">
            <button className="absolute text-3xl right-3 top-3">
              <AiOutlinePlusCircle />
            </button>
          </div>
        </div>
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

export default GameCarousel
