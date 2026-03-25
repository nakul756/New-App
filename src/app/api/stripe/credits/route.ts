// Credit top-up pack purchase via Stripe
// TODO: Create one-time payment session for credit packs

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Credit pack purchase not yet configured" }, { status: 501 });
}
