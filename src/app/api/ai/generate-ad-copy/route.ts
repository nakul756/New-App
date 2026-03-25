// AI Ad Copy Generator endpoint
// TODO: Accept product + platform + goal, generate ad variations + mockup
// Cost: 5 credits

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Ad copy generator not yet implemented" }, { status: 501 });
}
