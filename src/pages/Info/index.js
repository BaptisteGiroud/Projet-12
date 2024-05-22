import React, { useState, useEffect } from "react";
import ScrollingArrow from "../../assets/scrolling.svg";
import Skills from "../../assets/Skills.svg";
import Skills_Mobile from "../../assets/Skills_mobile.svg";
import useScroll from "../../help/";

function Info() {
  useScroll();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

  const updateImageSrc = () => {
    setIsMobile(window.innerWidth <= 425);
  };

  useEffect(() => {
    window.addEventListener("resize", updateImageSrc);
    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);

  return (
    <div>
      <div className="introduction-page">
        <div className="tag-title">
          <p>
            "Quand la passion du graphisme épouse la technologie, <br />
            chaque interaction devient une expérience visuelle immersive."
          </p>
        </div>
        <div className="container-arrow">
          <img
            src={ScrollingArrow}
            alt="Indication scrol vers le bas"
            className="scrolling-down"
          />
        </div>
      </div>
      <section className="title-section">
        <div className="content-section adjust-about">
          <h2>Qui suis-je</h2>
          <p>
            Enchanté, moi c'est Baptiste, un passionné d'art et de graphisme.
            Mon parcours commence avec un baccalauréat professionnel en
            communication graphique, qui m'a permis de poser de bonnes bases
            dans ce domaine. <br /> <br />
            Ensuite, j'ai poursuivi mes études à l'ENAAI, une école d'art
            spécialisée dans les métiers visuels et de l'image. Cette formation
            m'a offert la possibilité d'affiner mes compétences en graphisme,
            illustration et conception visuelle, m'enrichissant tant sur le plan
            technique qu'artistique. <br /> <br /> Par la suite, j'ai suivi une
            formation d'intégrateur web chez OpenClassrooms, où j'ai acquis des
            compétences solides en développement web, me permettant de combiner
            ma sensibilité artistique avec des technologies modernes pour créer
            des expériences utilisateur complètes et innovantes.
          </p>
          <span></span>
        </div>
      </section>
      <section className="title-section">
        <div className="content-section adjust-inspiration">
          <h2>Mes inspirations</h2>
          <p>
            Depuis toujours, je suis fasciné par l'art et le pouvoir de l'image.
            Cette passion s'est étendue aux nouvelles technologies et au
            développement web. En m'initiant aux langages de programmation et
            aux frameworks modernes, j'ai trouvé une nouvelle manière d'exprimer
            ma créativité. Cette dualité entre l'art traditionnel et les
            technologies numériques m'enrichi de jour en jour.
          </p>
          <span></span>
        </div>
      </section>
      <section className="title-section">
        <div className="content-section adjust-skills">
          <h2>Skills & tools</h2>
          <p>
            De ce fait, cela me permet de concevoir des interfaces utilisateurs
            esthétiques et intuitives tout en assurant le développement
            technique. Mon expertise en design graphique et en programmation me
            permet de créer des projets cohérents et fonctionnels, répondant aux
            besoins spécifiques de chaque projet.
          </p>
          <img
            src={isMobile ? Skills_Mobile : Skills}
            alt="Skills & tools"
            className="skills-tools"
          />
        </div>
      </section>
    </div>
  );
}

export default Info;
