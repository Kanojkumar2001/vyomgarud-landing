const About = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Mission <span className="text-gradient">Overview</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
          VyomGarud delivers next-generation unmanned aerial vehicle systems engineered for the most demanding operational environments. 
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Our platforms combine advanced autonomy, robust reliability, and cutting-edge sensor integration to provide actionable intelligence and precision execution for defense, surveillance, and critical infrastructure applications.
        </p>
      </div>
    </section>
  );
};

export default About;
