import Navbar from "@/app/components/Navbar";
import { Banner } from "@/app/components/Banner";
import { PricingCard } from "@/app/components/PricingCard";
import { FeatureCard } from "@/app/components/FeatureCard";
import { pricingPlans } from "@/app/components/data/pricingData";
import { features } from "@/app/components/data/featureData";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg-200">
      <Navbar />
      <Banner className="mt-16" /> {/* ✅ Margin applied via className */}
      <main className="flex flex-col items-center">
        <h2 className="text-5xl font-bold text-text-100 mt-20 mb-10">
          Key Features
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={<feature.icon />}
              className="mt-8" // ✅ Margin applied via className
            />
          ))}
        </div>

        <h2 className="text-5xl font-bold text-text-100 mt-28 mb-12">
          Our Pricing Plans
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              fullWidth={plan.fullWidth}
              className="mt-1" // ✅ Margin applied via className
            />
          ))}
        </div>
      </main>
    </div>
  );
}
