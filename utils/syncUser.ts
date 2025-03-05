import { PrismaClient } from "@prisma/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const prisma = new PrismaClient();

export async function syncUser() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();

  if (!authenticated) return null;

  const user = await getUser();

  if (!user?.email) return null;

  // Check if user already exists by Kinde ID or email
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ kindeId: user.id }, { email: user.email }],
    },
  });

  if (existingUser) {
    return existingUser; // Return existing user to avoid duplicate insertion
  }

  // Create a new user if they don't exist
  const newUser = await prisma.user.create({
    data: {
      email: user.email,
      name: user.given_name || null,
      kindeId: user.id,
    },
  });

  return newUser;
}
