import { useState, useEffect } from 'react';
import ProductCart from '../components/product-cart';
import Search from '../components/search';
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get('/api/products')
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <main data-testid="product-list" className="my-8">
      <Search />
      <div className="container mx-auto px-6">
        <h3 className="text-gray-700 text-2xl font-medium">Wrist Watch</h3>
        <span className="mt-3 text-sm text-gray-500">200+ Products</span>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {products.map((product) => (
            <ProductCart product={product} key={product.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
