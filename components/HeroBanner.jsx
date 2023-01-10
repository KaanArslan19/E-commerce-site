import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'


const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
    <div className="">
      <div className="hero-banner-styling">
      <div className="hero-banner-text">
      <p className='tote-bag'>{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <h3>{heroBanner.largeText2}</h3>
      </div>
      <img src={urlFor(heroBanner.image)} alt="clothes" className='hero-banner-image' />
      </div>
      <div className='hero-second-row'>
        <div>
          
        <Link href={`/product/${heroBanner.product}`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
        </div>
        <div className="desc">
          
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeroBanner
