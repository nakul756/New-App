// Check current price of tracked competitor
// TODO: Scrape URL, store price snapshot, check alert threshold
// Cost: 1 credit

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Price check not yet implemented" }, { status: 501 });
}
