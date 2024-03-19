import Link from "next/link";
import React from "react";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import LogIn from "./LogIn";

const Navbar = () => {
  return (
    <nav className="border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl">
            Acj<span className="text-primary">Jouuur</span>
          </h1>
        </Link>
        <div className="flex items-center gap-x-5">
          <ModeToggle />
          <div className="flex items-center gap-x-5">
            <LogIn />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
