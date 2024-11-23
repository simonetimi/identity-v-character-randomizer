import React from "react";

const Header = () => {
  return (
    <header className="p-4 flex items-center border-b border-slate-100/20 h-[10dvh] shadow bg-white/10 backdrop-blur-lg">
      <h1 className="text-2xl">
        <span className="font-bold">Identity V</span>{" "}
        <span className="underline-offset-8 underline">
          Character Randomizer
        </span>
      </h1>
    </header>
  );
};

export default Header;
