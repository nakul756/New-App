// ============================================
// User & Auth Types
// ============================================
export interface User {
  id: string;
  email: string;
  name: string | null;
  plan: "trial" | "starter" | "growth" | "pro" | "business";
  creditsBalance: number;
  stripeCustomerId: string | null;
  trialEndsAt: Date | null;
  createdAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  stripeSubId: string;
  plan: string;
  status: "active" | "canceled" | "past_due";
  currentPeriodEnd: Date;
  createdAt: Date;
}

// ============================================
// Credit System Types
// ============================================
export interface CreditTransaction {
  id: string;
  userId: string;
  type: "grant" | "use" | "purchase" | "refund";
  amount: number;
  feature: string | null;
  description: string;
  createdAt: Date;
}

export interface CreditPack {
  id: string;
  userId: string;
  stripePaymentId: string;
  credits: number;
  priceCents: number;
  purchasedAt: Date;
}

// ============================================
// Store & Product Types
// ============================================
export interface Store {
  id: string;
  userId: string;
  shopifyDomain: string;
  accessToken: string | null;
  lastSynced: Date | null;
  createdAt: Date;
}

export interface Product {
  id: string;
  storeId: string;
  shopifyProductId: string | null;
  title: string;
  imagesJson: Record<string, unknown>[];
  seoScore: number | null;
  healthGrade: "A" | "B" | "C" | "D" | "F" | null;
  createdAt: Date;
}

export interface GeneratedContent {
  id: string;
  productId: string | null;
  userId: string;
  type: "description" | "alt_text" | "ad_copy" | "blueprint" | "audit";
  content: Record<string, unknown>;
  tone: string | null;
  language: string;
  createdAt: Date;
}

export interface StoreAudit {
  id: string;
  storeId: string;
  overallGrade: string;
  issuesJson: Record<string, unknown>[];
  trafficImpactEstimate: number;
  createdAt: Date;
}

// ============================================
// Competitor Intelligence Types
// ============================================
export interface TrackedCompetitor {
  id: string;
  userId: string;
  url: string;
  name: string | null;
  checkFrequency: "hourly" | "daily" | "weekly";
  alertThreshold: number;
  myPrice: number | null;
  createdAt: Date;
}

export interface PriceSnapshot {
  id: string;
  competitorId: string;
  price: number;
  currency: string;
  inStock: boolean;
  scrapedAt: Date;
}

export interface PricingSuggestion {
  id: string;
  competitorId: string;
  oldPrice: number;
  newPrice: number;
  suggestedAction: string;
  marginImpact: string;
  createdAt: Date;
}

// ============================================
// Supplier Types
// ============================================
export interface Supplier {
  id: string;
  platform: "aliexpress" | "cj" | "alibaba";
  name: string;
  url: string;
  rating: number;
  totalOrders: number;
  shipFrom: string;
  shipTimeDays: number;
  responseRate: number;
  reliabilityScore: number;
  lastUpdated: Date;
}

export interface SupplierProduct {
  id: string;
  supplierId: string;
  name: string;
  price: number;
  currency: string;
  category: string;
  trendingScore: number;
  lastUpdated: Date;
}

export interface SavedSupplier {
  id: string;
  userId: string;
  supplierId: string;
  notes: string | null;
  createdAt: Date;
}

// ============================================
// Research & Store Builder Types
// ============================================
export interface WinningProduct {
  id: string;
  userId: string;
  niche: string;
  resultsJson: Record<string, unknown>;
  createdAt: Date;
}

export interface StoreBlueprint {
  id: string;
  userId: string;
  niche: string;
  storeName: string;
  structureJson: Record<string, unknown>;
  status: "draft" | "active";
  createdAt: Date;
}

export interface NicheSuggestion {
  id: string;
  userId: string;
  suggestionsJson: Record<string, unknown>[];
  createdAt: Date;
}

// ============================================
// API Response Types
// ============================================
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
