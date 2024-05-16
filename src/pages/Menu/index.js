import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Menu() {
  const previousPage = useSelector((state) => state.location.previousPagePath);

  return (
    <div>
      {" "}
      <header className="menu-page">
        <nav className="menu-page-container">
          <Link
            to="/info"
            className={`nav-link ${
              previousPage === "/info" ? "active-menu-page" : ""
            }`}
          >
            Présentation
          </Link>
          <Link
            to="/projets"
            className={`nav-link ${
              previousPage === "/projets" ? "active-menu-page" : ""
            }`}
          >
            Projets
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${
              previousPage === "/contact" ? "active-menu-page" : ""
            }`}
          >
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Menu;
