"use client";
import React from "react";
import AcjForm from "../components/AcjForm";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { AcjFormSchemaType } from "../../schema";
import { createBlog } from "@/lib/actions/acj";

const CreateNew = () => {
  const router = useRouter();
  const handleCreate = async (data: AcjFormSchemaType) => {
    const result = JSON.parse(await createBlog(data));

    const { error } = result as PostgrestSingleResponse<null>;
    if (error?.message) {
      toast({
        title: "Fail to create a post 😢",
        description: (
          <pre className="mt-2 w-[340px] rounded-md p-4">
            <code>{error.message}</code>
          </pre>
        ),
      });
    } else {
      toast({
        title: "Successfully create a post 🎉",
        description: data.title,
      });
      router.push("/dashboard");
    }
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md  p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };
  return <AcjForm onHandleSubmit={handleCreate} />;
};

export default CreateNew;
