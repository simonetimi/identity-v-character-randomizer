import CharactersSelector from "@/components/CharactersSelector";
import { db } from "@/db/supabase";

export default async function Home() {
  const { data: hunters } = await db.from("hunters").select();
  const { data: survivors } = await db.from("survivors").select();

  if (!hunters || !survivors) {
    return null;
  }

  return <CharactersSelector hunters={hunters} survivors={survivors} />;
}
