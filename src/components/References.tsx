const references = [
  "Port Artur 2",
  "Tallink Office Building",
  "Night Club Marat",
  "Tallink SPA",
  "Tartu Town Hall",
  "Tartu Town Square",
  "Ülemiste Centre",
  "Seaplane Harbour",
];

const References = () => {
  return (
    <section id="references" className="py-24 border-b border-border">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl font-semibold text-foreground mb-12">References</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {references.map((ref) => (
            <div
              key={ref}
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-secondary-foreground text-sm">{ref}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
