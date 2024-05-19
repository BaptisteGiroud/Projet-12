import Lines from "../../assets/Lines.svg";
import Lines_mobile from "../../assets/Lines_mobile.svg";
import { useEffect, useState } from "react";

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

  const updateImageSrc = () => {
    setIsMobile(window.innerWidth <= 425);
  };

  useEffect(() => {
    window.addEventListener("resize", updateImageSrc);
    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);

  return (
    <div className="home-content">
      <div>
        <h2 className="dev">Développeur</h2>
        <h2 className="web">Web</h2>
        <h2 className="design">Designer</h2>
        <h1 className="name">Baptiste GIROUD</h1>
      </div>
      <img
        src={isMobile ? Lines_mobile : Lines}
        alt="Lignes de fond"
        className="background-lines"
      />
    </div>
  );
}

export default Home;
