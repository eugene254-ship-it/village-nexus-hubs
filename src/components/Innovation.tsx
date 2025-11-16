import { Card } from "@/components/ui/card";
import { Network, Zap, Shield, TrendingUp } from "lucide-react";

const innovations = [
  {
    icon: Network,
    title: "Autonomous Workflows",
    description: "Semi-autonomous operations with minimal human overhead, powered by intelligent systems."
  },
  {
    icon: Zap,
    title: "AI-Assisted Service",
    description: "Smart customer service and digital twins for real-time monitoring and optimization."
  },
  {
    icon: Shield,
    title: "Energy Independence",
    description: "Sustainable microgrids ensuring 24/7 operation even in remote locations."
  },
  {
    icon: TrendingUp,
    title: "Self-Sustaining Model",
    description: "Revenue-generating services that make each hub financially independent."
  }
];

export const Innovation = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-6 py-2 bg-sunrise/10 rounded-full border border-sunrise/20">
            <span className="text-sunrise font-semibold tracking-wide text-sm uppercase">
              Core Innovation
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Autonomous Postal Offices
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each hub operates as a self-sustaining node in a continental network — 
            a kind of "distributed Atlas Sanctum."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {innovations.map((innovation, index) => {
            const Icon = innovation.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border/50 shadow-medium hover:shadow-strong transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-card-foreground">
                      {innovation.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {innovation.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Ecosystem Visual */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 bg-gradient-to-br from-ocean-deep/5 via-growth/5 to-sunrise/5 rounded-2xl border border-border/50">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-foreground">The Ecosystem</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "AEGIS-X", desc: "Ethical Intelligence" },
                  { name: "Genesis360", desc: "Superapp Services" },
                  { name: "i-GOFP", desc: "Digital Governance" },
                  { name: "Atlas Sanctum", desc: "Philosophy & Design" }
                ].map((system, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="h-16 bg-gradient-hero rounded-lg flex items-center justify-center shadow-medium">
                      <span className="text-primary-foreground font-bold text-sm">
                        {system.name}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{system.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground italic pt-4">
                The first public-private-moral partnership in Africa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
