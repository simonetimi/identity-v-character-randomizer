import CharactersSelector from "@/components/CharactersSelector";
import { db } from "@/db/supabase";

export default async function Home() {
  const filters = "name, nickname, img, duo";
  const { data: hunters } = await db.from("hunters").select(filters);
  const { data: survivors } = await db.from("survivors").select(filters);

  if (!hunters || !survivors) {
    return null;
  }

  return <CharactersSelector hunters={hunters} survivors={survivors} />;
}
