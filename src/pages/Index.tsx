import { Hero } from "@/components/Hero";
import { HubFunctions } from "@/components/HubFunctions";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Innovation } from "@/components/Innovation";
import { Pilot } from "@/components/Pilot";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HubFunctions />
      <ProblemSolution />
      <Innovation />
      <Pilot />
      <Footer />
    </div>
  );
};

export default Index;
