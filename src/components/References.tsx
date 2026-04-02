import { useState } from "react";
import { ChevronDown, ExternalLink, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const references = [
  {
    name: "Port Artur 2",
    description: "Port Artur 2 on Pärnu linnas asuv kaubanduskeskus, kuhu valmistasime nii sise- kui välisvalgustuse. Siselahendus koosneb karniiside peale paigutatud RGB profiilidest, mis loovad sobiliku värvitausta. Lisaks on karniiside alla kinnitatud Stellar külmvalged valguselemendid, mis päevavalges toimivad dekoratiivelementidena, kuid öösel tagavad vajaliku üldvalgustusfooni.",
    description2: "Välislahendus koosneb fassaadipealsetest 50W MSpot prožektoritest ning fassaadialustest 20W MSpot lampidest, mõlemad on värvitud fassaadiga ühte tooni ning lisaks on alumised valgustid kaldega, mis väldib pimestamist. Välislahendusel on nii dekoratiivne kui ka üldvalgustuslik funktsioon – peale keskuse sulgemist lülitatakse välja fassaadialused üldvalgustid (koguvõimsus üle 5kW) ning nende asemel annavad vajaliku fooni MSpot prožektorid, koguvõimsusega alla 1kW. See lahendus säästab keskuse haldajale ainuüksi energia näol mitusada krooni nädalas.",
    images: [
      "https://voltalumen.com/wp-content/uploads/2011/09/Portartur_1.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/Portartur_2.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/Portartur_3.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/Portartur_4.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/Portartur_5.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/Portartur_6.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/Portartur_7.jpg",
    ],
  },
  {
    name: "Tallinki büroohoone",
    description: "Tallinki büroohoone on näide täielikust rätsepalahendusest. Arhitekt Meelis Pressi projekteeritud \"sõrestikfassaad\" on valgustatud ainult sisekülgedelt. Selle jaoks sai välja töötatud täpse paigutusnurgaga 80W RGBW valgusti, mille karakteristik on optimiseeritud täpselt sellise laiusega posti jaoks.",
    description2: "Kogu lahendus koosneb 120 valgustist (ligi 3000 LEDi) ning lahenduse tippvõimsus on ca 12kW. Keskmine tarbitav võimsus (olenevalt efektist) jääb 3kW piiridesse.",
    images: [
      "https://voltalumen.com/wp-content/uploads/2011/09/Tallinkbyroo1.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/Tallinkbyroo2.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/Tallinkbyroo3.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/Tallinkbyroo4.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/Tallinkbyroo5.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/Tallinkbyroo6.jpg",
    ],
  },
  {
    name: "Ööklubi Marat",
    description: "Ööklubi Maratile valmistasime vastavalt sisekujundaja Pille Tael-i soovidele baariletivalgustid ning puhkeruumivalgustid. Valguse värvus on vabalt muudetav. Puhkeruumi lampidele lisasime kujunduselementidena \"tiivad\".",
    description2: "Lahenduse eeliseks on äärmiselt väike energiatarve, valgustkarakteristiku täpne sobitatus rakendusega ning praktikas piiramatu eluiga.",
    images: [
      "https://voltalumen.com/wp-content/uploads/2011/09/Marat1.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/Marat2.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/Marat3.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/Marat4.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/Marat5.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/Marat6.jpg",
    ],
  },
  {
    name: "Tallink SPA",
    description: "Tallink SPA oli meie esimene suurem täislahendus. Valmistasime valgustatud uksepaneelid, põrandasisesed \"ketasvalgustid\" ning seinasisesed dekoratiivvalgustid.",
    description2: "Kogu lahendus on www põhise juhtimisega.",
    images: [
      "https://voltalumen.com/wp-content/uploads/2011/09/TallinkSPA1.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/TallinkSPA2.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/TallinkSPA3.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/TallinkSPA4.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/TallinkSPA5.jpg",
      "https://voltalumen.com/wp-content/uploads/2011/09/TallinkSPA6.jpg",
    ],
  },
  {
    name: "Lennusadam",
    description: "Töötasime välja ning valmistasime RGBW üldvalgustuse. Mis muudab valgustid unikaalseks – nende alla on riputatud õhuke veeanum, mida tõmmits tamiili abil raputab. Valgus paistab läbi vee ning see tekitab põrandale realistliku laineefekti.",
    link: { label: "Lennusadama kodulehekülg", url: "http://lennusadam.eu/en/press" },
    images: [
      "https://voltalumen.com/wp-content/uploads/2014/03/06.jpg",
    ],
  },
  {
    name: "Tartu raekoda",
    description: "Tartu raekoda oli meie esimene installeeritud RGBW fassaadivalgustus. Kasutasime Lumiled K2 elemente ning valgustitesse integreeritud 8 bitiseid juhtkontrollereid.",
    description2: "Installeeritud koguvõimsus – 2kW, keskmine kasutatav võimsus 500..800W.",
    pdf: { label: "Andmeleht ENG", url: "https://voltalumen.com/referents/townhall_eng.pdf" },
    images: [],
  },
  {
    name: "Ülemiste Keskus",
    description: "Vahetasime kogu halogeenlampidest koostatud \"tähistaeva\" Stellar LED valgustite vastu. Tulemusena vähenes võimsustarve 15kW võrra ning hooldusvajadus kadus. 1500 valgustist ei ole 4 aasta jooksul ükski vajanud vahetamist.",
    pdf: { label: "Andmeleht ENG", url: "https://voltalumen.com/referents/Ylemiste_eng.pdf" },
    images: [],
  },
];

const References = () => {
  const [selected, setSelected] = useState<typeof references[0] | null>(null);

  return (
    <section id="tehtud-tood" className="py-24 border-b border-border">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl font-semibold text-foreground mb-12">Tehtud tööd</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {references.map((ref) => (
            <button
              key={ref.name}
              onClick={() => setSelected(ref)}
              className="flex items-center justify-between gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/60 transition-colors text-left group"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-secondary-foreground text-sm group-hover:text-foreground transition-colors">{ref.name}</span>
              </div>
              <ChevronDown size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-xl">{selected.name}</DialogTitle>
                <DialogDescription className="sr-only">
                  {selected.name} projekti kirjeldus
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mt-2">
                <p className="text-secondary-foreground text-sm leading-relaxed">{selected.description}</p>

                {selected.images.length > 0 && (
                  <div className="grid grid-cols-3 gap-2">
                    {selected.images.map((img, i) => (
                      <a key={i} href={img} target="_blank" rel="noopener noreferrer">
                        <img
                          src={img}
                          alt={`${selected.name} foto ${i + 1}`}
                          className="w-full h-24 object-cover rounded border border-border hover:opacity-80 transition-opacity"
                          loading="lazy"
                        />
                      </a>
                    ))}
                  </div>
                )}

                {selected.description2 && (
                  <p className="text-secondary-foreground text-sm leading-relaxed">{selected.description2}</p>
                )}

                <div className="flex flex-wrap gap-3 pt-2">
                  {selected.link && (
                    <a
                      href={selected.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                    >
                      <ExternalLink size={12} />
                      {selected.link.label}
                    </a>
                  )}
                  {selected.pdf && (
                    <a
                      href={selected.pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                    >
                      <FileText size={12} />
                      {selected.pdf.label}
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default References;
