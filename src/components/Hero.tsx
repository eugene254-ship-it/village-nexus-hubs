import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-postal-hub.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Postal Sanctum Hub" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-deep/95 via-ocean-deep/85 to-growth/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block px-6 py-2 bg-sunrise/20 backdrop-blur-sm rounded-full border border-sunrise/30 mb-4">
            <span className="text-sunrise font-semibold tracking-wide text-sm uppercase">
              The Future of Civic Infrastructure
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Postal Sanctum Hubs
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light leading-relaxed max-w-3xl mx-auto">
            Transforming Africa's postal network into autonomous centers of governance, 
            finance, logistics, intelligence, and learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-sunrise hover:bg-sunrise-glow text-foreground font-semibold px-8 py-6 text-lg shadow-glow hover:shadow-strong transition-all hover:scale-105"
            >
              Explore the Vision
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm px-8 py-6 text-lg"
            >
              Launch Pilot Program
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-sunrise mb-2">90%</div>
              <div className="text-primary-foreground/80 text-sm">Physical Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sunrise mb-2">5</div>
              <div className="text-primary-foreground/80 text-sm">Core Functions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sunrise mb-2">1</div>
              <div className="text-primary-foreground/80 text-sm">Continental Network</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
