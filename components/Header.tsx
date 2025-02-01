"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky z-10 top-0 p-4 flex items-center border-b border-slate-100/20 h-[12dvh] shadow-sm bg-white/10 backdrop-blur-sm">
      <Link href="/">
        <div className="flex flex-col items-center">
          <img src="/images/iv-logo.png" width="150" alt="identity v logo" />
          <h2 className="text-white font-bold drop-shadow-sm">
            Character Randomizer
          </h2>
        </div>
      </Link>
      <div className="ml-auto gap-2 flex">
        {pathname === "/" && (
          <Button asChild>
            <Link href="/favorites">Favorites</Link>
          </Button>
        )}
        {pathname === "/" && (
          <Button asChild>
            <Link href="/recent">Recent characters</Link>
          </Button>
        )}
        {pathname !== "/" && (
          <Button asChild>
            <Link href="/">Go Back</Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
