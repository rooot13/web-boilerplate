import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const prisma = new PrismaClient();

export async function GET() {
  const { getUser, isAuthenticated } = getKindeServerSession();

  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return NextResponse.json(
      { user: null, error: "User not authenticated" },
      { status: 401 }
    );
  }

  const kindeUser = await getUser();
  if (!kindeUser?.id || !kindeUser?.email) {
    return NextResponse.json(
      { user: null, error: "Invalid user data from Kinde" },
      { status: 400 }
    );
  }

  // Fetch user from Supabase via Prisma using either kindeId or email
  const user = await prisma.user.findFirst({
    where: {
      OR: [{ kindeId: kindeUser.id }, { email: kindeUser.email }],
    },
  });

  if (!user) {
    return NextResponse.json(
      { user: null, error: "User not found in Supabase" },
      { status: 404 }
    );
  }

  return NextResponse.json({ user });
}
