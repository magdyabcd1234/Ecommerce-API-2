import Categories from '@/components/home/Categories'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero'
import React from 'react'
import Offers from '@/components/home/Offers'
import BrandStory from '@/components/home/BrandStory'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import NewsletterSection from '@/components/home/NewsletterSection'

const page = () => {
  return (

    <>
    <Hero />
    <Categories />
    <FeaturedProducts />
    <Offers />
    <BrandStory />
    <TestimonialsSection />
    <NewsletterSection />
    </>
  
  )
}

export default page
