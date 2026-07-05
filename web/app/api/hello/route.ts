import { NextResponse } from "next/server";

// GET /api/hello — the backend Hello World endpoint.
export async function GET() {
  return NextResponse.json({ message: "Hello World from the briquebot API" });
}
