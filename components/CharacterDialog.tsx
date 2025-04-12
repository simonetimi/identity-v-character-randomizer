import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Character } from "@/models/characters";
import CharacterCard from "@/components/ui/CharacterCard";
import React from "react";
import { DialogDescription } from "@radix-ui/react-dialog";

export function CharacterDialog({
  character,
  height,
}: {
  character: Character | null;
  height: number;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hover:cursor-pointer">
          <CharacterCard
            character={character}
            pictureHeight={height}
            animated
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-fit">
        <DialogDescription className="sr-only">
          {character?.nickname}
        </DialogDescription>
        <DialogTitle className="no-text-shadow text flex flex-col gap-2">
          <p className="card-name">{character?.name}</p>
          <p className="card-name">&#34;{character?.nickname}&#34;</p>
        </DialogTitle>
        <div className="flex justify-center">
          <img
            src={character?.img}
            alt={character?.nickname + " image"}
            style={{ height: "500px" }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
