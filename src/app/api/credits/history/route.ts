// Get credit transaction history
// TODO: Return credit_transactions for the user

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Credit history not yet implemented" }, { status: 501 });
}
