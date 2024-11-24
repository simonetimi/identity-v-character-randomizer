"use client";

import { useCharactersPersistence } from "@/lib/useCharactersPersistence";
import { useEffect, useState } from "react";
import { Character } from "@/lib/characters-db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Recent() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const { retrieveCharacters, deleteCharacters } = useCharactersPersistence();

  useEffect(() => {
    setCharacters(retrieveCharacters());
    console.log(retrieveCharacters());
  }, [retrieveCharacters]);

  if (characters.length === 0) {
    return <p>No character discovered yet.</p>;
  }

  const onConfirmDelete = () => {
    deleteCharacters();
    setCharacters([]);
    setIsDeleting(false);
  };

  return (
    <div className="my-6 flex flex-col items-center gap-10">
      <div className="lg:w-[1000px] w-11/12 flex justify-center flex-wrap items-center gap-6">
        {characters.map((character, idx) => (
          <Card
            key={idx}
            className="bg-white/20 backdrop-blur-lg border-slate-100/20 shadow-md"
          >
            <CardHeader>
              <CardTitle className="text-center flex flex-col gap-1">
                <p>{character?.name}</p>
                <p>&#34;{character?.nickname}&#34;</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <img
                src={character?.img}
                alt={character?.nickname + " image"}
                className="max-h-[200px]"
              />
            </CardContent>
          </Card>
        ))}
      </div>
      {isDeleting ? (
        <Button onClick={onConfirmDelete} variant="destructive">
          Are you sure?
        </Button>
      ) : (
        <Button onClick={() => setIsDeleting(true)}>Delete history</Button>
      )}
    </div>
  );
}
