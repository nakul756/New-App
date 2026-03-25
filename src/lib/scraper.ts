// Scraping helpers using Playwright + Cheerio
// TODO: Install playwright and cheerio

export async function scrapePrice(_url: string): Promise<{
  price: number | null;
  currency: string;
  inStock: boolean;
}> {
  // TODO: Use Playwright for JS-rendered pages, Cheerio for static
  return { price: null, currency: "USD", inStock: false };
}

export async function scrapeSupplier(_url: string): Promise<{
  name: string;
  rating: number;
  totalOrders: number;
  shipFrom: string;
}> {
  // TODO: Scrape supplier details from AliExpress/CJ/Alibaba
  return { name: "", rating: 0, totalOrders: 0, shipFrom: "" };
}
