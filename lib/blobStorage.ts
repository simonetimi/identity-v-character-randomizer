import { getDownloadUrl } from "@vercel/blob";
import { Character } from "@/db/characters";

export const getCharactersFromBlobStorage = async (
  category: "hunters" | "survivors",
) => {
  const charactersListUrl = getDownloadUrl(
    `${process.env.NEXT_PUBLIC_BLOB_STORAGE_BASE_URL}/${category}/characters.json`,
  );
  const charactersListRes = await fetch(charactersListUrl);
  const charactersList: Character[] = await charactersListRes.json();
  return charactersList;
};
