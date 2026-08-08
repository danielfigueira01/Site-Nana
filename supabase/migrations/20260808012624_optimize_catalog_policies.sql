-- Public storefront traffic uses the anon role. Authenticated users are
-- evaluated only by the administrator policies, avoiding duplicate permissive
-- policy evaluation while preserving the same public catalog behavior.
alter policy "public read active categories" on public.categories to anon;
alter policy "public read active products" on public.products to anon;
alter policy "public read product categories" on public.product_categories to anon;
alter policy "public read active variations" on public.product_variations to anon;
alter policy "public insert leads" on public.leads to anon;
alter policy "public insert orders" on public.orders to anon;
alter policy "public insert order items" on public.order_items to anon;
