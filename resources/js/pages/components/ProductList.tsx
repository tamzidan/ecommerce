import React from 'react';

const products = '/products';

// type ProductListProps = {
//   products: Product[];
//   onAddToCart: (product: Product) => void;
// };

type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: string;
};

type Props = {
  products: Product[];
};


const ProductList = ({ products} : Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          <div className="p-6">
      <h1 className="text-2xl font-bold mb-4"></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <img className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-lg font-semibold"></h2>
            <p className="text-gray-600 mb-2">Rp </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
      </div>
    </div>
    </div>
    
  );
};

export default ProductList;