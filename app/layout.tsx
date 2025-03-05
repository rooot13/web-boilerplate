import type { Metadata } from "next";
import "./globals.css";
import { syncUser } from "@/utils/syncUser";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await syncUser(); // Ensures the user is stored in Supabase
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const authenticated = await isAuthenticated();

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
