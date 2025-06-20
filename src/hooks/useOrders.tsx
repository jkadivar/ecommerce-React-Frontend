import { useState, useEffect } from 'react';
import { api } from '@/integrations/supabase/client';

export const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await api.orders.list();
        setOrders(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const createOrder = async (items, total) => {
    try {
      const data = await api.orders.create(items, total);
      setOrders([...orders, data]);
      return data;
    } catch (err) {
      setError(err);
      return null;
    }
  };

  return { orders, loading, error, createOrder };
}; 