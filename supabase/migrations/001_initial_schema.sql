-- SellerKit Initial Database Schema
-- Run this migration to set up all tables in Supabase

-- Users & Billing
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  plan TEXT DEFAULT 'trial',
  credits_balance INTEGER DEFAULT 50,
  stripe_customer_id TEXT,
  trial_ends_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  stripe_sub_id TEXT,
  plan TEXT NOT NULL,
  status TEXT DEFAULT 'active',
  current_period_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE credit_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  type TEXT NOT NULL,
  amount INTEGER NOT NULL,
  feature TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE credit_packs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  stripe_payment_id TEXT,
  credits INTEGER NOT NULL,
  price_cents INTEGER NOT NULL,
  purchased_at TIMESTAMPTZ DEFAULT now()
);

-- Store & Content
CREATE TABLE stores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  shopify_domain TEXT NOT NULL,
  access_token TEXT,
  last_synced TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  store_id UUID REFERENCES stores(id),
  shopify_product_id TEXT,
  title TEXT,
  images_json JSONB,
  seo_score INTEGER,
  health_grade TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE generated_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id),
  user_id UUID REFERENCES users(id),
  type TEXT NOT NULL,
  content JSONB NOT NULL,
  tone TEXT,
  language TEXT DEFAULT 'en',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE store_audits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  store_id UUID REFERENCES stores(id),
  overall_grade TEXT,
  issues_json JSONB,
  traffic_impact_estimate INTEGER,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Competitors & Suppliers
CREATE TABLE tracked_competitors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  url TEXT NOT NULL,
  name TEXT,
  check_frequency TEXT DEFAULT 'daily',
  alert_threshold DECIMAL DEFAULT 10.0,
  my_price DECIMAL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE price_snapshots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  competitor_id UUID REFERENCES tracked_competitors(id),
  price DECIMAL,
  currency TEXT DEFAULT 'USD',
  in_stock BOOLEAN DEFAULT true,
  scraped_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE pricing_suggestions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  competitor_id UUID REFERENCES tracked_competitors(id),
  old_price DECIMAL,
  new_price DECIMAL,
  suggested_action TEXT,
  margin_impact TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE suppliers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  platform TEXT NOT NULL,
  name TEXT,
  url TEXT,
  rating DECIMAL,
  total_orders INTEGER,
  ship_from TEXT,
  ship_time_days INTEGER,
  response_rate DECIMAL,
  reliability_score DECIMAL,
  last_updated TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE supplier_products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  supplier_id UUID REFERENCES suppliers(id),
  name TEXT,
  price DECIMAL,
  currency TEXT DEFAULT 'USD',
  category TEXT,
  trending_score DECIMAL,
  last_updated TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE saved_suppliers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  supplier_id UUID REFERENCES suppliers(id),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE winning_products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  niche TEXT,
  results_json JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Store Builder
CREATE TABLE store_blueprints (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  niche TEXT,
  store_name TEXT,
  structure_json JSONB,
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE niche_suggestions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  suggestions_json JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);
