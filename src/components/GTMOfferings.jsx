import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'
import OfferCard from './OfferCard'
const offerings = [
  {
    title: 'TOFU',
    targit: 'Build',
    image: './images/image1.png',
    icon: './images/funnel-icon.svg',
    position: 'Top-of-Funnel',
    description:
      'Verified List Building (lead gen & enrichment), AI Sales Automation, Signals/Insights, Enrichment'
  },
  {
    title: 'TOFU',
    targit: 'Prospect',
    image: './images/image2.png',
    icon: './images/funnel-icon.svg',
    description:
      'Pipeline Building, Email Marketing, TAM SAM SOM Mapping, Predictive Conversions, Content Market Fit',
    position: 'Top-of-Funnel'
  },
  {
    title: 'MOFU',
    targit: 'Engage',
    image: './images/image3.png',
    icon: './images/funnel-icon.svg',
    description:
      'SDRs-as-a-Service, RevOps Analysts, Leadership Induction, QA, Strategical Consulting',
    position: 'Middle-of-Funnel'
  },
  {
    title: 'BOFU',
    targit: 'Close',
    image: './images/image4.png',
    icon: './images/funnel-icon.svg',
    description:
      'AE’s, RevOps Specialists, Customer Support Specialists, Onboarding Specialists, CSM’s',
    position: 'Bottom-of-Funnel'
  }
]

const GTMOfferings = () => {
  return (
    <section className='py-[20px] sm:-[30px] md:py-[40px] lg:py-[50px] xl:py-[60px]'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-12'>
            <h1 className='w-full text-center text-[26] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[42px] mb-12'>Our GTM Offerings</h1>
            <div className=''>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  767: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 20
                  },
                  1399: {
                    slidesPerView: 4,
                    spaceBetween: 30
                  }
                }}
                modules={[Pagination]}
                className='mySwiper'
              >
                {offerings.map((offer, index) => (
                  <SwiperSlide>
                    <OfferCard key={index} offer={offer} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GTMOfferings
