import React from 'react';
import { usePage } from '@inertiajs/react';
import CategoryMenu from '../pages/components/Category';
import Footer from '../pages/components/Footer';
import Header from './components/Header/Header';
import ProductList from './components/ProductList';
import HomePageBanner from './components/HomePageBanner';
import { Link } from '@inertiajs/react';

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  created_at: string;
  updated_at: string;
}

interface ProductsPagination {
  data: Product[];
  current_page: number;
  last_page: number;
}

interface PageProps {
  isLogin: boolean;
  products?: ProductsPagination;
  product?: Product;
  suggested?: Product[];
  [key: string]: unknown;
}

const HomePage: React.FC = () => {
  const { props } = usePage<PageProps>();
  const { isLogin, products, product, suggested } = props;

  const isDetailView = !!product;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header isLogin={isLogin} />

      <div className="content">
        {isDetailView ? (
          // ---------- Product Detail Mode ----------
          <main className="mx-auto w-full max-w-7xl px-4 py-10">
            <button
              onClick={() => window.history.back()}
              className="text-sm underline mb-4 cursor-pointer"
            >
              &larr; Kembali
            </button>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-5">
                <div className="aspect-square bg-gray-100 flex items-center justify-center rounded-md">
                  <span className="text-gray-400">Product Photo</span>
                </div>
                <p className="text-xl font-semibold text-center mt-4">
                  Rp {Number(product.price).toLocaleString('id-ID')}
                </p>
              </div>

              <div className="col-span-7 flex flex-col justify-between">
                <div>
                  <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                  <p className="text-sm text-gray-500 mb-4">&gt;&gt; Kategori belum tersedia</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 whitespace-pre-wrap">
                    {product.description}
                  </p>
                  <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-700 w-fit">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Suggested Products */}
            <div className="mt-12">
              <h2 className="text-lg font-semibold mb-4">Suggested products...</h2>
              <div className="grid grid-cols-5 gap-4">
                {suggested?.map((item: any) => (
                  <Link
                    href={`/products/${item.slug}`}
                    key={item.id}
                    className="border rounded-md p-4 text-center cursor-pointer hover:bg-gray-50"
                  >
                    <div className="aspect-square bg-gray-100 mb-2 flex items-center justify-center">
                      <span className="text-gray-400">{item.name}</span>
                    </div>
                    <p className="text-sm">{item.name}</p>
                    <p className="text-xs text-gray-600">Rp {Number(item.price).toLocaleString('id-ID')}</p>
                  </Link>
                ))}
              </div>
            </div>
          </main>
        ) : (
          // ---------- Product List Mode ----------
          <>
            <HomePageBanner />

            <div className="mx-auto w-full max-w-7xl px-4">
              <CategoryMenu />
            </div>

            <main className="flex-grow mx-auto w-full max-w-7xl px-4 py-6">
              <h1 className="text-2xl font-bold mb-6">Katalog Produk</h1>
              <ProductList products={products?.data ?? []} />
            </main>
          </>
        )}
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
