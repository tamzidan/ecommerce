import React from 'react';
import { Link } from '@inertiajs/react';

interface ProductItemProps {
    id: number;
    name: string;
    price: number;
    slug: string;
}

interface ListProps {
    products: ProductItemProps[];
}

const ProductCard = ({ name, price, slug }: Omit<ProductItemProps, 'id'>) => (
    <div className="border rounded-md overflow-hidden flex flex-col cursor-pointer">
        <Link
            href={`/products/${slug}`}
        >
            <div className="aspect-square bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">Product Image</span>
            </div>
            <div className="p-4">
                <h3 className="font-medium">{name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                    Rp {price.toLocaleString('id-ID')}
                </p>
            </div>
        </Link>
    </div>
);

const ProductList: React.FC<ListProps> = ({ products }) => (
    <div className="grid grid-cols-5 gap-6">
        {products.map((p) => (
            <ProductCard key={p.id} slug={p.slug} name={p.name} price={p.price} />
        ))}
    </div>
);

export default ProductList;