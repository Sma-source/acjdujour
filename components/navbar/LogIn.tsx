"use client";
import React from "react";
import { Button } from "../ui/button";
import { createClient } from "@/lib/supabase/client";
import { usePathname } from "next/navigation";

const LogIn = () => {
  const pathname = usePathname();
  const supabase = createClient();

  const loginWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };
  return <Button onClick={loginWithGoogle}>Se connecter</Button>;
};

export default LogIn;
