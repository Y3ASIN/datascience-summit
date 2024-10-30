import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <section className="h-screen w-full">
      <HeroSection
        backgroundImage="/backpic.jpg"
        subTitle="December 20, 2024 | Daffodil Smart City, Ashuila"
      />
    </section>
  );
}
