// Stripe checkout session creation
// TODO: Create checkout sessions for plan subscriptions

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Stripe checkout not yet configured" }, { status: 501 });
}
