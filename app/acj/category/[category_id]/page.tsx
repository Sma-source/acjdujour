import { readBlogCat, readByCat, readFav } from "@/lib/actions/acj";
import Link from "next/link";

import getUserSession from "@/lib/getUserSession";
import React from "react";
import FavButton from "../../(default)/components/FavButton";
import { notFound } from "next/navigation";
import FilterItems from "../../(default)/components/FilterItems";
import TextHeader from "../../(default)/components/TextHeader";
import SearchForm from "../../(default)/components/SearchForm";

const page = async ({ params }: { params: { category_id: string } }) => {
  const {
    data: { user },
  } = await getUserSession();

  const idUser = user?.id;
  let { data: blogs } = await readByCat(params.category_id);

  if (!blogs || !blogs.length) {
    notFound(); // Redirect to Next.js not found page
  }
  const { data: cats } = await readBlogCat();
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
      <div className="relative container flex flex-col items-center justify-center mx-auto px-5 py-12 lg:px-10 max-w-full">
        <TextHeader />
        <div className="w-full relative mt-3">
          <SearchForm />
        </div>
        <div className="z-2 w-full mt-4 text-center">
          <FilterItems titre="Tout" lien="/" />
          {cats?.map((item) => (
            <FilterItems
              key={item.id}
              lien={"/acj/category/" + item.id}
              titre={item.name}
            ></FilterItems>
          ))}
        </div>
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
};

export default page;
