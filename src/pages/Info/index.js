import React, { useEffect } from "react";
import ScrollingArrow from "../../assets/scrolling.svg";
import Skills from "../../assets/Skills.svg";
import useScroll from "../../help/";

function Info() {
  useScroll();

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
        <div className="content-section">
          <h2>Qui suis-je</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend
            risus neque, vitae vestibulum tellus cursus vitae. Phasellus pretium
            tristique fermentum. Vivamus egestas metus nec dui pharetra, at
            imperdiet est auctor. Donec suscipit mi ac tempor luctus. Cras metus
            orci, hendrerit a pharetra aliquet, egestas sit amet neque. Nullam
            nisl ante, congue quis vulputate aliquet, accumsan a eros. Nunc
            pellentesque ornare felis.
          </p>
          <span></span>
        </div>
      </section>
      <section className="title-section">
        <div className="content-section">
          <h2>Mes inspirations</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend
            risus neque, vitae vestibulum tellus cursus vitae. Phasellus pretium
            tristique fermentum. Vivamus egestas metus nec dui pharetra, at
            imperdiet est auctor. Donec suscipit mi ac tempor luctus. Cras metus
            orci, hendrerit a pharetra aliquet, egestas sit amet neque. Nullam
            nisl ante, congue quis vulputate aliquet, accumsan a eros. Nunc
            pellentesque ornare felis.
          </p>
          <span></span>
        </div>
      </section>
      <section className="title-section">
        <div className="content-section">
          <h2>Skills & tools</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend
            risus neque, vitae vestibulum tellus cursus vitae. Phasellus pretium
            tristique fermentum. Vivamus egestas metus nec dui pharetra, at
            imperdiet est auctor. Donec suscipit mi ac tempor luctus. Cras metus
            orci, hendrerit a pharetra aliquet, egestas sit amet neque. Nullam
            nisl ante, congue quis vulputate aliquet, accumsan a eros. Nunc
            pellentesque ornare felis.
          </p>
          <img src={Skills} alt="Skills & tools" className="skills-tools" />
        </div>
      </section>
    </div>
  );
}

export default Info;
