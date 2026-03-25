// OpenAI client + prompt templates
// TODO: Install openai and configure

export const CREDIT_COSTS = {
  "generate-listing": 2,
  "generate-alt-text": 2,
  "full-seo-scan": 15,
  "generate-ad-copy": 5,
  "price-check": 1,
  "pricing-suggestion": 3,
  "supplier-search": 5,
  "product-research": 8,
  "niche-suggestion": 10,
  "store-blueprint": 10,
  "store-audit": 15,
} as const;

export type AIAction = keyof typeof CREDIT_COSTS;
