import ScrollingArrow from "../../assets/scrolling.svg";
import useScroll from "../../help";

function Contact() {
  useScroll();

  return (
    <div>
      <div className="introduction-page">
        <div className="tag-title-contact">
          <p>
            <span>demande de devis ?</span>
            <br />
            <span className="second-indent">
              envie d’une vitrine pour votre entreprise ?
            </span>
            <br />
            <span className="third-indent">
              Ou pour tout autres requête professionnel.
            </span>
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
      <section>
        <div className="content-section">
          <h2>Je vous réponderais au plus vite.</h2>
          <form>
            <label htmlfor="name"></label>
            <input type="text" name="name" id="name" placeholder="Votre nom" />
            <label htmlfor="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Votre email"
            />
            <label htmlfor="message"></label>
            <textarea
              type="message"
              name="message"
              id="message"
              placeholder="Votre message"
            />
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
