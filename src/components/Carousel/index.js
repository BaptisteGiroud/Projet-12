import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";
import { useState } from "react";

function Carousel(images, title) {
  let [activeIndex, setActiveIndex] = useState(0);

  let movedLeft = () => {
    setActiveIndex((index) =>
      index === 0 ? images.images.length - 1 : index - 1
    );
  };
  let movedRight = () => {
    setActiveIndex((index) =>
      index === images.images.length - 1 ? 0 : index + 1
    );
  };

  const getImageName = (path) => {
    const parts = path.split("/");
    const filename = parts[parts.length - 1];
    const name = filename.split(".")[0];
    const spacedName = name.replace(/([A-Z0-9])/g, " $1");
    return spacedName.trim();
  };

  const dots = images.images.map((_, index) => (
    <div
      key={index}
      className={`dot ${index === activeIndex ? "dot_selected" : ""}`}
      onClick={() => setActiveIndex(index)}
    ></div>
  ));

  return (
    <div className="carousel">
      {images.images.length > 1 ? (
        <div className="carousel_nav">
          <img
            onClick={movedLeft}
            className="leftArrow"
            src={leftArrow}
            alt="Fleche de navigation de gauche"
          />
          <img
            onClick={movedRight}
            className="rightArrow"
            src={rightArrow}
            alt="Fleche de navigation de droite"
          />
          <div className="dots">{dots}</div>
        </div>
      ) : (
        ""
      )}

      <img
        className="carousel_pictures"
        src={images.images[activeIndex]}
        alt={getImageName(images.images[activeIndex])}
      />
    </div>
  );
}

export default Carousel;
