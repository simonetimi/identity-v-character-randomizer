"use client";

import React, { useEffect, useState } from "react";
import { Character, hunters, survivors } from "@/db/characters";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { CharacterDialog } from "@/components/CharacterDialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown, CircleHelp } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useFavoriteCharactersPersistence } from "@/lib/useFavoriteCharactersPersistence";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Favorites() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const { retrieveCharacters, deleteCharacters, saveCharacter } =
    useFavoriteCharactersPersistence();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    // retrieves all characters
    const fullListOfChars = [...hunters, ...survivors];

    // retrives favorites from local storage
    const favorites = retrieveCharacters();
    setFavoriteCharacters(favorites);

    // Sets all characters for the list without the favourites
    const favoriteCharNames = favorites.map((char) => char.nickname);
    setCharacters(
      fullListOfChars.filter(
        (char) => !favoriteCharNames.includes(char.nickname)
      )
    );
  }, [retrieveCharacters]);

  const onConfirmDelete = () => {
    deleteCharacters();
    setCharacters([...hunters, ...survivors]);
    setFavoriteCharacters([]);
    setValue("");
    setIsDeleting(false);
  };

  const onSelectChar = (currentValue: string) => {
    setValue(currentValue === value ? "" : currentValue);
    setOpen(false);

    // updates favorite characters
    const currentChar = characters.find(
      (char: Character) => char.nickname === currentValue
    );
    if (currentChar) {
      saveCharacter(currentChar);

      // Updated favorite's state
      const favorites = retrieveCharacters();
      setFavoriteCharacters(favorites);

      // Remove favorite characters from the list
      const favoriteCharNames = favorites.map((char) => char.nickname);
      const fullListOfChars = [...hunters, ...survivors];
      const charsToDisplay = fullListOfChars.filter(
        (char) => !favoriteCharNames.includes(char.nickname)
      );
      setCharacters(charsToDisplay);
    }
    setValue("");
  };

  return (
    <div className="my-6 flex flex-col items-center gap-10">
      <div className="flex">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between text-foreground"
            >
              {value
                ? characters.find((character) => character.nickname === value)
                    ?.nickname
                : "Select a character..."}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search character..." className="h-9" />
              <CommandList>
                <CommandEmpty>No character found.</CommandEmpty>
                <CommandGroup>
                  {characters.map((character) => (
                    <CommandItem
                      key={character.nickname}
                      value={character.nickname}
                      onSelect={onSelectChar}
                      className="text-[var(--text-color)]"
                    >
                      {character.nickname}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === character.name ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="ml-4">
              <CircleHelp />
            </TooltipTrigger>
            <TooltipContent>
              <p>
                Your favorite characters have double the chances to be rolled!
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="my-6 flex flex-col items-center gap-10">
        {favoriteCharacters.length === 0 ? (
          <p>No character added to favorites yet.</p>
        ) : (
          <div className="lg:w-[1000px] w-11/12 flex justify-center flex-wrap items-center gap-6">
            {favoriteCharacters.map((character) => (
              <CharacterDialog
                character={character}
                height={200}
                key={character.nickname}
              />
            ))}
          </div>
        )}
        {isDeleting ? (
          <Button
            onClick={onConfirmDelete}
            className="bg-black hover:bg-black/80"
          >
            Are you sure?
          </Button>
        ) : (
          favoriteCharacters.length > 0 && (
            <Button onClick={() => setIsDeleting(true)}>
              Delete favorites
            </Button>
          )
        )}
      </div>
    </div>
  );
}
