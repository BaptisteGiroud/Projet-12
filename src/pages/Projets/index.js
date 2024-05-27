import ScrollingArrow from "../../assets/scrolling.svg";
import iconWIP from "../../assets/iconWIP.svg";
import Projet from "../../components/Projet";
import projetData from "../../data/projets.json";
import useScroll from "../../help";
import ArrowMovedUp from "../../components/ArrowMovedUp";

function Projets() {
  const projetsOCR = projetData
    .filter((projet) => projet.category === "OCR")
    .map((projet, index) => (
      <Projet
        key={projet.id}
        title={projet.title}
        description={projet.description}
        link={projet.link}
        images={projet.images}
      />
    ));

  const projetsProfessionnels = projetData
    .filter((projet) => projet.category === "Professionnel")
    .map((projet, index) => (
      <Projet
        key={projet.id}
        title={projet.title}
        description={projet.description}
        link={projet.link}
        images={projet.images}
      />
    ));
  const projetsProfessionnelsDisponibles = projetsProfessionnels.length > 0;

  const projetsPersonnels = projetData
    .filter((projet) => projet.category === "Personnel")
    .map((projet, index) => (
      <Projet
        key={projet.id}
        title={projet.title}
        description={projet.description}
        link={projet.link}
        images={projet.images}
      />
    ));
  const projetsPersonnelsDisponibles = projetsPersonnels.length > 0;

  useScroll();

  return (
    <div>
      <div className="introduction-page">
        <div className="tag-title">
          <p>
            Découvrez mes réalisations personnelles
            <br />
            et professionnelles afin d’en apprendre plus sur moi.
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
      <ArrowMovedUp />
      <section className="title-section">
        <div className="content-section">
          <h2>
            Projets réalisés lors du cursus d'intégrateur web* chez
            OpenClassrooms
          </h2>
          <p>
            *<strong>L’intégrateur Web</strong> est chargé d’intégrer les{" "}
            <strong>éléments visuels</strong> dans les pages d’un site web pour
            créer une interface harmonieuse, lisible et facilement navigable. Il
            a de solides{" "}
            <strong>connaissances des langages de programmation</strong> pour
            pouvoir afficher le plus fidèlement possible le{" "}
            <strong>design graphique</strong> sur tous types de navigateurs et
            tailles d’écrans.
          </p>
        </div>
      </section>
      <div>{projetsOCR}</div>
      {projetsProfessionnelsDisponibles && (
        <section className="title-section">
          <div className="content-section">
            <h2>Projets Professionnels</h2>
            <p>
              Vous trouverez ci-dessous les réalisations dans le cadre
              professionnelles.
            </p>
          </div>
        </section>
      )}
      {projetsProfessionnelsDisponibles && <div>{projetsProfessionnels}</div>}
      {projetsPersonnelsDisponibles && (
        <section className="title-section">
          <div className="content-section">
            <h2>Projets Personnels</h2>
            <p>Vous trouverez ci-dessous des réalisations personnelles.</p>
          </div>
        </section>
      )}
      {projetsPersonnelsDisponibles && <div>{projetsPersonnels}</div>}
      <div className="work-in-progress">
        <p>
          Il y a un début à tout, <br />
          D’autres projets arriverons.
        </p>
        <img src={iconWIP} alt="Icon: En cours de production" />
      </div>
    </div>
  );
}

export default Projets;
