import Link from "next/link";
import React from "react";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import LogIn from "./LogIn";
import getUserSession from "@/lib/getUserSession";
import createClient from "@/lib/supabase/server";

const Navbar = async () => {
  const { data } = await getUserSession();

  const logoutAction = async () => {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
  };
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
          {!data.session && (
            <div className="flex items-center gap-x-5">
              <LogIn />
            </div>
          )}
          {data.session && (
            <form action={logoutAction} className="flex items-center">
              <div className="gap-x-5">
                <Button>Logout</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
