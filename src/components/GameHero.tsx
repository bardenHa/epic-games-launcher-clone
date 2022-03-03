import Image from 'next/image'
import React from 'react'

import clsxm from '@/lib/clsxm'

interface GameHeroProps {
  title: string
  bannerImage: StaticImageData
  description?: string
  link?: string
  className?: string
}

const GameHero: React.FunctionComponent<GameHeroProps> = ({
  title,
  bannerImage,
  description,
  link = '#',
  className,
}) => {
  return (
    <article className={clsxm(['space-y-3'], className)}>
      <div className="relative overflow-hidden cursor-pointer rounded-2xl group">
        <Image src={bannerImage} alt="Game hero image" layout="responsive" />
        <div className="absolute inset-0 transition-opacity bg-white opacity-0 group-hover:opacity-100 bg-opacity-10"></div>
      </div>
      <div className="space-y-3 sm:px-4">
        <h5 className="font-regular">{title}</h5>
        <p className="text-xs text-primary-300">{description}</p>
        <p className="pt-3">
          <a
            className="pb-0.5 hover:border-primary-100 border-primary-400 border-b"
            href={link}
          >
            Learn More
          </a>
        </p>
      </div>
    </article>
  )
}

export default GameHero
