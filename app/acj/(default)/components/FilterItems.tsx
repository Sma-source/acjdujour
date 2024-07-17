import Link from "next/link";
import React from "react";

const FilterItems = ({ titre, lien }: { titre: string; lien: string }) => {
  return (
    <>
      <Link
        href={lien}
        className="inline-block mx-1 text-center my-2  text-sm font-normal border border-[#e7e7e9] rounded-full "
      >
        <p className="pt-2 pb-1.5 px-3 text-sm">{titre}</p>
      </Link>
    </>
  );
};

export default FilterItems;
