import { Button } from "@/components/ui/button";
import { readBlog } from "@/lib/actions/acj";
import { StarIcon } from "lucide-react";

export default async function Home() {
  const { data: blogs } = await readBlog();

  return (
    <main className="flex items-center justify-center bg-background">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
        {!blogs?.length && (
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <span className="w-auto px-6 py-3 rounded-full bg-secondary">
                <span className="text-sm font-medium text-primary">
                  Triez facilement vos infos
                </span>
              </span>

              <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
                ACJ du jouuur
              </h1>
              <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et d
              </p>
            </div>

            <div className="flex justify-center max-w-sm mx-auto mt-10">
              <Button size="lg" className="w-full">
                Connexion
              </Button>
            </div>
          </div>
        )}
        <div className="items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
          {blogs?.map((blog, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center [&>div]:w-full"
              >
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
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
