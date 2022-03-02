import { motion } from 'framer-motion'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

import ArrowButton from './buttons/ArrowButton'

interface GameCarouselProps {
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

const GameCarousel: React.FunctionComponent<GameCarouselProps> = () => {
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
            Games on Sale
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
