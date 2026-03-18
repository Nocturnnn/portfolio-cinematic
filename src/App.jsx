import { useEffect, useRef } from "react";

const letters = [
  { char: "P", className: "letter l1" },
  { char: "O", className: "letter l2" },
  { char: "R", className: "letter l3" },
  { char: "T", className: "letter l4" },
  { char: "F", className: "letter l5" },
  { char: "O", className: "letter l6" },
  { char: "L", className: "letter l7" },
  { char: "I", className: "letter l8" },
  { char: "O", className: "letter l9" },
];

const cards = [
  {
    id: 1,
    title: "Editorial Vision",
    subtitle: "Creative Direction",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    className: "card card-1",
  },
  {
    id: 2,
    title: "Digital Narrative",
    subtitle: "Interface Concept",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    className: "card card-2",
  },
  {
    id: 3,
    title: "Modern Systems",
    subtitle: "Visual Identity",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    className: "card card-3",
  },
  {
    id: 4,
    title: "Motion Stories",
    subtitle: "Interactive Portfolio",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    className: "card card-4",
  },
];

export default function App() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const handleMove = (e) => {
      const rect = scene.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      scene.style.setProperty("--mx", `${x * 16}px`);
      scene.style.setProperty("--my", `${y * 12}px`);
      scene.style.setProperty("--rx", `${y * -3}deg`);
      scene.style.setProperty("--ry", `${x * 5}deg`);
    };

    const resetMove = () => {
      scene.style.setProperty("--mx", "0px");
      scene.style.setProperty("--my", "0px");
      scene.style.setProperty("--rx", "0deg");
      scene.style.setProperty("--ry", "0deg");
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", resetMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", resetMove);
    };
  }, []);

  return (
    <main className="scene" ref={sceneRef}>
      <div className="ambient-glow glow-1" />
      <div className="ambient-glow glow-2" />
      <div className="ambient-glow glow-3" />

      <div className="top-bar">
        <span className="brand">MATEUS VITOR</span>
        <span className="nav">SELECTED WORKS</span>
      </div>

      <div className="portfolio-word" aria-hidden="true">
        {letters.map((letter, index) => (
          <span key={index} className={letter.className}>
            <span className="letter-inner">{letter.char}</span>
          </span>
        ))}
      </div>

      <div className="cards-shadow" />

      <section className="cards-wrap" aria-label="Projetos em destaque">
        {cards.map((card) => (
          <article key={card.id} className={card.className}>
            <div className="glass-border" />
            <img src={card.image} alt={card.title} />
            <div className="card-overlay" />
            <div className="card-reflection" />
            <div className="card-content">
              <p>{card.subtitle}</p>
              <h2>{card.title}</h2>
            </div>
          </article>
        ))}
      </section>

      <div className="bottom-copy">
        <p>Visual Designer & Front-End Developer</p>
        <p>Curated digital experiences and modern interfaces.</p>
      </div>
    </main>
  );
}
