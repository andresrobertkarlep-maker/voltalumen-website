import { useState } from "react";

const categories = [
  { name: "Interior", products: ["LR1000", "Comp50"] },
  { name: "Exterior", products: ["MSpot", "Seagull"] },
  { name: "Decorative", products: ["Stellar", "Reclen"] },
  { name: "Supply & Controllers", products: ["HE4x4FD", "HE5x3FD"] },
];

const productDetails: Record<string, { description: string; specs: string[] }> = {
  Comp50: {
    description: "160mm diameter fixture for retail areas, warehouses, production areas. Can be installed in suspended ceiling through 150mm opening or with star-installation (in group of 3 or 5 units).",
    specs: ["Power: 50W, ~230VAC", "5000 lumens", "Various characteristics available", "Integrated power supply", "Mass: 1.2kg"],
  },
  LR1000: {
    description: "Interior lighting product family, especially suitable for replacing fluorescent lights. Various beam configurations are available.",
    specs: ["Power: 50W, ~230VAC", "5000 lumens", "Various characteristics available", "Integrated power supply", "Mass: 2.2kg"],
  },
  MSpot: {
    description: "Powerful and rugged lamp for facade, area and object lighting. Two groups of LEDs enable combination output — wide angle for general lighting and narrow for entrance lighting.",
    specs: ["Power: 40W, 800mA", "2400 lumens", "Various characteristics", "IP67", "Mass: 1.8kg"],
  },
  Seagull: {
    description: "Lighting fixture for parks, pathways and parking places. Completely tailorable to user needs — specify enclosure color, light temperature or lamp shape. Totally maintenance free.",
    specs: ["Power: 40W, 800mA", "2200 lumens", "IP67", "Working temp: -40..+35°C", "Lifetime: 10..20 years"],
  },
  Stellar: {
    description: "Miniature, wide beam light suitable for decorative, furniture, general, bathroom, emergency and hallway lighting. Wide choice of case and light colour.",
    specs: ["Power: 1-3W", "Current: 350–750mA", "100–180 lumens", "Beam angle: ±45°", "Spring mount installation"],
  },
  Reclen: {
    description: "Miniature, narrow beam light for decorative lighting of stairs, floors and small objects. Installation by spring, double-sided tape or glue.",
    specs: ["Power: 1W, 350mA", "100 lumens", "Beam angle: ±7°", "8 pc per power supply", "Wire length: 200mm"],
  },
  HE4x4FD: {
    description: "Power supply and controller unit for LED lighting systems.",
    specs: ["4-channel output", "Full dimming capability"],
  },
  HE5x3FD: {
    description: "Power supply and controller unit for LED lighting systems.",
    specs: ["5-channel output", "Full dimming capability"],
  },
};

const Products = () => {
  const [activeProduct, setActiveProduct] = useState<string>("Comp50");

  const detail = productDetails[activeProduct];

  return (
    <section id="products" className="py-24 border-b border-border">
      <div className="container">
        <h2 className="font-display text-3xl font-semibold text-foreground mb-12">Products</h2>

        <div className="grid md:grid-cols-[240px_1fr] gap-12">
          {/* Sidebar */}
          <div className="space-y-8">
            {categories.map((cat) => (
              <div key={cat.name}>
                <h3 className="text-xs uppercase tracking-widest text-primary mb-3">{cat.name}</h3>
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

          {/* Detail */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">{activeProduct}</h3>
            <p className="text-secondary-foreground leading-relaxed mb-6">{detail.description}</p>
            <h4 className="text-xs uppercase tracking-widest text-primary mb-3">Specifications</h4>
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
