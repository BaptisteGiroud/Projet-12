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
            Enchanté, moi c'est Baptiste, un passionné{" "}
            <strong>d'art et de graphisme</strong>. Mon parcours commence avec
            un baccalauréat professionnel en{" "}
            <strong>communication graphique</strong>, qui m'a permis de poser de
            bonnes bases dans ce domaine. <br /> <br />
            Ensuite, j'ai poursuivi mes études à <strong>l'ENAAI</strong>, une
            école d'art spécialisée dans les métiers visuels et de l'image.
            Cette formation m'a offert la possibilité d'affiner mes compétences
            en <strong>graphisme, illustration et conception visuelle</strong>,
            m'enrichissant tant sur le plan technique qu'artistique. <br />{" "}
            <br /> Par la suite, j'ai suivi une formation{" "}
            <strong>d'intégrateur web chez OpenClassrooms</strong>, où j'ai
            acquis des compétences solides en <strong>développement web</strong>
            , me permettant de combiner ma sensibilité artistique avec des
            technologies modernes pour créer des expériences utilisateur
            complètes et innovantes.
          </p>
          <span></span>
        </div>
      </section>
      <section className="title-section">
        <div className="content-section adjust-inspiration">
          <h2>Mes inspirations</h2>
          <p>
            Depuis toujours, je suis fasciné par{" "}
            <strong>l'art et le pouvoir de l'image</strong>. Cette passion s'est
            étendue aux <strong>nouvelles technologies</strong> et au{" "}
            <strong>développement web</strong>. En m'initiant aux langages de
            programmation et aux frameworks modernes, j'ai trouvé une nouvelle
            manière d'exprimer ma créativité. Cette dualité entre l'art
            traditionnel et les technologies numériques m'enrichi de jour en
            jour.
          </p>
          <span></span>
        </div>
      </section>
      <section className="title-section">
        <div className="content-section adjust-skills">
          <h2>Skills & tools</h2>
          <p>
            De ce fait, cela me permet de concevoir des{" "}
            <strong>interfaces utilisateurs</strong> esthétiques et intuitives
            tout en assurant le développement technique. Mon expertise en{" "}
            <strong>design graphique</strong> et en{" "}
            <strong>programmation</strong> me permet de créer des projets
            cohérents et fonctionnels, répondant aux besoins spécifiques de
            chaque projet.
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
