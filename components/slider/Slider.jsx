
const Slider = () => {
  const TEXTS = [
    "fashion",
    "beauty",
    "models",
    "runway",
    "celebrities",
    "cosmetics",
    "perfumes",
    "trends",
    "cfda",
    "british fashion council",
    "fashion week",
    "super models",
    "luxury brands",
    "chanel",
    "versace",
    "dior",
    "armani",
    "louis vuitton",
    "victoria's secret",
    "Jacquemus",
    "gucci",
    "Hermès",
    "Balenciaga ",
    "paris fashion week",
    "Michael Kors"
  ];
  return (
    <div className="slider">
      <div className="wrapper">
        <div className="marquee">
            {TEXTS.map((item, key) => (
              <a key={key} className="hover_underline" href="https://thefashionenthusiast.uk/tags/${}"></a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
