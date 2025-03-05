export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  fullWidth?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    title: "Basic",
    price: "$19/month",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    fullWidth: false, // Normal width
  },
  {
    title: "Pro",
    price: "$49/month",
    features: ["All Basic Features", "Feature 4", "Feature 5"],
    fullWidth: false, // Normal width
  },
  {
    title: "Enterprise",
    price: "Contact Us",
    features: ["Custom Features", "Dedicated Support"],
    fullWidth: true, // This card will span full width
  },
];
