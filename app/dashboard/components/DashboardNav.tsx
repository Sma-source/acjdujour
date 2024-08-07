"use client";
import React from "react";
import { CreditCard, Home, Heart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
export const navItems = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Favoris", href: "/dashboard/favoris", icon: Heart },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
];
const DashboardNav = () => {
  const pathname = usePathname();
  return (
    <nav className="grid items-start gap-2">
      {navItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <span
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === item.href ? "bg-accent" : "bg-transparent"
            )}
          >
            <item.icon className="mr-2 h-4 w-4 text-primary" />
            <span>{item.name}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default DashboardNav;
