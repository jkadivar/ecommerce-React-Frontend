
-- Fix the infinite recursion in profiles policies by dropping and recreating them
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;

-- Create simpler, non-recursive policies for profiles
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Fix the cart_items policies
DROP POLICY IF EXISTS "Users can manage own cart" ON public.cart_items;

CREATE POLICY "Users can view own cart" ON public.cart_items
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own cart" ON public.cart_items
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own cart" ON public.cart_items
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own cart" ON public.cart_items
  FOR DELETE USING (auth.uid() = user_id);

-- Insert sample products for testing
INSERT INTO public.products (name, description, price, category, stock_quantity, image_url) VALUES
('Wireless Headphones', 'High-quality Bluetooth wireless headphones with noise cancellation', 89.99, 'Electronics', 25, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'),
('Organic Coffee Beans', 'Premium organic coffee beans, fair trade certified', 24.99, 'Food & Beverage', 100, 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500'),
('Yoga Mat', 'Eco-friendly yoga mat made from natural materials', 39.99, 'Fitness', 45, 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500'),
('Leather Wallet', 'Handcrafted genuine leather wallet with RFID protection', 49.99, 'Accessories', 30, 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500'),
('Stainless Steel Thermos', 'Insulated thermos bottle keeps drinks hot or cold for 12 hours', 34.99, 'Kitchen', 60, 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500'),
('Gaming Mouse', 'High-precision gaming mouse with RGB lighting', 79.99, 'Electronics', 20, 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500'),
('Plant-Based Protein Powder', 'Organic plant-based protein powder, vanilla flavor', 44.99, 'Health', 35, 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500'),
('Bamboo Cutting Board', 'Sustainable bamboo cutting board with antimicrobial properties', 29.99, 'Kitchen', 50, 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500')
ON CONFLICT DO NOTHING;
