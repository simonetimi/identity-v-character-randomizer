"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dices } from "lucide-react";
import { Character, hunters, survivors } from "@/lib/characters-db";
import { useCharactersPersistence } from "@/lib/useCharactersPersistence";
import { CharacterDialog } from "@/components/CharacterDialog";
import characterCard from "@/components/ui/CharacterCard";

let importedHunters = hunters;
let importedSurvivors = survivors;

const CharactersSelector = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  );
  const [imageLoaded, setImageLoaded] = useState(false);

  const { saveCharacter } = useCharactersPersistence();

  const onSelectCategory = (category: string) => {
    setCategory(category);

    setTimeout(() => {
      let newCharacters =
        category === "survivors" ? importedSurvivors : importedHunters;

      // if no characters left, reset characters
      if (newCharacters.length === 0) {
        if (category === "survivors") {
          importedSurvivors = survivors;
          newCharacters = importedSurvivors;
        } else {
          importedHunters = hunters;
          newCharacters = importedHunters;
        }
      }

      // select random character
      const randomIndex = Math.floor(Math.random() * newCharacters.length);

      const characterName = newCharacters[randomIndex].name;

      // save to state and history
      setSelectedCharacter(newCharacters[randomIndex] || null);
      saveCharacter(newCharacters[randomIndex]);

      // updates current array to avoid duplicate calls
      if (category === "survivors") {
        importedSurvivors = importedSurvivors.filter(
          (character) => character.name !== characterName,
        );
      } else {
        importedHunters = importedHunters.filter(
          (character) => character.name !== characterName,
        );
      }
    }, 1000);
  };

  const onReset = () => {
    setCategory(null);
    setSelectedCharacter(null);
    setImageLoaded(false);
  };

  if (!category)
    return (
      <div className=" p-4 lg:w-[500px] w-11/12 flex flex-col gap-4 items-center">
        <h2 className="text-xl">Select a category</h2>
        <section className="flex gap-2">
          <Button onClick={() => onSelectCategory("survivors")}>
            Survivors
          </Button>
          <Button onClick={() => onSelectCategory("hunters")}>Hunters</Button>
        </section>
      </div>
    );

  if (!imageLoaded)
    return (
      <div className=" p-4 lg:w-[500px] w-11/12 flex flex-col gap-2 items-center">
        <Dices className="animate-bounce drop-shadow" size={40} color="white" />
        <p className="text-xl">Selecting your {category.slice(0, -1)}...</p>
        {selectedCharacter && (
          <img
            src={selectedCharacter.img}
            alt={selectedCharacter.nickname + " image"}
            className="hidden"
            onLoad={() => setImageLoaded(true)}
          />
        )}
      </div>
    );

  return (
    <div className="lg:w-[500px] w-11/12 flex flex-col items-center gap-8">
      <CharacterDialog character={selectedCharacter} height={300} />
      <Button onClick={onReset}>Reset</Button>
    </div>
  );
};

export default CharactersSelector;
