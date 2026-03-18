import FloatingCards from "./FloatingCards";

export default function HeroScene() {
  return (
    <main className="scene">
      <div className="background-word">
        <span>PORTFOLIO</span>
      </div>

      <div className="scene-content">
        <FloatingCards />
      </div>
    </main>
  );
}
