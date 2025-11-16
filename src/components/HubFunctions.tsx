import { Card } from "@/components/ui/card";
import { Building2, Coins, Package, Brain, GraduationCap } from "lucide-react";

const functions = [
  {
    icon: Building2,
    title: "Micro-Governance Center",
    system: "i-GOFP",
    description: "National ID verification, digital payments for government fees, community feedback loops, and local performance dashboards.",
    features: ["Digital Identity", "Fee Processing", "Civic Engagement", "Performance Metrics"],
    color: "ocean-deep"
  },
  {
    icon: Coins,
    title: "Micro-Finance & Digital Economy",
    system: "Genesis360",
    description: "Digital wallets, micro-insurance, savings & lending through regenerative finance, and ethical remittances.",
    features: ["Digital Wallets", "Micro-Insurance", "Regenerative Finance", "E-Commerce Access"],
    color: "sunrise"
  },
  {
    icon: Package,
    title: "Logistics & Business Accelerator",
    system: "Distribution Network",
    description: "Last-mile e-commerce, packaging stations, cold-chain hubs, and entrepreneur resource centers.",
    features: ["E-Commerce Distribution", "Cold Chain", "Urban-Rural Trade", "SME Support"],
    color: "growth"
  },
  {
    icon: Brain,
    title: "Data & Community Intelligence",
    system: "AEGIS-X",
    description: "Community metrics, sentiment analysis, early-warning systems, and climate monitoring.",
    features: ["Community Analytics", "Sentiment Detection", "Early Warning", "Climate Data"],
    color: "ocean-light"
  },
  {
    icon: GraduationCap,
    title: "Learning & Upskilling Sanctum",
    system: "Education Portal",
    description: "AI literacy workshops, job skill training, remote interview facilities, and wisdom workshops.",
    features: ["AI Literacy", "Skills Training", "Remote Work Hub", "Philosophy Workshops"],
    color: "sunrise"
  }
];

export const HubFunctions = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Five Functions, One Hub
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every Postal Sanctum Hub integrates essential services that communities need, 
            creating a single point of access to digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {functions.map((func, index) => {
            const Icon = func.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-border/50 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-${func.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-7 w-7 text-${func.color}`} />
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-1">
                      {func.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      Powered by {func.system}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {func.description}
                  </p>
                  
                  <div className="pt-3 space-y-2">
                    {func.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${func.color}`} />
                        <span className="text-sm text-card-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
