// Get price history for a tracked competitor
// TODO: Return price_snapshots for charting with Recharts

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Price history not yet implemented" }, { status: 501 });
}
