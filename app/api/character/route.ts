import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/supabase";

export async function POST(req: NextRequest) {
  const apiSecret = process.env.API_SECRET;
  if (req.headers.get("api-secret") !== apiSecret) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const data = await req.json();
  const category: "hunters" | "survivors" = data.category;
  if (category !== "hunters" && category !== "survivors") {
    return NextResponse.json(
      { message: "Category not found" },
      { status: 404 },
    );
  }

  const name = data.name.trim();
  const nickname = data.nickname.trim();
  const img = data.img.trim();
  const duo = data.duo;

  const { error } = await db
    .from(category)
    .insert({ name, nickname, img, duo });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 5000 });
  }

  return NextResponse.json(
    { message: nickname + " added successfully" },
    { status: 200 },
  );
}

export async function DELETE(req: NextRequest) {
  const apiSecret = process.env.API_SECRET;
  if (req.headers.get("api-secret") !== apiSecret) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const data = await req.json();
  const category: "hunters" | "survivors" = data.category;
  if (category !== "hunters" && category !== "survivors") {
    return NextResponse.json(
      { message: "Category not found" },
      { status: 404 },
    );
  }

  const nickname = data.nickname.trim();

  const { error } = await db.from(category).delete().eq("nickname", nickname);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(
    { message: nickname + " removed successfully" },
    { status: 200 },
  );
}
