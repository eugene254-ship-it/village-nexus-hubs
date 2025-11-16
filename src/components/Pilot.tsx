import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Target, TrendingUp, Users } from "lucide-react";

const regions = [
  { name: "Kenya's Rift Valley", flag: "🇰🇪" },
  { name: "Ghana's Ashanti Region", flag: "🇬🇭" },
  { name: "Nigeria's Southwest Belt", flag: "🇳🇬" },
  { name: "Tanzania's Coast Region", flag: "🇹🇿" }
];

const metrics = [
  { icon: TrendingUp, label: "Revenue Growth", target: "+150%" },
  { icon: Users, label: "Service Access", target: "+300%" },
  { icon: Target, label: "SME Activity", target: "+200%" },
  { icon: MapPin, label: "Coverage", target: "5 Hubs" }
];

export const Pilot = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            The Postal Corridor of Autonomy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with 3–5 post offices and transform them into modern hubs. 
            Prove the model, then scale nationally.
          </p>
        </div>

        {/* Regions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
          {regions.map((region, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border/50 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 cursor-pointer group"
            >
              <div className="text-center space-y-3">
                <div className="text-5xl group-hover:scale-110 transition-transform">
                  {region.flag}
                </div>
                <p className="text-sm font-semibold text-card-foreground">
                  {region.name}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Pilot Success Metrics
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div 
                  key={index}
                  className="text-center space-y-3 p-6 bg-gradient-card rounded-xl border border-border/50 shadow-soft"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-sunrise mb-1">
                      {metric.target}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground">
              Ready to launch the first Postal Sanctum Hub in your region?
            </p>
            <Button 
              size="lg"
              className="bg-gradient-accent hover:opacity-90 text-foreground font-semibold px-10 py-6 text-lg shadow-medium hover:shadow-strong transition-all hover:scale-105"
            >
              Propose a Pilot Region
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
