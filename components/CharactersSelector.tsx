"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dices } from "lucide-react";
import { Character } from "@/models/characters";
import { useRecentCharactersPersistence } from "@/lib/useRecentCharactersPersistence";
import { CharacterDialog } from "@/components/CharacterDialog";
import { Toggle } from "@/components/ui/toggle";
import { useFavoriteCharactersPersistence } from "@/lib/useFavoriteCharactersPersistence";

const CharactersSelector = ({
  hunters,
  survivors,
}: {
  hunters: Character[];
  survivors: Character[];
}) => {
  const [category, setCategory] = useState<string | null>(null);
  const [duoMode, setDuoMode] = useState(false);
  const [importedHunters, setImportedHunters] = useState<Character[]>([]);
  const [importedSurvivors, setImportedSurvivors] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  );
  const [imageLoaded, setImageLoaded] = useState(false);

  const { retrieveCharacters } = useFavoriteCharactersPersistence();
  const { saveCharacter } = useRecentCharactersPersistence();

  const onSelectCategory = async (category: string) => {
    setCategory(category);

    setTimeout(async () => {
      let newCharacters =
        category === "survivors"
          ? [...importedSurvivors]
          : [...importedHunters];

      // if no characters left, reset characters
      if (newCharacters.length === 0) {
        const favoriteCharacters = retrieveCharacters();
        resetCharacters(category);
        if (category === "survivors") {
          // picks the survivors
          newCharacters = [...survivors];
          // adds an extra "favorite" char to increase odds
          favoriteCharacters.forEach((char: Character) => {
            if (
              !newCharacters.some(
                (existingChar) => existingChar.nickname === char.nickname,
              )
            ) {
              newCharacters.push(char);
            }
          });
        } else if (category === "hunters") {
          // picks the hunters
          newCharacters = [...hunters];
          // adds an extra "favorite" char to increase odds
          favoriteCharacters.forEach((char: Character) => {
            if (
              !newCharacters.some(
                (existingChar) => existingChar.nickname === char.nickname,
              )
            ) {
              newCharacters.push(char);
            }
          });
        }
      }

      // select random character
      let selectedCharacter;
      do {
        const randomIndex = Math.floor(Math.random() * newCharacters.length);
        selectedCharacter = newCharacters[randomIndex];
        if (category === "hunters" && duoMode && !selectedCharacter.duo) {
          continue;
        } else break;
      } while (true);

      // save to state and history
      setSelectedCharacter(selectedCharacter || null);
      saveCharacter(selectedCharacter);

      // updates current array to avoid duplicate calls
      if (category === "survivors") {
        setImportedSurvivors(
          newCharacters.filter(
            (character) => character.name !== selectedCharacter.name,
          ),
        );
      } else {
        setImportedHunters(
          newCharacters.filter(
            (character) => character.name !== selectedCharacter.name,
          ),
        );
      }
    }, 1000);
  };

  const resetCharacters = async (category: string | null = null) => {
    if (category === "survivors") setImportedSurvivors(survivors);
    else if (category === "hunters") setImportedHunters(hunters);
    else {
      setImportedHunters(hunters);
      setImportedSurvivors(survivors);
    }
  };

  const onBack = () => {
    setCategory(null);
    setSelectedCharacter(null);
    setImageLoaded(false);
  };

  const onSelectDuoMode = async () => {
    await resetCharacters();
    setDuoMode(!duoMode);
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
        <Toggle
          aria-label="Toggle italic"
          pressed={duoMode}
          onPressedChange={onSelectDuoMode}
          className="bg-primary hover:bg-primary/80 hover:text-white data-[state=on]:bg-primary data-[state=on]:text-white mt-4 data-[state=on]:shadow-[0px_0px_10px_4px_rgba(219,22,0,0.9)]

"
        >
          Duo Hunters Mode
        </Toggle>
      </div>
    );

  if (!imageLoaded)
    return (
      <div className=" p-4 lg:w-[500px] w-11/12 flex flex-col gap-2 items-center">
        <Dices
          className="animate-bounce drop-shadow-sm"
          size={40}
          color="white"
        />
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
      <Button onClick={onBack}>Go back</Button>
    </div>
  );
};

export default CharactersSelector;
