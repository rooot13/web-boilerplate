"use client";

import { useEffect, useState } from "react";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { UserNav } from "@/app/components/UserNav";

interface User {
  email: string;
  name?: string;
}

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/user");
        const data = await res.json();
        if (data.user) {
          setUser(data.user);
        }
      } catch (error) {
        console.error("Error fetching user from Supabase:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  return (
    <nav
      className="flex justify-between p-4"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        borderColor: "var(--border)",
      }}
    >
      <Link href="/">
        <h1
          className="text-lg font-bold mt-4 ml-4"
          style={{ color: "var(--primary-100)" }}
        >
          Web-Boilerplate
        </h1>
      </Link>
      <div className="flex items-center mt-2">
        {loading ? (
          <span style={{ color: "var(--text-200)" }}>Loading...</span>
        ) : user ? (
          <UserNav user={user} />
        ) : (
          <>
            <LoginLink
              className="px-10 py-2 rounded-full transition-all active:scale-95 drop-shadow-lg"
              style={{
                backgroundColor: "var(--primary-100)",
                color: "var(--primary-foreground)",
              }}
            >
              Login
            </LoginLink>
            <RegisterLink
              className="ml-4 mr-7 px-8 py-2 rounded-full transition-all active:scale-95 drop-shadow-lg"
              style={{
                backgroundColor: "var(--accent-100)",
                color: "var(--accent-foreground)",
              }}
            >
              Register
            </RegisterLink>
          </>
        )}
      </div>
    </nav>
  );
}
