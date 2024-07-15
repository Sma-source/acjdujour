import { Database } from "@/lib/types/supabase";
import { createClient } from "@supabase/supabase-js";

export const GET = async (request: Request) => {
  const supabase = await createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");
  const category_id = searchParams.get("category_id");

  if (id === "*") {
    const { data, error } = await supabase.from("acj").select("id");
    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }
    return new Response(JSON.stringify({ data }), { status: 200 });
  } else if (category_id) {
    const { data, error } = await supabase
      .from("acj")
      .select("*")
      .eq("category_id", category_id);

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
  } else if (id) {
    const { data, error } = await supabase
      .from("acj")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }
    return new Response(JSON.stringify({ data }), { status: 200 });
  }

  return new Response(JSON.stringify({}), { status: 400 });
};
