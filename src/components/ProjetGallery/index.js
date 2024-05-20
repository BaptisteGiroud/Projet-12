import ArrowProjet from "../../assets/Arrow_Projet.svg";

function ProjetGallery({ title, category, link, onTitleClick }) {
  return (
    <div className="gallery-projet">
      <div>
        <h3 onClick={onTitleClick}>{title}</h3>
        <p>{category}</p>
      </div>
      {link && (
        <div className="link-projet">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <span>vers le repo</span>
            <img src={ArrowProjet} alt="Lien vers projet" />
          </a>
        </div>
      )}
    </div>
  );
}

export default ProjetGallery;
