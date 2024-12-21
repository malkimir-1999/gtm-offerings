import React from 'react'
import { motion } from 'framer-motion'
const OfferCard = ({ offer }) => {
  
  return (
    <>
      <div className=''>
        <motion.div className='offer_card'>
          <h2 className=''>
            <span className='title'>{offer.title}</span>
            <span className='badge'>{offer.targit}</span>
          </h2>
          <div className=' relative'>
            <div className='card_image'>
              <img src={offer.image} alt='Large' className='card-image' />
            </div>
            <span className='card_icon'>
              <img src={offer.icon} alt='Funnel Icon' className='button-icon' />
            </span>
          </div>
          <div className=''>
            <h3 className='my-[12px]'>{offer.position}</h3>
            <p className=''>{offer.description}</p>
          </div>
          <button class='animated-button'>
            <svg
              viewBox='0 0 24 24'
              class='arr-2'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z'></path>
            </svg>
            <span class='text'>Learn more</span>
            <span class='circle'></span>
            <svg
              viewBox='0 0 24 24'
              class='arr-1'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z'></path>
            </svg>
          </button>
          <img src={offer.icon} alt='Funnel Icon' className='button_icon' />
        </motion.div>
      </div>
    </>
  )
}

export default OfferCard
