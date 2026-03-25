// Get user's current credit balance
// TODO: Query users.credits_balance from Supabase

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Credit balance not yet implemented" }, { status: 501 });
}
