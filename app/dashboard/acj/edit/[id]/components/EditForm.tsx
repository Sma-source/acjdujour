"use client";
import { AcjFormSchemaType } from "@/app/dashboard/schema";
import React from "react";
import AcjForm from "../../../components/AcjForm";
import { IAcj } from "@/lib/types";
import { updateBlogById } from "@/lib/actions/acj";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const EditForm = ({ acj }: { acj: IAcj }) => {
  const router = useRouter();
  const onHandleSubmit = async (data: AcjFormSchemaType) => {
    const result = JSON.parse(await updateBlogById(acj.id, data));

    if (result.error) {
      toast({
        title: "Fail to update ",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{result.error?.message}</code>
          </pre>
        ),
      });
    } else {
      toast({
        title: "Successfully update 🎉",
      });
      router.push("/dashboard");
    }
  };
  return <AcjForm onHandleSubmit={onHandleSubmit} acj={acj} />;
};

export default EditForm;
