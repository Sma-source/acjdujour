"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
      category_id: acj?.category_id.toString() || "",
    },
  });
  function onSubmit(data: z.infer<typeof AcjFormSchema>) {
    onHandleSubmit(data);
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Acj</CardTitle>
        <CardDescription>Créer ou modifier selon votre guise!</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="title">Titre</Label>
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Le titre..."
                          className="w-full"
                          autoFocus
                        />
                      </FormControl>
                      {form.getFieldState("title").invalid && //only show error message when user is typing
                        form.getValues().title && <FormMessage />}
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="title">Description</Label>
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Le contenu..."
                          className="w-full min-h-32"
                        />
                      </FormControl>
                      {form.getFieldState("content").invalid &&
                        form.getValues().content && <FormMessage />}
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="category">Catégories</Label>
                <FormField
                  control={form.control}
                  name="category_id"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selectionne une catégorie" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">Technologie</SelectItem>
                          <SelectItem value="2">Sciences</SelectItem>
                          <SelectItem value="3">Histoire</SelectItem>
                          <SelectItem value="4">
                            Langue et Expression
                          </SelectItem>
                        </SelectContent>
                      </Select>

                      {form.getFieldState("category_id").invalid &&
                        form.getValues().category_id && <FormMessage />}
                    </FormItem>
                  )}
                />
              </div>

              <div className="mb-4">
                <Button
                  type="submit"
                  role="button"
                  className="py-2 px-4 rounded-lg"
                  disabled={!form.formState.isValid}
                >
                  Envoyer
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AcjForm;
