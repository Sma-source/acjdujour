"use client";
import { AcjFormSchemaType } from "@/app/dashboard/schema";
import React from "react";
import AcjForm from "../../../components/AcjForm";
import { IAcj } from "@/lib/types";

const EditForm = ({ acj }: { acj: IAcj }) => {
  return <AcjForm onHandleSubmit={() => {}} acj={acj} />;
};

export default EditForm;
