import { supabase } from '@/integrations/supabase/client';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const getAuthHeader = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return session?.access_token ? { Authorization: `Bearer ${session.access_token}` } : {};
};

export const api = {
  auth: {
    signin: async (email: string, password: string) => {
      const response = await fetch(`${API_URL}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to sign in');
      }
      return response.json();
    },

    signup: async (email: string, password: string) => {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to sign up');
      }
      return response.json();
    },

    signout: async () => {
      const response = await fetch(`${API_URL}/auth/signout`, {
        method: 'POST',
        headers: {
          ...(await getAuthHeader()),
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to sign out');
      }
      return response.json();
    },
  },

  cart: {
    list: async () => {
      const response = await fetch(`${API_URL}/cart`, {
        headers: {
          ...(await getAuthHeader()),
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to fetch cart');
      }
      return response.json();
    },

    add: async (productId: string, quantity: number) => {
      const response = await fetch(`${API_URL}/cart`, {
        method: 'POST',
        headers: {
          ...(await getAuthHeader()),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: productId, quantity }),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to add to cart');
      }
      return response.json();
    },

    update: async (cartItemId: string, quantity: number) => {
      const response = await fetch(`${API_URL}/cart/${cartItemId}`, {
        method: 'PUT',
        headers: {
          ...(await getAuthHeader()),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to update cart');
      }
      return response.json();
    },

    remove: async (cartItemId: string) => {
      const response = await fetch(`${API_URL}/cart/${cartItemId}`, {
        method: 'DELETE',
        headers: {
          ...(await getAuthHeader()),
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to remove from cart');
      }
      return response.json();
    },

    clear: async () => {
      const response = await fetch(`${API_URL}/cart`, {
        method: 'DELETE',
        headers: {
          ...(await getAuthHeader()),
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to clear cart');
      }
      return response.json();
    },
  },
}; 