import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import React from "react";

const DeleteAlert = ({ acjId }: { acjId: string }) => {
  return (
    <Button variant="outline">
      <Trash className="w-4 h-4" />
    </Button>
  );
};

export default DeleteAlert;
