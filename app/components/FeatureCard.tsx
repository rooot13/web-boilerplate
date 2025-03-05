import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string; // ✅ Added className prop
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) {
  return (
    <Card
      className={`w-full max-w-sm p-8 shadow-lg border rounded-lg transition ${className}`}
      style={{
        backgroundColor: "var(--bg-100)",
        borderColor: "var(--border)",
      }}
    >
      <CardHeader className="flex items-center gap-6">
        <div className="text-primary-100 text-5xl">{icon}</div>{" "}
        {/* Increased icon size */}
        <CardTitle
          className="text-2xl font-bold"
          style={{ color: "var(--text-100)" }}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-text-200">{description}</p>
      </CardContent>
    </Card>
  );
}
