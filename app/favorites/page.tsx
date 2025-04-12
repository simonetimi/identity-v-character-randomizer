import { db } from "@/db/supabase";
import FavoriteCharacters from "@/components/FavoriteCharacters";

export default async function Favorites() {
  const filters = "name, nickname, img, duo";
  const { data: hunters } = await db.from("hunters").select(filters);
  const { data: survivors } = await db.from("survivors").select(filters);

  if (!hunters || !survivors) {
    return null;
  }

  return <FavoriteCharacters hunters={hunters} survivors={survivors} />;
}
