import { AlertCircle, CheckCircle2 } from "lucide-react";

const problems = [
  "Weak last-mile service delivery",
  "Fragmented digital access",
  "Slow e-commerce logistics",
  "Limited financial inclusion",
  "Poor governance visibility",
  "Rural youth unemployment"
];

const solutions = [
  "90% physical coverage across Africa",
  "No private company can match this reach",
  "Government infrastructure meets tech innovation",
  "Public-private-moral partnership model",
  "Distributed autonomous nodes",
  "Self-sustaining local economies"
];

export const ProblemSolution = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Renaissance Moment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Africa's postal networks sit at the intersection of massive need and unprecedented opportunity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problems */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full border border-destructive/20">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <span className="text-sm font-semibold text-destructive uppercase tracking-wide">
                The Gaps
              </span>
            </div>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border/50 shadow-soft hover:shadow-medium transition-shadow"
                >
                  <div className="mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-destructive/70" />
                  </div>
                  <p className="text-card-foreground leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-growth/10 rounded-full border border-growth/20">
              <CheckCircle2 className="h-5 w-5 text-growth" />
              <span className="text-sm font-semibold text-growth uppercase tracking-wide">
                The Solution
              </span>
            </div>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border/50 shadow-soft hover:shadow-medium transition-shadow"
                >
                  <div className="mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-growth" />
                  </div>
                  <p className="text-card-foreground leading-relaxed font-medium">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="p-8 bg-gradient-hero rounded-2xl shadow-glow border border-ocean-light/20">
            <p className="text-xl md:text-2xl text-primary-foreground leading-relaxed text-center font-light">
              "The postal office becomes Africa's new front door to digital governance, 
              regenerative finance, and ethical innovation — a <span className="font-bold">sanctum of service</span> where 
              the future meets the village."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
