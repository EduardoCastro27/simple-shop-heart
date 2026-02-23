import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Produtos em destaque"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/20" />
      </div>

      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="max-w-lg fade-in">
          <h1 className="text-4xl font-bold leading-tight text-primary-foreground md:text-5xl">
            Encontre tudo que você precisa
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Produtos selecionados com os melhores preços e entrega rápida.
          </p>
          <a
            href="#produtos"
            className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-all hover:opacity-90 active:scale-95"
          >
            Ver Produtos
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
