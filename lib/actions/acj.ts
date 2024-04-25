"use server";

import { AcjFormSchemaType } from "@/app/dashboard/schema";
import { revalidatePath } from "next/cache";
import createClient from "../supabase/server";

const DASHBOARD = "/dashboard/acj";

export const createBlog = async (data: AcjFormSchemaType) => {
  const supabase = await createClient();
  try {
    // Retrieve the current user's ID
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Insert the blog entry into the database
    const result = await supabase
      .from("acj")
      .insert({
        ...data,
        user_id: user?.id, // Assign the user's ID to the 'user_id' field
      })
      .single();

    // console.log(JSON.stringify(result));

    // Check for errors during insertion
    if (result.error) {
      throw new Error(JSON.stringify(result));
    }

    // If successful, revalidate the dashboard path
    revalidatePath(DASHBOARD);
    return JSON.stringify(result);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error creating blog:", error.message);
    } else {
      console.error("Unknown error occurred:", error);
    }
    return JSON.stringify({
      error: "An error occurred while creating the blog entry.",
    });
  }
};

export const readBlog = async () => {
  const supabase = await createClient();
  return supabase
    .from("acj")
    .select("*")
    .order("created_at", { ascending: false });
};

export const DeleteBlog = async (acjId: string) => {
  const supabase = await createClient();
  const result = await supabase.from("acj").delete().eq("id", acjId);
  revalidatePath(DASHBOARD);
  revalidatePath(`/acj/${acjId}`);
  return JSON.stringify(result);
};
