// AI Supplier Search endpoint
// TODO: Multi-platform scraping + AI ranking of suppliers
// Cost: 5 credits

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Supplier search not yet implemented" }, { status: 501 });
}
