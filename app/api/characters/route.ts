import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/supabase";

export async function GET(req: NextRequest) {
  const apiSecret = process.env.API_SECRET;
  if (req.nextUrl?.searchParams.get("secret") !== apiSecret) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { data: hunters, error: huntersError } = await db
    .from("hunters")
    .select("*");

  if (huntersError) {
    return NextResponse.json({ error: huntersError.message }, { status: 500 });
  }

  const { data: survivors, error: survivorsError } = await db
    .from("survivors")
    .select("*");

  if (survivorsError) {
    return NextResponse.json(
      { error: survivorsError.message },
      { status: 500 },
    );
  }

  return NextResponse.json(
    {
      hunters,
      survivors,
    },
    { status: 200 },
  );
}
