"use client";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { LoaderCircle, Trash } from "lucide-react";
import React, { ChangeEvent, useTransition } from "react";
import { DeleteBlog } from "@/lib/actions/acj";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const DeleteAlert = ({ acjId }: { acjId: string }) => {
  const [isPending, startTransition] = useTransition();
  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      const result = await DeleteBlog(acjId);
      const { error } = JSON.parse(result);
      if (error?.message) {
        toast({
          title: "Fail to update ",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{error?.message}</code>
            </pre>
          ),
        });
      } else {
        toast({
          title: "Successfully delete 🎉",
        });
      }
    });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <Trash className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>
            <form onSubmit={onSubmit}>
              <Button className="flex gap-1 items-center">
                <LoaderCircle
                  className={cn(" animate-spin ", {
                    hidden: !isPending,
                  })}
                />
                Continue
              </Button>
            </form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAlert;
