// Stripe helpers
// TODO: Install stripe and configure

export const PLANS = {
  starter: { name: "Starter", monthlyPrice: 900, yearlyPrice: 8600, credits: 50 },
  growth: { name: "Growth", monthlyPrice: 2400, yearlyPrice: 23000, credits: 150 },
  pro: { name: "Pro", monthlyPrice: 4900, yearlyPrice: 47000, credits: 400 },
  business: { name: "Business", monthlyPrice: 9900, yearlyPrice: 95000, credits: 1000 },
} as const;

export const CREDIT_PACKS = {
  starter: { credits: 50, priceCents: 500 },
  power: { credits: 200, priceCents: 1600 },
  bulk: { credits: 500, priceCents: 3000 },
} as const;
