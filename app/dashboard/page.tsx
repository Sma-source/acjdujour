import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { readBlog } from "@/lib/actions/acj";
import {
  CirclePlus,
  Edit,
  Plus,
  SquarePen,
  SquarePlus,
  Trash,
} from "lucide-react";

import Link from "next/link";
import DeleteAlert from "./acj/components/DeleteAlert";

const Dashboard = async () => {
  const { data: blogs } = await readBlog();
  // const user = await getUserSession();
  // console.log(user.data.session?.user.id);

  return (
    <div className="grid items-start gap-y-8">
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-3xl md:text-4xl">Vos Acj</h1>
          <p className="text-lg text-muted-foreground">
            Ici vous pouvoir voir, modifier et créer des acj
          </p>
        </div>
        <Link href="/dashboard/acj/create">
          <Button className="flex items-center gap-1">
            Ajouter
            <Plus />
          </Button>
        </Link>
      </div>

      <div className="flex flex-col gap-y-4">
        {blogs?.map((blog, index) => {
          const when = new Date(blog.created_at);
          return (
            <Card key={index} className="flex items-center justify-between p-4">
              <div>
                <h2 className="font-semibold text-xl text-primary">
                  {blog.title}
                </h2>
                <p>
                  {" "}
                  {new Intl.DateTimeFormat("fr-FR", {
                    dateStyle: "medium",
                  }).format(when)}
                </p>
              </div>

              <Actions id={blog.id} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;

const Actions = ({ id }: { id: string }) => {
  return (
    <div className=" flex gap-x-4">
      <Link href={`/dashboard/acj/edit/${id}`}>
        <Button variant="outline" size="icon">
          <Edit className="w-4 h-4" />
        </Button>
      </Link>
      <DeleteAlert acjId={id} />
    </div>
  );
};
