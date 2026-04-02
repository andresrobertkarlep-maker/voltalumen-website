const Summary = () => {
  return (
    <section id="kokkuvote" className="py-24 border-b border-border">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl font-semibold text-foreground mb-8">Kokkuvõte</h2>
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
          <p className="text-secondary-foreground">
            Volta Lumen tarnib fassaadivalgustuse lahenduse Ülemiste kaubanduskeskusele. Lahendus põhineb Cree LEDidel ja Pharos juhtimissüsteemil.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            <strong className="text-foreground">Madis Reivik</strong> — Arendusjuht
          </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
