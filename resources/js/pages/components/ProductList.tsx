import React from 'react';

interface ProductItemProps {
    name: string;
    price: number;
}

// ProductCard component is now defined within the same file
const ProductCard = ({ name, price }: ProductItemProps) => {
    return (
        <div className="border rounded-md overflow-hidden flex flex-col cursor-pointer">
            {/* Product Image */}
            <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">Product Image</span>
            </div>

            {/* Product Info */}
            <div className="p-4">
                <h3 className="font-medium">{name}</h3>
                <p className="text-sm text-gray-600 mt-1">Rp {price.toFixed(3)}</p>
            </div>
        </div>
    );
};

// Main ProductList component that contains the grid and the ProductCard components
const ProductList = () => {
    // Sample product data
    const products = [
        { id: 1, name: 'Product 1', price: 29.99 },
        { id: 2, name: 'Product 2', price: 39.99 },
        { id: 3, name: 'Product 3', price: 49.99 },
        { id: 4, name: 'Product 4', price: 59.99 },
        { id: 5, name: 'Product 5', price: 69.99 },
        { id: 6, name: 'Product 6', price: 79.99 },
        { id: 7, name: 'Product 7', price: 89.99 },
        { id: 8, name: 'Product 8', price: 99.99 },
        { id: 9, name: 'Product 9', price: 109.99 },
        { id: 10, name: 'Product 10', price: 119.99 },
    ];

    return (
        <div>
            <div className="grid grid-cols-5 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;