const partners = [
  { name: "QPC Kamitra", url: "http://www.kamitra.ee/" },
  { name: "Volta AS", url: "http://www.volta.ee/" },
  { name: "Volta Kinnistute OÜ", url: "http://www.volta.ee/kinnistute/" },
  { name: "Volta Energeetika OÜ", url: "http://www.volta.ee/energeetika/" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-card">
      <div className="container max-w-3xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <span className="font-display text-lg font-bold tracking-wider text-foreground">
              VOLTA<span className="text-primary">LUMEN</span>
            </span>
            <p className="text-xs text-muted-foreground mt-2">Tööstuse 47, 10416 Tallinn</p>
            <p className="text-xs text-muted-foreground">+(372) 6 120 673</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary mb-3">Partners</h4>
            <div className="space-y-1">
              {partners.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
