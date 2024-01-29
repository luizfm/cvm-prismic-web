import Image, { StaticImageData } from 'next/image'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

import styles from './styles.module.css'
import { HeroSliceDefaultItem, Simplify } from '../../../prismicio-types'

type PhotoCarouselProps = {
  photos: Simplify<HeroSliceDefaultItem>[]
  height?: number
}

export function PhotoCarousel({ photos, height }: PhotoCarouselProps) {
  return (
    <Swiper
      modules={[EffectFade, Pagination, Autoplay]}
      autoplay={{ delay: 5000 }}
      effect={'fade'}
      fadeEffect={{ crossFade: true }}
    >
      {photos.map((photo) => (
        <SwiperSlide key={`${photo.herocarrouselimage.id}`}>
          <div className={styles['image-wrapper']} style={{ height }}>
            <Image
              src={photo.herocarrouselimage.url || 'https://source.unsplash.com/user/wsanter'}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              className={styles.photo}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
