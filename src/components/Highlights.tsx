import { Check } from "lucide-react";

const highlights = [
  "99.9% operational reliability in field deployments",
  "24/7 autonomous operation with minimal human intervention",
  "Full compliance with defense-grade security standards",
];

const Highlights = () => {
  return (
    <section className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">VyomGarud</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <p className="text-lg text-foreground font-medium leading-relaxed">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
