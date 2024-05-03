import React from "react";
import { readBlog } from "@/lib/actions/acj";
import { StarIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  let { data: blogs } = await readBlog();

  if (!blogs?.length) {
    blogs = [];
  }

  const truncate = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
      <div className="items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        {blogs?.map((blog) => {
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
                      <button className="flex items-center">
                        <StarIcon className="mr-1 h-5 w-5" />
                      </button>
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
