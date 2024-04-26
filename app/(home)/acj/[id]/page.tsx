import { IAcj } from "@/lib/types";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { data: blog } = await fetch(
    process.env.SITE_URL + "/api/acj?id=" + params.id
  ).then((res) => res.json());
  // console.log(blog);

  const when = new Date(blog?.created_at);

  if (!blog?.id) {
    return <h1 className="text-black">Not found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto min-h-screen  pt-10 space-y-10">
      <div className="sm:px-10 space-y-5">
        <h1 className=" text-3xl font-bold dark:text-gray-200">
          {blog?.title}
        </h1>
        <p className="text-sm dark:text-gray-400">
          {new Intl.DateTimeFormat("fr-FR", {
            dateStyle: "medium",
          }).format(when)}
        </p>
      </div>
      <div className="sm:px-10 space-y-5 text-gray-800">{blog?.content}</div>
    </div>
  );
};

export default page;
