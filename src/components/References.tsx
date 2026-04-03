import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const references = [
  {
    name: "Port Artur 2",
    description: "Port Artur 2 on Pärnu linnas asuv kaubanduskeskus, kuhu valmistasime nii sise- kui välisvalgustuse.",
  },
  {
    name: "Tallinki büroohoone",
    description: "Tallinki büroohoone on näide täielikust rätsepalahendusest. Arhitekt Meelis Pressi projekteeritud \"sõrestikfassaad\".",
  },
  {
    name: "Ööklubi Marat",
    description: "Baariletivalgustid ning puhkeruumivalgustid vastavalt sisekujundaja Pille Tael-i soovidele.",
  },
  {
    name: "Tallink SPA",
    description: "Valgustatud uksepaneelid, põrandasisesed \"ketasvalgustid\" ning seinasisesed dekoratiivvalgustid.",
  },
  {
    name: "Lennusadam",
    description: "RGBW üldvalgustus unikaalse laineefektiga – valgus paistab läbi veeanumate.",
  },
  {
    name: "Tartu raekoda",
    description: "RGBW fassaadivalgustus Lumiled K2 elementide baasil.",
  },
  {
    name: "Ülemiste Keskus",
    description: "1500 Stellar LED valgustit, mis asendasid halogeenlampe. Võimsustarve vähenes 15kW võrra.",
  },
];

const References = () => {
  const [selectedRef, setSelectedRef] = useState<typeof references[0] | null>(null);

  return (
    <section id="tehtud-tood" className="py-24 border-b border-border">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl font-semibold text-foreground mb-12">Tehtud tööd</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {references.map((ref) => (
            <button
              key={ref.name}
              onClick={() => setSelectedRef(ref)}
              className="p-4 bg-card border border-border rounded-lg text-left hover:border-primary/60 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-foreground text-sm font-medium">{ref.name}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{ref.description}</p>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedRef} onOpenChange={(open) => !open && setSelectedRef(null)}>
        <DialogContent className="max-w-lg">
          <DialogTitle className="font-display text-xl">{selectedRef?.name}</DialogTitle>
          <DialogDescription className="text-secondary-foreground leading-relaxed">
            {selectedRef?.description}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default References;
