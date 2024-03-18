import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-background h-[90vh]">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et d
            </p>
          </div>

          <div className="flex justify-center max-w-sm mx-auto mt-10">
            <Button size="lg" className="w-full">
              Connexion
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
