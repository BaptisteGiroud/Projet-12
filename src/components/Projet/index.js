import Carousel from "../Carousel";

function Projet({ title, description, link, images }) {
  return (
    <section>
      <div className="content-section projet">
        <div className="content-projet">
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              vers le repo Github
            </a>
          )}
        </div>
        <Carousel images={images} title={title} />
        <span></span>
      </div>
    </section>
  );
}

export default Projet;
