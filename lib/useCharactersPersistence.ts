import { Character } from "@/db/characters";
import { useCallback } from "react";

export function useCharactersPersistence() {
  const maxCharacters = 5;

  const saveCharacter = (character: Character) => {
    let characters: Character[] = [];
    const retrievedCharacters = localStorage.getItem("characters");
    if (retrievedCharacters) {
      characters = JSON.parse(retrievedCharacters);
    }

    characters.push(character);

    if (characters.length > maxCharacters) {
      characters.shift();
    }

    localStorage.setItem("characters", JSON.stringify(characters));
  };

  const retrieveCharacters = useCallback((): Character[] => {
    const retrievedCharacters = localStorage.getItem("characters");
    return retrievedCharacters ? JSON.parse(retrievedCharacters) : [];
  }, []);

  const deleteCharacters = () => {
    localStorage.removeItem("characters");
  };

  return { saveCharacter, retrieveCharacters, deleteCharacters };
}
