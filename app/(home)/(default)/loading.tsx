import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="w-full grid md:grid lg:grid-cols-2 xl:grid-cols-3 gap-5 p-5 xl:p-0">
      {[1, 2, 3, 4, 5]?.map((_, index) => {
        return (
          <div>
            <Skeleton className="w-full h-20 sm:w-full  md:h-18 xl:h-24 rounded-lg" />
            <div className="space-y-2">
              {/* <Skeleton className="h-4 w-[250px]" /> */}
              <Skeleton className="mt-2 h-4 w-[200px]" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default loading;
