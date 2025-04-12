import { Character } from "@/models/characters";
import { useCallback } from "react";

export function useRecentCharactersPersistence() {
  const maxCharacters = 5;

  const saveCharacter = (character: Character) => {
    let characters: Character[] = [];
    const retrievedCharacters = localStorage.getItem("recentCharacters");
    if (retrievedCharacters) {
      characters = JSON.parse(retrievedCharacters);
    }

    characters.push(character);

    if (characters.length > maxCharacters) {
      characters.shift();
    }

    localStorage.setItem("recentCharacters", JSON.stringify(characters));
  };

  const retrieveCharacters = useCallback((): Character[] => {
    const retrievedCharacters = localStorage.getItem("recentCharacters");
    return retrievedCharacters ? JSON.parse(retrievedCharacters) : [];
  }, []);

  const deleteCharacters = () => {
    localStorage.removeItem("recentCharacters");
  };

  return { saveCharacter, retrieveCharacters, deleteCharacters };
}
