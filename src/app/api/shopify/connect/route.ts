// Shopify store connection endpoint
// TODO: Validate Shopify API credentials, store access token

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Shopify connect not yet implemented" }, { status: 501 });
}
