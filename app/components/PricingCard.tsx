import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PricingCard({
  title,
  price,
  features,
  fullWidth = false,
  className,
}: {
  title: string;
  price: string;
  features: string[];
  fullWidth?: boolean;
  className?: string;
}) {
  return (
    <Card
      className={`p-8 shadow-lg border rounded-lg transition ${
        fullWidth ? "w-full max-w-4xl" : "w-[440px]" // Fixed width instead of responsive
      } ${className || ""}`}
      style={{
        backgroundColor: "var(--bg-100)",
        borderColor: "var(--border)",
      }}
    >
      <CardHeader>
        <CardTitle
          className="text-2xl font-bold"
          style={{ color: "var(--primary-100)" }}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold" style={{ color: "var(--text-100)" }}>
          {price}
        </p>
        <ul className="mt-6 space-y-3 text-lg text-text-200">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              ✅ {feature}
            </li>
          ))}
        </ul>
        <Button
          className="mt-6 w-full transition"
          style={{
            backgroundColor: "var(--primary-100)",
            color: "var(--primary-foreground)",
            borderColor: "var(--border)",
          }}
        >
          {title === "Enterprise" ? "Contact Us" : "Get Started"}
        </Button>
      </CardContent>
    </Card>
  );
}
