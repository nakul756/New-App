// Push generated content (alt text, descriptions) to Shopify
// TODO: Use Shopify Admin API to update products

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Shopify push not yet implemented" }, { status: 501 });
}
