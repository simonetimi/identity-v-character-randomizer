import { NextRequest, NextResponse } from "next/server";
import { put, getDownloadUrl } from "@vercel/blob";
import { Character } from "@/db/characters";

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

  const charName = data.name.trim();
  const charNickname = data.nickname.trim();
  const charImg = data.img.trim();
  const duo = data.duo;

  if (!charName || !charNickname || !charImg || !charNickname) {
    return NextResponse.json({ message: "Incomplete data" }, { status: 500 });
  }

  const charactersListUrl = getDownloadUrl(
    `${process.env.NEXT_PUBLIC_BLOB_STORAGE_BASE_URL}/${category}/characters.json`,
  );
  const charactersListRes = await fetch(charactersListUrl);
  const charactersList: Character[] = await charactersListRes.json();

  charactersList.push({
    name: charName,
    nickname: charNickname,
    img: charImg,
    duo: duo,
  });

  await put(`${category}/characters.json`, JSON.stringify(charactersList), {
    access: "public",
    allowOverwrite: true,
    contentType: "application/json",
  });

  return NextResponse.json(
    { message: charNickname + " added successfully" },
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

  const charNickname = data.nickname.trim();

  if (!charNickname) {
    return NextResponse.json({ message: "Nickname missing" }, { status: 500 });
  }

  const charactersListUrl = getDownloadUrl(
    `${process.env.NEXT_PUBLIC_BLOB_STORAGE_BASE_URL}/${category}/characters.json`,
  );
  const charactersListRes = await fetch(charactersListUrl);
  let charactersList: Character[] = await charactersListRes.json();

  charactersList = charactersList.filter(
    (char) => char.nickname !== charNickname,
  );

  await put(`${category}/characters.json`, JSON.stringify(charactersList), {
    access: "public",
    allowOverwrite: true,
    contentType: "application/json",
  });

  return NextResponse.json(
    { message: charNickname + " removed successfully" },
    { status: 200 },
  );
}
