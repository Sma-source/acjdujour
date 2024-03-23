"use client";
import { useUser } from "@/lib/store/user";
import { createClient } from "@/lib/supabase/client";
import React, { useEffect } from "react";

export default function SessionProvider() {
  const setUser = useUser((state) => state.setUser);
  const supabase = createClient();
  const readUserSession = async () => {
    const { data } = await supabase.auth.getUser();
    setUser(data?.user);
  };

  useEffect(() => {
    readUserSession();
    // eslint-disable-next-line
  }, []);
  return <></>;
}
