import React, { useEffect } from 'react'
import { photos, videos } from '../../data'
import { gsap } from 'gsap'

const VideoElement = ({ src }) => {
  return (
    <div className='hero-element'>
      <video
        className='collage-element'
        playsInline=""
        autoPlay
        webkit-playsinline=""
        loop
        src={src}
      >
      </video>
    </div>
  )
}

const ImageElement = ({ src }) => {
  return (
    <div className='hero-element'>
      <img className='collage-element' src={src} alt=""/>
    </div>
  )
}

const HeroCollage = () => {

  const leftImages = photos.slice(0, 2);
  const rightImages = photos.slice(2, photos.length);

  const [ leftVideo, rightVideo ] = videos;

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.5
    });

    tl.fromTo(
      ".hero-element",
      {
        y: 300
      },
      {
        y: 0,
        duration: 1,
        delay: function(i) {
          return i * 0.2;
        }
      }
    )
  }, [])
  

  return (
    <div className='hero-collage'>
      <div className='left-column'>
        {leftImages.map((src) => (
          <ImageElement src={src} key={src} />
        ))}
        <VideoElement src={leftVideo} />
      </div>
      <div className='right-column'>
      {rightImages.map((src) => (
          <ImageElement src={src} key={src} />
        ))}
        <VideoElement src={rightVideo} />
      </div>

    </div>
  )
}

export default HeroCollage