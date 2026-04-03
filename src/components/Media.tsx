import { FileText } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   MEEDIAKAJASTUS — Lisa või eemalda meedialinke allpool.
   Iga kirje koosneb: title, url, type ("pdf" | "link").
   ═══════════════════════════════════════════════════════════════ */

const mediaItems = [
  {
    title: 'Mondo Arc issue 52 – "Tallink HQ project"',
    url: "http://voltalumen.com/meedia/Mondo_Arc_issue_52.pdf",
    type: "pdf" as const,
  },
];

const Media = () => {
  return (
    <section id="meedia" className="py-24 border-b border-border">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl font-semibold text-foreground mb-8">Meediakajastus</h2>
        <div className="space-y-3">
          {mediaItems.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/60 transition-colors group"
            >
              <span className="text-secondary-foreground text-sm group-hover:text-foreground transition-colors">
                {item.title}
              </span>
              <FileText size={16} className="text-primary flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
