"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { AcjFormSchema, AcjFormSchemaType } from "../../schema";
import { IAcj } from "@/lib/types";

const AcjForm = ({
  onHandleSubmit,
  acj,
}: {
  onHandleSubmit: (data: AcjFormSchemaType) => void;
  acj?: IAcj;
}) => {
  const form = useForm<z.infer<typeof AcjFormSchema>>({
    mode: "all",
    resolver: zodResolver(AcjFormSchema),
    defaultValues: {
      title: acj?.title || "",
      content: acj?.content || "",
    },
  });
  function onSubmit(data: z.infer<typeof AcjFormSchema>) {
    onHandleSubmit(data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Blog Post Title"
                    className="border p-2 w-full"
                    autoFocus
                  />
                </FormControl>
                {form.getFieldState("title").invalid && //only show error message when user is typing
                  form.getValues().title && <FormMessage />}
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Blog Content"
                    className="border p-2 w-full"
                  />
                </FormControl>
                {form.getFieldState("content").invalid &&
                  form.getValues().content && <FormMessage />}
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4">
          <Button
            type="submit"
            role="button"
            className="bg-blue-500 text-white py-2 px-4 rounded"
            disabled={!form.formState.isValid}
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AcjForm;
