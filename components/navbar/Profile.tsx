import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { CreditCard, Home, LockOpenIcon, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import createClient from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const navItems = [
  { name: "Tableau de bord", href: "/dashboard", icon: Home },
  { name: "Paramètres", href: "/dashboard/settings", icon: Settings },
  { name: "Factures", href: "/dashboard/billing", icon: CreditCard },
];

const Profile = () => {
  const logoutAction = async () => {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10 rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>Jan</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Sma</p>
            <p className="text-xs leading-none text-muted-foreground">
              smain.rabhi@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {navItems.map((item, index) => (
            <DropdownMenuItem asChild key={index}>
              <Link
                href={item.href}
                className="w-full flex justify-between items-center"
              >
                {item.name}
                <span>
                  <item.icon className="w-4 h-4" />
                </span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="w-full flex justify-between items-center"
          asChild
        >
          <form action={logoutAction}>
            <Button
              variant="ghost"
              className="w-full flex justify-between items-center"
            >
              Se déconnecter
              <LockOpenIcon className="w-4 h-4" />
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
