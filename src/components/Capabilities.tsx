import { Card } from "@/components/ui/card";
import { Radar, Shield, Zap, Eye } from "lucide-react";

const capabilities = [
  {
    icon: Radar,
    title: "Autonomous Navigation",
    description: "AI-powered flight systems with adaptive pathfinding, obstacle avoidance, and real-time mission optimization.",
  },
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "Encrypted communications, secure data links, and hardened systems designed for contested environments.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Quick-launch platforms with minimal setup time, enabling immediate operational response capabilities.",
  },
  {
    icon: Eye,
    title: "Advanced ISR",
    description: "Multi-spectral sensors, thermal imaging, and high-resolution cameras for comprehensive intelligence gathering.",
  },
];

const Capabilities = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Capabilities</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Precision-engineered solutions for mission-critical operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 p-8 transition-all duration-300 hover-glow group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <capability.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{capability.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {capability.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
