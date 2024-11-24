"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  let linkUrl = "";
  if (pathname === "/") {
    linkUrl = "/recent";
  } else if (pathname === "/recent") {
    linkUrl = "/";
  }

  return (
    <header className="sticky z-10 top-0 p-4 flex items-center border-b border-slate-100/20 h-[10dvh] shadow bg-white/10 backdrop-blur-lg">
      <div className="flex flex-col">
        <h1 className="lg:text-2xl text-lg font-bold">Identity V</h1>
        <h2 className="underline-offset-4 underline">Character Randomizer</h2>
      </div>
      <Button className="ml-auto" asChild>
        <Link href={linkUrl}>
          {pathname === "/" ? "Recent characters" : "Back"}
        </Link>
      </Button>
    </header>
  );
};

export default Header;
