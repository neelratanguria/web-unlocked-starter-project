import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
import { AirPods } from '../../assets/large';

const ScrollImage = () => {
  const imgScrollRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const imgScrollTrigger = () => {
      const tl = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: imgScrollRef.current,
          start: "top top",
          end: "+=5000",
          pin: true,
          scrub: true,
          onUpdate: self => setProgress(self.progress)
        }
      });
      return tl
    }

    const master = gsap.timeline()
    master.add(imgScrollTrigger())
  }, [])

  useEffect(() => {
    //console.log(Math.round(AirPods.length/100*progress)*100)
    console.log(Math.round((AirPods.length/100*progress)*100))
    setIndex(Math.floor(((AirPods.length-1)/100*progress)*100))
  }, [progress])
  

  return (
    <div className='img-scroll' style={{height: "100vh", color: "white"}} ref={imgScrollRef}>
      <img src={AirPods[index]} style={{width: "50%", height: "50%", backgroundSize: "cover no-repeat"}}/>
      {progress}
    </div>
  )
}

export default ScrollImage