import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Character } from "@/lib/characters-db";
import CharacterCard from "@/components/ui/CharacterCard";
import React from "react";

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
        <DialogTitle className=" no-text-shadow text flex flex-col gap-2">
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
