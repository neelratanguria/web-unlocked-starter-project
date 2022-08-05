import React from 'react'
import { featureSlides } from '../../data'
import cn from 'classnames'

const FeatureSlides = () => {
  const [ activeFeatureIndex, setActiveFeatureIndex ] = React.useState(0)

  const RenderImages = ({ activeFeatureIndex }) => {
    return featureSlides.map(({ imageUrl}, index) => (
      <img 
      className={cn({'as-primary' : activeFeatureIndex === index})}
      key={imageUrl}
      style={{ backgroundImage: `url(${imageUrl})` }}
      />
    ))
  }


  return (
    <div className='feature-slides-container'>
      <div className='feature-slides-left'>

      </div>
      <div className='feature-slides-right'>
        <RenderImages activeFeatureIndex={activeFeatureIndex} />
      </div>
    </div>
  )
}

export default FeatureSlides