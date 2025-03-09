import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Execute from "@/components/execute/Execute";
import Pricing from "@/components/pricing/Pricing";

export default function Home() {
  return (
    <div className="bg-[var(--background)]">
      <Navbar />
      <Hero />
      <Features />
      <Execute />
      <Pricing />
    </div>
  );
}
