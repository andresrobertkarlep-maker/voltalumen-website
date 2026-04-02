import { Mail, Phone, MapPin } from "lucide-react";

const team = [
  { name: "Madis Reivik", role: "Arendusjuht", email: "madis@voltalumen.com" },
  { name: "Martin Raska", role: "Arendusinsener", email: "martin@voltalumen.com" },
  { name: "Marek Pallav", role: "Süsteemiinsener", email: "marek@voltalumen.com" },
  { name: "Ivo Hinrikus", role: "Komponendiinsener", email: "ivo@voltalumen.com" },
];

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 border-b border-border">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl font-semibold text-foreground mb-12">Kontakt</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="font-display text-lg font-semibold text-foreground">Volta Lumen OÜ</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground text-sm">Tööstuse 47, 10416 Tallinn</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <span className="text-secondary-foreground text-sm">+(372) 6 120 673</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a href="mailto:info@voltalumen.com" className="text-secondary-foreground text-sm hover:text-primary transition-colors">
                  info@voltalumen.com
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <h4 className="text-xs uppercase tracking-widest text-accent mb-3">Raamatupidamine</h4>
              <a href="mailto:raamatupidamine@voltalumen.com" className="text-sm text-secondary-foreground hover:text-primary transition-colors">
                raamatupidamine@voltalumen.com
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">Meeskond</h3>
            {team.map((member) => (
              <div key={member.name} className="p-4 bg-card border border-border rounded-lg">
                <p className="text-sm font-medium text-foreground">{member.name}</p>
                <p className="text-xs text-muted-foreground mb-1">{member.role}</p>
                <a href={`mailto:${member.email}`} className="text-xs text-accent hover:underline">
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
