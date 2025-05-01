import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
    const [product, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/products')
        .then(res => setProducts(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Daftar Produk</h1>
            <ul>
            {product.map(p => (
          <li key={p.id}>{p.name} - Rp{p.price}</li>
        ))}
            </ul>
        </div>
    );
};

export default Product;