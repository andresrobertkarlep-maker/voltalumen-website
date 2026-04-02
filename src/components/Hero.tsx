import heroImage from "@/assets/hero-lighting.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="LED fassaadivalgustus"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
          Tipptasemel<br />
          <span className="text-primary">LED lahendused</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
          Eestis toodetud valgustid kõrge töökindluse, efektiivsuse ja konkurentsivõimelise hinnaga
        </p>
      </div>
    </section>
  );
};

export default Hero;
