"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

export function Banner({ className }: { className?: string }) {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center text-center bg-primary-100 text-bg-100 py-20 px-8 shadow-lg rounded-lg ${className}`}
    >
      <h1 className="text-5xl font-bold mb-6">
        🚀 Web Boilerplate: Build Faster, Launch Sooner
      </h1>
      <p className="text-xl max-w-2xl text-bg-300">
        This <strong>free and open-source</strong> boilerplate helps developers
        build modern web apps effortlessly. Powered by{" "}
        <strong>
          Next.js, TypeScript, Supabase, Prisma, Kinde, and ShadCN
        </strong>
        , it offers a <strong>solid foundation</strong> to get started.
      </p>
      <p className="text-lg max-w-2xl text-bg-300 mt-4">
        No setup hassle—just <strong>clone & start coding!</strong>
      </p>
      <LoginLink className="mt-8 bg-primary text-white hover:bg-accent-100 hover:text-amber-50 font-semibold px-8 py-4 rounded-lg text-xl transition">
        Get Started for Free
      </LoginLink>
    </div>
  );
}
