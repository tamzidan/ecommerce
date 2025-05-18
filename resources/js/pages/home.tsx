import React from 'react';
import CategoryMenu from '../pages/components/Category';
import Footer from '../pages/components/Footer';
import Header from './components/Header/Header';
import ProductList from './components/ProductList';
import HomePageBanner from './components/HomePageBanner';
import { usePage } from '@inertiajs/react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface PageProps {
  isLogin: boolean;
  products: Product[];
  [key: string]: unknown;
}

const HomePage = () => {
  const { props } = usePage<PageProps>();
  const { isLogin, products } = props;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header isLogin={isLogin} />

      {/* Banner Section */}
      <HomePageBanner />

      {/* Category Section */}
      <div className="mx-auto w-full max-w-7xl px-4">
        <CategoryMenu />
      </div>

      {/* Product List Section */}
      <main className="flex-grow mx-auto w-full max-w-7xl px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Katalog Produk</h1>
        <ProductList products={products} />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;