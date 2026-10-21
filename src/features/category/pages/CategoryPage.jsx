"use client";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CategorySection from '../components/CategorySection';

const CategoryPage = () => {
  return (
    <main className='flex flex-col min-h-svh'>
      <Header />
      <CategorySection />
      <Footer />
    </main>
  );
};

export default CategoryPage;
