import Header from '@/components/Header'
import React from 'react'
import NewsHeroSection from '../components/NewsHeroSection'
import Footer from '@/components/Footer'
import NewsCategorySection from '../components/NewsCategorySection'

const NewsCategoryPage = () => {
  return (
    <main className="flex flex-col min-h-svh">
    <Header />
   <NewsCategorySection/>
    <Footer />
  </main>
  )
}

export default NewsCategoryPage