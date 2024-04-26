import React from "react";
import { readBlog } from "@/lib/actions/acj";
import { StarIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  let { data: blogs } = await readBlog();

  if (!blogs?.length) {
    blogs = [];
  }

  return (
    <main className="flex items-center justify-center bg-background">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
        <div className="items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
          {blogs?.map((blog, index) => {
            return (
              <div key={index}>
                <Link href={"/acj/" + blog.id}>
                  <div className="rounded-xl border bg-card text-card-foreground mt-5">
                    <div className="flex-col p-6 grid grid-cols-1 items-start gap-4 space-y-0">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg leading-none tracking-tight text-primary">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {blog.content}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 py-2 px-3 shadow-none">
                          <StarIcon className="mr-2 h-4 w-4" />
                          Favoris
                        </button>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="flex space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">Actualité</div>
                        <div className="flex items-center">20 avril 2023</div>
                        <div>test</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
