import { FileText, ExternalLink } from "lucide-react";

const mediaItems = [
  {
    title: 'Elektriala detsember 2008 – "Pooljuhtvalgustitest"',
    url: "http://voltalumen.com/meedia/Pooljuhtvalgustitest.pdf",
    type: "pdf" as const,
  },
  {
    title: "Volta valmistab valguslahenduse innovatiivse fassaadiga Tallinki büroohoonele",
    url: "http://hei.eas.ee/index.php?option=com_content&view=article&id=234:uudised&catid=55:2008-november",
    type: "link" as const,
  },
  {
    title: 'Mondo Arc issue 52 – "Tallink HQ project"',
    url: "http://voltalumen.com/meedia/Mondo_Arc_issue_52.pdf",
    type: "pdf" as const,
  },
  {
    title: 'AK 23.12.09 – "Võidusamba valguslahendusi pole vaja kaugelt otsida"',
    url: "http://uudised.err.ee/external/iframeplayer/uudised_iframe.php?playmode=startvideo&lng=0&vid=28889",
    type: "link" as const,
  },
  {
    title: 'Äripäev 08.03.10 – "Tootmine või import?"',
    url: "http://voltalumen.com/meedia/Aripaev08.03.10.pdf",
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
              {item.type === "pdf" ? (
                <FileText size={16} className="text-primary flex-shrink-0" />
              ) : (
                <ExternalLink size={16} className="text-primary flex-shrink-0" />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
