import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="grid items-start gap-y-8">
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-3xl md:text-4xl">Your Notes</h1>
          <p className="text-lg text-muted-foreground">
            Here you can see and create new notes
          </p>
        </div>
        <Button>
          <Link href="/dashboard/acj/create">Create a new Note</Link>
        </Button>
      </div>
      <div className="flex flex-col gap-y-4">
        <Card className="flex items-center justify-between p-4">
          <div>
            <h2 className="font-semibold text-xl text-primary">Nouvelle acj</h2>
            <p>12 février 2018</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
