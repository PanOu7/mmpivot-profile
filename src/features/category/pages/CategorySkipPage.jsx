"use client";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect } from 'react'
import CategorySkipSection from '../components/CategorySkipSection';
import { useRouter } from 'next/navigation';

const CategorySkipPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/products/category/all")
  })
  return (
    <main className='flex flex-col min-h-svh'>
      <Header />
      <CategorySkipSection />
      <Footer />
    </main>
  )
}

export default CategorySkipPage