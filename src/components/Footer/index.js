import { useSelector } from "react-redux";

function Footer() {
  const formType = useSelector((state) => state.menu.formType);
  return formType === "standard" ? (
    <footer>
      <a
        href="https://www.linkedin.com/in/giroud-baptiste/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/BaptisteGiroud"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a href="/BaptisteGiroud.pdf" target="_blank" rel="noopener noreferrer">
        Mon CV
      </a>
    </footer>
  ) : (
    ""
  );
}

export default Footer;
