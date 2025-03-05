"use client";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserNavProps {
  user: {
    email: string;
    name?: string;
  };
}

export function UserNav({ user }: UserNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar
          className="cursor-pointer mr-8 w-12 h-12 shadow-md"
          style={{ borderColor: "var(--primary-100)" }}
        >
          <AvatarImage src="https://api.dicebear.com/9.x/notionists-neutral/svg" />
          <AvatarFallback
            style={{
              color: "var(--primary-100)",
              backgroundColor: "var(--muted)",
            }}
          >
            {user.email.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="shadow-lg rounded-lg"
        style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
      >
        <div className="px-4 py-2 text-start">
          <p className="font-semibold" style={{ color: "var(--text-100)" }}>
            {user.name || "No Name"}
          </p>
          <p className="text-sm py-2" style={{ color: "var(--text-200)" }}>
            {user.email}
          </p>
        </div>
        <DropdownMenuItem>
          <LogoutLink className="w-full  ml-4 text-md text-red-500">
            Logout
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
