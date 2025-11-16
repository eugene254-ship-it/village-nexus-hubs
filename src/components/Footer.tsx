import { Building2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-foreground/5 border-t border-border/50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Postal Sanctum</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transforming Africa's postal infrastructure into autonomous centers 
              of innovation, service, and community.
            </p>
          </div>

          {/* Systems */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Our Ecosystem</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">AEGIS-X Platform</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Genesis360 Superapp</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">i-GOFP Governance</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Atlas Sanctum</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Get Involved</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">Partner with Us</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Launch a Pilot</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Policy Resources</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Contact Team</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Postal Sanctum Hubs. A new civilizational model for the autonomous age.
          </p>
        </div>
      </div>
    </footer>
  );
};
