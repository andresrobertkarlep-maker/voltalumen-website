import { useState } from "react";
import { FileText } from "lucide-react";

const categories = [
  { name: "Sisevalgustid", products: ["LR1000", "Comp50"] },
  { name: "Välisvalgustid", products: ["MSpot"] },
  { name: "Dekoratiivvalgustid", products: ["Stellar", "Reclen"] },
  { name: "Toite- ja juhtseadmed", products: ["HE4x4FD", "HE5x3FD"] },
];

const productDetails: Record<string, { description: string; description2?: string; specs: string[]; datasheets?: { label: string; url: string }[] }> = {
  Comp50: {
    description: "Comp50 on 160mm diameetriga valgusti kaubanduspindadele, ladudele, tootmisaladele. Paigaldus toimub kas ripplakke, läbi 150mm ava, või riputatud paigaldusega. Tähtkinnituse abil võib moodustada kobara komest või viiest valgustist, see on eriti sobilik suurematele tootmispindadele.",
    specs: ["Võimsus: 50W, ~230VAC", "5000 luumenit", "Erinevad karakteristikud saadaval", "Integreeritud toiteplokk", "Mass: 1,2kg"],
    datasheets: [
      { label: "Andmeleht EST", url: "http://voltalumen.com/wp-content/uploads/2014/03/Comp_50_est.pdf" },
      { label: "Andmeleht ENG", url: "http://voltalumen.com/wp-content/uploads/2014/03/Comp_50_eng.pdf" },
    ],
  },
  LR1000: {
    description: "LR1000 on luminofoorvalgustite asendamiseks loodud tooteperekond Cree kõrgefektiivsete LEDide baasil. Saadaval on erineva kiirelaiusega modifikatsioonid. Vastavalt rakendusele oskame soovitada parimat varianti.",
    specs: ["Võimsus: 50W, ~230VAC", "5000 luumenit", "Erinevad karakteristikud saadaval", "Integreeritud toiteplokk", "Mass: 2,2kg"],
    datasheets: [
      { label: "Andmeleht EST", url: "http://voltalumen.com/wp-content/uploads/2014/03/LR1000_est_rev2.pdf" },
      { label: "Andmeleht ENG_W", url: "http://voltalumen.com/wp-content/uploads/2014/03/LR1000W_eng.pdf" },
      { label: "Andmeleht ENG UW", url: "http://voltalumen.com/wp-content/uploads/2014/03/LR1000UW_eng.pdf" },
      { label: "CE deklaratsioon", url: "http://voltalumen.com/wp-content/uploads/2014/03/LR1000_CE.pdf" },
    ],
  },
  MSpot: {
    description: "MSpot on võimas ja robustne valgusti fassaadide, alade ja objektide (kujud, väikevormid) valgustamiseks. Tarnitakse koos toiteplokiga MPS40. Valgusti paigaldusnurk on reguleeritav kuuskantvõtme (5mm) abil. Valgustil on purunematu PC-kaitseklaas. Toitejuhe on fikseeritud (metallist kaabliläbiviik) või pistikuga (soovitatav kasutada suuremahulistes paigaldistes). Valgusnurk on valitav (vt. datasheeti). Valgustis on kaks gruppi elemente, see lubab teha ka kahe erineva valgusnurgaga kombolahenduse, nt. lai grupp üldvalgustuseks ning kitsas grupp konkreetse objekti (uks, värav) ajutiseks väljatoomiseks.",
    specs: ["Võimsus: 40W, 800mA", "2400 luumenit", "Erinevad karakteristikud", "IP67", "Mass: 1,8kg"],
    datasheets: [
      { label: "Andmeleht EST", url: "https://voltalumen.com/tooted/Mspot_est.pdf" },
      { label: "Andmeleht ENG", url: "https://voltalumen.com/tooted/Mspot_eng.pdf" },
    ],
  },
  Stellar: {
    description: "Stellar on miniatuurne laia kiirgusnurgaga valgusti, mis sobib nii dekoratiiv- ja mööblivalgustuseks kui ka ruumide üldvalguseks, avariivalgustuseks, vannituppa ning koridori. Lai valik korpuse ja valguse värvitoone lubab leida optimaalse lahenduse. Võib kasutada nii mittereguleeritava, kui ka täisjuhitava toiteplokiga, vooluga kuni 700mA. Paigaldus on tänu vedrukinnitusele lihtne ning positsioon teatud ulatuses reguleeritav. Dekoratiivlahendustes (nt. garniisid) võib paigutada 30-60cm vahega, vool kuni 350mA. Üldvalgustuseks sobib 1-2 valgustit põrandapinna ruutmeetri kohta, vool kuni 700mA.",
    specs: ["Võimsus: 1-3W", "Vool: 350–750mA", "100–180 luumenit", "Valgusnurk: ±45°", "Vedrukinnitusega paigaldus"],
    datasheets: [
      { label: "Andmeleht EST", url: "https://voltalumen.com/tooted/Stellar_est.pdf" },
      { label: "Andmeleht ENG", url: "https://voltalumen.com/tooted/Stellar_eng.pdf" },
    ],
  },
  Reclen: {
    description: "Reclen on valgusti treppide, põrandate ning objektide dekoratiivseks ja markeerivaks valgustamiseks. Paigaldamine toimub vedru, 2 poolse teibi või liimi abil. Valgusnurk on kitsas. Treppide valgustamiseks paigaldage valgusti astme otsa, ca 20..30mm kõrgemale astmetasapinnast. Kui trepp on laiem kui 2 meetrit, võiks valgustid paigutada mõlemasse otsa. Põranda dekoratiivseks valgustamiseks sobib paigaldussamm 400mm. Kui paigaldus toimub 2 poolse teibiga, tuleb aluspind puhastada rasvast. Õlitatud pindadel (puit, parkett) on soovitatav kasutada vedrukinnitust. Toitevool ei tohi ületada 350mA.",
    specs: ["Võimsus: 1W, 350mA", "100 luumenit", "Valgusnurk: ±7°", "8 tk toiteploki kohta", "Juhtme pikkus: 200mm"],
    datasheets: [
      { label: "Andmeleht EST", url: "https://voltalumen.com/tooted/Reclen_est.pdf" },
      { label: "Andmeleht ENG", url: "https://voltalumen.com/tooted/Reclen_eng.pdf" },
    ],
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

            {detail.datasheets && detail.datasheets.length > 0 && (
              <div className="mt-6 pt-4 border-t border-border">
                <h4 className="text-xs uppercase tracking-widest text-accent mb-3">Andmelehed</h4>
                <div className="flex flex-wrap gap-2">
                  {detail.datasheets.map((ds) => (
                    <a
                      key={ds.url}
                      href={ds.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-secondary text-secondary-foreground rounded hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <FileText size={12} />
                      {ds.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
