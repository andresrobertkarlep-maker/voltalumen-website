const partners = [
  "QPC Kamitra",
  "Volta AS",
  "Volta Kinnistute OÜ",
  "Volta Energeetika OÜ",
];

const Footer = () => {
  return (
    <footer className="py-12 bg-card">
      <div className="container max-w-3xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <a href="https://voltalumen.ee" target="_blank" rel="noopener noreferrer" className="font-display text-lg font-bold tracking-wider text-foreground hover:text-primary transition-colors">
              VOLTA<span className="text-primary">LUMEN</span>
            </a>
            <p className="text-xs text-muted-foreground mt-2">Tööstuse 47, 10416 Tallinn</p>
            <p className="text-xs text-muted-foreground">+(372) 6 120 673</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-accent mb-3">Partnerid</h4>
            <div className="space-y-1">
              {partners.map((name) => (
                <p key={name} className="text-xs text-muted-foreground">
                  {name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
