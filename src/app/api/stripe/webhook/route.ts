// Stripe webhook handler
// TODO: Handle subscription events, payment confirmations, credit pack purchases

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Stripe webhook not yet configured" }, { status: 501 });
}
