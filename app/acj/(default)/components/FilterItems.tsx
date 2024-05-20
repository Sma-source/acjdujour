import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";
import {
  BookOpenText,
  Brain,
  Castle,
  Church,
  Handshake,
  Palette,
  Satellite,
} from "lucide-react";

export const navItems = [
  { name: "Politique", href: "/dashboard", icon: Handshake },
  { name: "Littérature", href: "/dashboard", icon: BookOpenText },
  { name: "Histoire", href: "/dashboard/favoris", icon: Castle },
  { name: "Arts", href: "/dashboard", icon: Palette },
  { name: "Sciences", href: "/dashboard/billing", icon: Brain },
  { name: "Religion", href: "/dashboard/billing", icon: Church },
  { name: "Technologie", href: "/dashboard/billing", icon: Satellite },
];
const FilterItems = () => {
  return (
    <div className="flex items-center md:justify-center gap-x-10 mt-5 mb-5 w-full overflow-x-scroll no-scrollbar ">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href=""
          className="flex flex-col gap-y-3 items-center flex-shrink-0"
        >
          <div className="relative w-6 h-6">
            <item.icon className="mr-2 h-6 w-6 text-primary" />
          </div>
          <p className="text-xs font-medium">{item.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default FilterItems;
