import { Card } from "@/components/ui/card";
import { readFavs } from "@/lib/actions/acj";
import getUserSession from "@/lib/getUserSession";
import Link from "next/link";
import React from "react";

interface Acj {
  id: string;
  title: string;
}

interface Fav {
  acj_id: string;
  acj: Acj[];
}

const Favoris = async () => {
  const {
    data: { user },
  } = await getUserSession();

  const idUser = user?.id;

  const { data: favs } = await readFavs(idUser || "");

  return (
    <div className="flex flex-col gap-y-4">
      {favs?.length ? (
        favs?.map((fav: Fav) => (
          <Card
            key={fav.acj_id}
            className="flex items-center justify-between p-4"
          >
            <Link href={"/acj/" + fav.acj.id}>
              <div>
                <h2 className="font-semibold text-xl text-primary">
                  {fav.acj.title}
                </h2>
              </div>
            </Link>
          </Card>
        ))
      ) : (
        <h2> Ajouter des favoris pour qu'ils apparaissent ici.</h2>
      )}
    </div>
  );
};

export default Favoris;
