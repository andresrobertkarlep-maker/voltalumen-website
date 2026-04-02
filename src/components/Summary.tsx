const Summary = () => {
  return (
    <section id="summary" className="py-24 border-b border-border">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl font-semibold text-foreground mb-8">Summary</h2>
        <div className="space-y-5 text-secondary-foreground leading-relaxed">
          <p>
            Volta Lumen is a developing Estonian company, which developes and produces LED lighting solutions. Our products have high reliability, efficacy and competitively priced.
          </p>
          <p>
            We provide solutions for facades, retail areas, interiours and custom applications.
          </p>
          <p>
            All fixtures are produced in Estonia, using quality components from certified suppliers and state-of-art technology.
          </p>
        </div>

        <div className="mt-12 p-6 bg-card border border-border rounded-lg">
          <h3 className="font-display text-sm uppercase tracking-widest text-primary mb-2">News</h3>
          <p className="text-secondary-foreground">
            Volta Lumen will supply facade lighting solution for Ylemiste shopping centre. Solution is based on Cree leds and Pharos control system.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            <strong className="text-foreground">Madis Reivik</strong> — Development manager
          </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
