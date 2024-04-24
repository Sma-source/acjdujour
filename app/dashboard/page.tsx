import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { readBlog } from "@/lib/actions/acj";
import { Edit, Trash } from "lucide-react";

import Link from "next/link";

const Dashboard = async () => {
  const { data: blogs } = await readBlog();
  // const user = await getUserSession();
  // console.log(user.data.session?.user.id);

  return (
    <div className="grid items-start gap-y-8">
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-3xl md:text-4xl">Your Notes</h1>
          <p className="text-lg text-muted-foreground">
            Here you can see and create new notes for user id
          </p>
        </div>
        <Button>
          <Link href="/dashboard/acj/create">Create a new Note</Link>
        </Button>
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

              <Actions />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;

const Actions = () => {
  return (
    <div className=" flex gap-x-4">
      <Link href="">
        <Button variant="outline" size="icon">
          <Edit className="w-4 h-4" />
        </Button>
      </Link>
      <Button variant="outline">
        <Trash className="w-4 h-4" />
      </Button>
    </div>
  );
};
