import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
      <div className="items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3, 4, 5]?.map((_, index) => {
          return (
            <div key={index}>
              <Skeleton className="w-full h-20 sm:w-full  md:h-18 xl:h-24 rounded-lg" />
              <div className="space-y-2">
                {/* <Skeleton className="h-4 w-[250px]" /> */}
                <Skeleton className="mt-2 h-4 w-[200px]" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default loading;
