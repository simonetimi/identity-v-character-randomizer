import { Character } from "@/db/characters";
import { useCallback } from "react";

export function useFavoriteCharactersPersistence() {
  const maxCharacters = 10;

  const saveAllCharacters = (characters: Character[]) => {
    localStorage.setItem("favoriteCharacters", JSON.stringify(characters));
  };

  const saveCharacter = (character: Character) => {
    let characters: Character[] = [];
    const retrievedCharacters = localStorage.getItem("favoriteCharacters");
    if (retrievedCharacters) {
      characters = JSON.parse(retrievedCharacters);
    }

    characters.push(character);

    if (characters.length > maxCharacters) {
      characters.shift();
    }

    localStorage.setItem("favoriteCharacters", JSON.stringify(characters));
  };

  const retrieveCharacters = useCallback((): Character[] => {
    const retrievedCharacters = localStorage.getItem("favoriteCharacters");
    return retrievedCharacters ? JSON.parse(retrievedCharacters) : [];
  }, []);

  const deleteCharacters = () => {
    localStorage.removeItem("favoriteCharacters");
  };

  return {
    saveCharacter,
    retrieveCharacters,
    deleteCharacters,
    saveAllCharacters,
  };
}
