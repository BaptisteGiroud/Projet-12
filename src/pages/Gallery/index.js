import React, { useEffect, useState } from "react";
import ProjetGallery from "../../components/ProjetGallery";
import projetData from "../../data/projets.json";
import { useLocation } from "react-router-dom";

function Gallery() {
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState(projetData[0]);

  useEffect(() => {
    if (location.pathname === "/galerie" && window.innerWidth <= 425) {
      window.location.replace("/");
    }
  }, [location]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const renderIframeOrImage = (project) => {
    if (project.iframe) {
      return (
        <div>
          <p className="tag-iframe">iFrame</p>
          <iframe
            src={project.iframe}
            className="iFrame"
            title="Preview siteweb"
          ></iframe>
        </div>
      );
    } else if (project.images && project.images.length > 0) {
      return (
        <img
          src={project.images[0]}
          alt="Project preview"
          className="project-image"
        />
      );
    } else {
      return <p>No preview available</p>;
    }
  };

  const ListProjets = projetData.map((projet) => (
    <ProjetGallery
      key={projet.id}
      title={projet.title}
      category={projet.category === "OCR" ? "OpenClassrooms" : projet.category}
      link={projet.link}
      onTitleClick={() => handleProjectClick(projet)}
      isActive={selectedProject === projet}
    />
  ));

  return (
    <div className="gallery-page">
      <div className="container-iframe">
        {renderIframeOrImage(selectedProject)}
      </div>
      <div className="gallery-content">
        <h2>Galerie</h2>
        <div className="gallery-list">{ListProjets}</div>
      </div>
    </div>
  );
}

export default Gallery;
