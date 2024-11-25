import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Character } from "@/lib/characters-db";

const CharacterCard = ({
  character,
  textColor,
  pictureHeight,
  animated,
}: {
  character: Character | null;
  textColor?: "black" | "white";
  pictureHeight: number;
  animated?: boolean;
}) => {
  let textClass = "";
  if (textColor === "black") textClass = "text-black no-text-shadow";
  else textClass = "card-name";
  let transition = "";
  if (animated)
    transition = "hover:scale-105 transition-transform duration-300";

  return (
    <Card
      className={`bg-white/20 backdrop-blur-lg border-slate-100/20 shadow-md ${transition}`}
    >
      <CardHeader>
        <CardTitle className="text-center flex flex-col gap-1">
          <p className={textClass}>{character?.name}</p>
          <p className={textClass}>&#34;{character?.nickname}&#34;</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <img
          src={character?.img}
          alt={character?.nickname + " image"}
          style={{ height: `${pictureHeight}px` }}
        />
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
