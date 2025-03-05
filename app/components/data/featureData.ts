import { ReactNode } from "react";
import { ShieldCheck, Rocket, Code, LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    title: "Secure & Reliable",
    description:
      "Built with security best practices to ensure data protection and reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Blazing Fast",
    description:
      "Optimized for performance and speed using Next.js & Tailwind CSS.",
    icon: Rocket,
  },
  {
    title: "Developer Friendly",
    description:
      "Built with TypeScript, Supabase, and ShadCN for a seamless dev experience.",
    icon: Code,
  },
];
