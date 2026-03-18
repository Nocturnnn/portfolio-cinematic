const cards = [
  {
    id: 1,
    title: "Editorial Design",
    subtitle: "Creative Direction",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    className: "card card-1",
  },
  {
    id: 2,
    title: "Visual System",
    subtitle: "Brand Experience",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80",
    className: "card card-2",
  },
  {
    id: 3,
    title: "Motion Layout",
    subtitle: "Interactive Web",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    className: "card card-3",
  },
  {
    id: 4,
    title: "Minimal Stories",
    subtitle: "Portfolio Concept",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    className: "card card-4",
  },
];

export default function FloatingCards() {
  return (
    <div className="cards-wrap">
      {cards.map((card) => (
        <article key={card.id} className={card.className}>
          <img src={card.image} alt={card.title} />
          <div className="card-info">
            <p>{card.subtitle}</p>
            <h3>{card.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}
