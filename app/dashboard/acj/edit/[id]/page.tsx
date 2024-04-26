import { readBlogContentById } from "@/lib/actions/acj";
import React from "react";
import EditForm from "./components/EditForm";
import { IAcj } from "@/lib/types";

const Edit = async ({ params }: { params: { id: string } }) => {
  const { data: acj } = await readBlogContentById(params.id);
  return <EditForm acj={acj as IAcj} />;
};

export default Edit;
