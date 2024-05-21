import React from "react";
import { readBlog, readFav } from "@/lib/actions/acj";
import Link from "next/link";
import FavButton from "./components/FavButton";
import getUserSession from "@/lib/getUserSession";
import FilterItems from "./components/FilterItems";

export default async function Home() {
  const {
    data: { user },
  } = await getUserSession();

  const idUser = user?.id;
  let { data: blogs } = await readBlog();

  if (!blogs?.length) {
    blogs = [];
  }
  let { data: favs } = await readFav(idUser || "");

  let combinedData = [];

  if (blogs && blogs.length > 0 && favs && favs.length > 0) {
    // Map over blogs and add fav data if it exists
    combinedData = blogs.map((blog) => {
      const fav = favs.find((fav) => fav.acj_id === blog.id);
      return {
        ...blog,
        favorite: fav ? true : false, // Add a favorite property based on whether a fav exists
      };
    });
  } else {
    // Handle the case when either blogs or favs is empty or undefined
    combinedData = blogs || favs || [];
  }
  // console.log(combinedData);
  const truncate = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
      <div className="container mx-auto px-5 lg:px-10">
        <FilterItems />
      </div>
      <div className="items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        {combinedData?.map((blog) => {
          const when = new Date(blog?.created_at);

          return (
            <div key={blog.id}>
              <div className="rounded-xl border bg-card text-card-foreground mt-5">
                <div className="flex-col p-6 grid  grid-cols-1 items-start gap-4 space-y-0">
                  <Link href={"/acj/" + blog.id}>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg leading-none tracking-tight text-primary">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {truncate(blog.content, 50)}
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="p-6 pt-0">
                  <div className="flex space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">Actualité</div>
                    <div className="flex items-center">
                      {" "}
                      {new Intl.DateTimeFormat("fr-FR", {
                        dateStyle: "medium",
                      }).format(when)}
                    </div>
                    <div>
                      <FavButton
                        acjId={blog.id}
                        userId={blog.user_id}
                        isFavorited={blog.favorite}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
