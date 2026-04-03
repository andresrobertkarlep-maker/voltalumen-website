/* ═══════════════════════════════════════════════════════
   UUDISED – Muuda allpool olevat teksti vastavalt vajadusele.
   Lihtsalt asenda "newsText" sisu uue uudise tekstiga.
   ═══════════════════════════════════════════════════════ */
const newsText =
  "Volta Lumen tarnib fassaadivalgustuse lahenduse Ülemiste kaubanduskeskusele. Lahendus põhineb Cree LEDidel ja Pharos juhtimissüsteemil.";
const newsAuthor = "Madis Reivik";
const newsRole = "Arendusjuht";

const Summary = () => {
  return (
    <section id="tutvustus" className="py-24 border-b border-border">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl font-semibold text-foreground mb-8">Tutvustus</h2>
        <div className="space-y-5 text-secondary-foreground leading-relaxed">
          <p>
            Volta Lumen on arenev Eesti ettevõte, mis arendab ja toodab LED valguslahendusi. Meie tooted on kõrge töökindluse, efektiivsuse ja konkurentsivõimelise hinnaga.
          </p>
          <p>
            Pakume lahendusi fassaadidele, kaubanduspindadele, interjööridele ja eritellimustele.
          </p>
          <p>
            Kõik valgustid on toodetud Eestis, kasutades kvaliteetseid komponente sertifitseeritud tarnijatelt ja tipptasemel tehnoloogiat.
          </p>
        </div>

        <div className="mt-12 p-6 bg-card border border-border rounded-lg">
          <h3 className="font-display text-sm uppercase tracking-widest text-primary mb-2">Uudised</h3>
          {/* ↓ Muuda uudise teksti ülal oleva newsText muutuja kaudu ↓ */}
          <p className="text-secondary-foreground">{newsText}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            <strong className="text-foreground">{newsAuthor}</strong> — {newsRole}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
