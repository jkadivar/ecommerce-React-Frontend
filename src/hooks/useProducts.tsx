import { useState, useEffect } from 'react';
import { api } from '@/integrations/supabase/client';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await api.products.list();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getProduct = async (id) => {
    try {
      const data = await api.products.get(id);
      return data;
    } catch (err) {
      setError(err);
      return null;
    }
  };

  return { products, loading, error, getProduct };
}; 