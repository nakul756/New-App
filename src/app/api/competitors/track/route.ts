// Add competitor URL for price tracking
// TODO: Validate URL, create tracked_competitors record, schedule first scrape

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Competitor tracking not yet implemented" }, { status: 501 });
}
