import ScrollingArrow from "../../assets/scrolling.svg";
import useScroll from "../../help";
import React, { useState } from "react";

function Contact() {
  useScroll();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();
    if (result.success) {
      setStatus("Message envoyé avec succès!");
    } else {
      setStatus("Échec de l'envoi du message.");
    }
  };

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
          <form onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Votre nom"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Votre email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="message"></label>
            <textarea
              name="message"
              value={message}
              placeholder="Votre message"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Envoyer</button>
          </form>
          {status && <p>{status}</p>}
        </div>
      </section>
    </div>
  );
}

export default Contact;
