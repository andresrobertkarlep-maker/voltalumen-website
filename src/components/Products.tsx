import { useState } from "react";

const categories = [
  { name: "Sisevalgustus", products: ["LR1000", "Comp50"] },
  { name: "Välisvalgustus", products: ["MSpot", "Seagull"] },
  { name: "Dekoratiivvalgustus", products: ["Stellar", "Reclen"] },
  { name: "Toiteallikad ja kontrollerid", products: ["HE4x4FD", "HE5x3FD"] },
];

const productDetails: Record<string, { description: string; specs: string[] }> = {
  Comp50: {
    description: "160mm läbimõõduga valgusti kaubanduspindadele, ladudele ja tootmispindadele. Paigaldatakse ripplakke 150mm avasse või tähtpaigaldusena (3 või 5 ühiku kaupa).",
    specs: ["Võimsus: 50W, ~230VAC", "5000 luumenit", "Erinevad karakteristikud saadaval", "Integreeritud toiteplokk", "Mass: 1,2kg"],
  },
  LR1000: {
    description: "Sisevalgustuse tooteperekond, eriti sobilik luminofoorlampide asendamiseks. Saadaval erinevad valgusjaotused.",
    specs: ["Võimsus: 50W, ~230VAC", "5000 luumenit", "Erinevad karakteristikud saadaval", "Integreeritud toiteplokk", "Mass: 2,2kg"],
  },
  MSpot: {
    description: "Võimas ja vastupidav valgusti fassaadide, alade ja objektide valgustamiseks. Kaks LED-gruppi võimaldavad kombineeritud väljundit — lainurk üldvalgustuseks ja kitsas nurk sissepääsude valgustamiseks.",
    specs: ["Võimsus: 40W, 800mA", "2400 luumenit", "Erinevad karakteristikud", "IP67", "Mass: 1,8kg"],
  },
  Seagull: {
    description: "Valgusti parkidele, jalgradadele ja parkimisplatsidele. Täielikult kohandatav — valige korpuse värv, valgustemperatuur või lambi kuju. Täiesti hooldusvaba.",
    specs: ["Võimsus: 40W, 800mA", "2200 luumenit", "IP67", "Töötemp: -40..+35°C", "Eluiga: 10..20 aastat"],
  },
  Stellar: {
    description: "Miniatuurne lainurga valgusti dekoratiiv-, mööbli-, üld-, vannitoa-, hädaolukorra- ja koridorivalgustuseks. Suur valik korpuse ja valguse värve.",
    specs: ["Võimsus: 1-3W", "Vool: 350–750mA", "100–180 luumenit", "Valgusnurk: ±45°", "Vedrukinnitusega paigaldus"],
  },
  Reclen: {
    description: "Miniatuurne kitsa kiirega valgusti treppide, põrandate ja väikeste objektide dekoratiivseks valgustamiseks. Paigaldus vedru, kahepoolse kleeplindi või liimiga.",
    specs: ["Võimsus: 1W, 350mA", "100 luumenit", "Valgusnurk: ±7°", "8 tk toiteploki kohta", "Juhtme pikkus: 200mm"],
  },
  HE4x4FD: {
    description: "Toiteallikas ja kontroller LED-valgustussüsteemidele.",
    specs: ["4-kanaline väljund", "Täielik hämardusvõimekus"],
  },
  HE5x3FD: {
    description: "Toiteallikas ja kontroller LED-valgustussüsteemidele.",
    specs: ["5-kanaline väljund", "Täielik hämardusvõimekus"],
  },
};

const Products = () => {
  const [activeProduct, setActiveProduct] = useState<string>("Comp50");

  const detail = productDetails[activeProduct];

  return (
    <section id="tooted" className="py-24 border-b border-border">
      <div className="container">
        <h2 className="font-display text-3xl font-semibold text-foreground mb-12">Tooted</h2>

        <div className="grid md:grid-cols-[240px_1fr] gap-12">
          <div className="space-y-8">
            {categories.map((cat) => (
              <div key={cat.name}>
                <h3 className="text-xs uppercase tracking-widest text-accent mb-3">{cat.name}</h3>
                <div className="space-y-1">
                  {cat.products.map((p) => (
                    <button
                      key={p}
                      onClick={() => setActiveProduct(p)}
                      className={`block w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                        activeProduct === p
                          ? "bg-primary text-primary-foreground"
                          : "text-secondary-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">{activeProduct}</h3>
            <p className="text-secondary-foreground leading-relaxed mb-6">{detail.description}</p>
            <h4 className="text-xs uppercase tracking-widest text-accent mb-3">Tehnilised andmed</h4>
            <ul className="space-y-2">
              {detail.specs.map((spec, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
