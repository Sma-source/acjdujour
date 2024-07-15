import * as z from "zod";

export const AcjFormSchema = z.object({
  title: z.string().min(8, {
    message: "title is too short",
  }),
  content: z.string().min(20, {
    message: "Content is too short",
  }),
  category_id: z.string({
    required_error: "Please select a categorie to display.",
  }),
});

export type AcjFormSchemaType = z.infer<typeof AcjFormSchema>;
