// AI Alt Text Generator endpoint
// TODO: Accept product image, call OpenAI Vision API, return alt text
// Cost: 2 credits

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Alt text generator not yet implemented" }, { status: 501 });
}
