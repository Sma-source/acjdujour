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

export const readBlogContentById = async (acjId: string) => {
  const supabase = await createClient();
  return supabase.from("acj").select("*").eq("id", acjId).single();
};

export const updateBlogById = async (
  acjId: string,
  data: AcjFormSchemaType
) => {
  const supabase = await createClient();
  const result = await supabase.from("acj").update(data).eq("id", acjId);
  revalidatePath(DASHBOARD);
  revalidatePath(`/acj/${acjId}`);
  return JSON.stringify(result);
};

export const readBlogByUser = async (userId: string) => {
  const supabase = await createClient();
  return supabase
    .from("acj")
    .select("*")
    .eq("user_id", userId) // Filter based on user ID
    .order("created_at", { ascending: false });
};

export const readFav = async (userId: string) => {
  const supabase = await createClient();
  return supabase.from("favorites").select("*").eq("user_id", userId);
};

export const readFavs = async (userId: string) => {
  const supabase = await createClient();
  return supabase
    .from("favorites")
    .select(
      `
    acj_id,
    acj (
      id,
      title
    )
  `
    )
    .eq("user_id", userId);
};

export const addFavorite = async (formData: FormData) => {
  const acjId = formData.get("acjId") as string;
  const userId = formData.get("userId") as string;
  const supabase = await createClient();

  const { error } = await supabase
    .from("favorites")
    .insert({ user_id: userId, acj_id: acjId });
  if (error) {
    return { success: false, error };
  }

  revalidatePath("/acj");
  return { success: true };
};

export const deleteFavorite = async (formData: FormData) => {
  const acjId = formData.get("acjId") as string;
  const userId = formData.get("userId") as string;
  const supabase = await createClient();

  const { error } = await supabase
    .from("favorites")
    .delete()
    .match({ user_id: userId, acj_id: acjId });
  if (error) {
    return { success: false, error };
  }
  revalidatePath("/acj");
  return { success: true };
};

export const readBlogCat = async () => {
  const supabase = await createClient();
  return supabase.from("categories").select("*");
};

export const readByCat = async (category_id: string) => {
  const supabase = await createClient();
  return supabase.from("acj").select("*").eq("category_id", category_id);
};
