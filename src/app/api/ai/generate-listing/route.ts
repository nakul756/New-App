// AI Product Listing Generator endpoint
// TODO: Accept product photo/details, call OpenAI Vision + text, return listing
// Cost: 2 credits

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Listing generator not yet implemented" }, { status: 501 });
}
