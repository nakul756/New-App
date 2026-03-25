// Shopify product catalog sync
// TODO: Pull products, images, collections from connected Shopify store

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Shopify sync not yet implemented" }, { status: 501 });
}
