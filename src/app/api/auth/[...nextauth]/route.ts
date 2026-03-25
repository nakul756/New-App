// NextAuth.js route handler
// TODO: Configure Google OAuth + email/password providers
// TODO: Add Supabase adapter for session/user persistence

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "NextAuth not yet configured" }, { status: 501 });
}

export async function POST() {
  return NextResponse.json({ message: "NextAuth not yet configured" }, { status: 501 });
}
