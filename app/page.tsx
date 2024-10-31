import FeatureCard from "@/components/FeatureCard";
import HeroSection from "@/components/Hero";
import TitleBar from "@/components/Titlebar";
import { featureData } from "@/constants";

export default function Home() {
  return (
    <section className="h-auto w-full space-y-5">
      <HeroSection backgroundImage="/backpic.jpg" />

      <TitleBar title="Features" />

      <div className="flex flex-wrap justify-center gap-8 bg-background p-8">
        {featureData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            date={feature.date}
            location={feature.location}
            tags={feature.tags}
            gradientFrom={feature.gradientFrom}
            gradientTo={feature.gradientTo}
          />
        ))}
      </div>
    </section>
  );
}
