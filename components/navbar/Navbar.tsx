"use client";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "../ModeToggle";

import LogIn from "./LogIn";

import { useUser } from "@/lib/store/user";
import Profile from "./Profile";

const Navbar = () => {
  const user = useUser((state) => state.user);
  // const { data } = await getUserSession();

  // const logoutAction = async () => {
  //   "use server";
  //   const supabase = await createClient();
  //   await supabase.auth.signOut();
  // };
  return (
    <nav className="border-b bg-background h-[12vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl">
            AC<span className="text-primary">J</span>
          </h1>
        </Link>
        <div className="flex items-center gap-x-5">
          <ModeToggle />
          {user ? (
            <Profile />
          ) : (
            <LogIn className="rounded-md shadow-md" title="Se connecter" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
