"use client";

import { useRecentCharactersPersistence } from "@/lib/useRecentCharactersPersistence";
import React, { useEffect, useState } from "react";
import { Character } from "@/models/characters";
import { Button } from "@/components/ui/button";

import { CharacterDialog } from "@/components/CharacterDialog";

export default function Recent() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const { retrieveCharacters, deleteCharacters } =
    useRecentCharactersPersistence();

  useEffect(() => {
    setCharacters(retrieveCharacters());
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
          <CharacterDialog character={character} height={200} key={idx} />
        ))}
      </div>
      {isDeleting ? (
        <Button
          onClick={onConfirmDelete}
          className="bg-black hover:bg-black/80"
        >
          Are you sure?
        </Button>
      ) : (
        <Button onClick={() => setIsDeleting(true)}>Delete history</Button>
      )}
    </div>
  );
}
