import Image from 'next/image'

import DylingLight2 from '~/images/banners/dyinglight2.jpg'

const BannerHero: React.FunctionComponent<{ text?: string }> = ({ text }) => {
  return (
    <section className="flex space-x-4">
      <div className="flex-auto overflow-hidden cursor-pointer rounded-2xl">
        <Image
          src={DylingLight2}
          alt="featured game banner"
          layout="responsive"
        />
      </div>
      <div className="flex-none">
        stacked buttons buttons
        <p>{text}</p>
      </div>
    </section>
  )
}

export default BannerHero
