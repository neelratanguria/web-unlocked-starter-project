import React, { useEffect, useRef} from 'react'
import { gsap } from 'gsap'

const HeroFooter = () => {
  const footerRef = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.2,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top center",
        end: "+=1000",
        scrub: true,
      }
    });
    tl.to("#footer-text", { opacity: 1, scale: 1},"-=0.4")
    
    
  }, [])
  
  return (
    <div className='hero-text-section' ref={footerRef}>
      <h1 id='footer-text' >Visual stories that feel like yours, because they are.</h1>
    </div>
  )
}

export default HeroFooter