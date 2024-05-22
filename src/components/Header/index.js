import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm } from "../../reducers/menu.reducer";
import {
  setPage,
  setScrollPosition,
} from "../../reducers/menu.location.reducer";
import iconMenu from "../../assets/iconMenu.svg";
import closeMenu from "../../assets/closeMenu.svg";

function Nav() {
  const dispatch = useDispatch();
  const location = useLocation();
  const formType = useSelector((state) => state.menu.formType);
  const page = useSelector((state) => state.location.currentPage);
  const previousPage = useSelector((state) => state.location.previousPagePath);
  const positionWindow = useSelector((state) => state.location.scrollPosition);

  const headerText =
    location.pathname === "/contact" ? "Baptiste Giroud" : "BGRD";

  const checkFormType =
    location.pathname === "/menu" ? "alternative" : formType;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 250) {
        if (checkFormType !== "alternative") {
          dispatch(toggleForm());
        }
      } else {
        if (checkFormType !== "standard") {
          dispatch(toggleForm());
        }
      }
    };

    const page = location.pathname;
    dispatch(setPage(page));
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [checkFormType, dispatch, location.pathname]);

  const handleClick = () => {
    const scrollPosition = window.scrollY;
    dispatch(setScrollPosition(scrollPosition));
  };

  const handleReturnToPreviousPage = () => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, positionWindow);
    }, 10);
    return () => clearTimeout(timeout);
  };

  return checkFormType === "standard" ? (
    <header className="menu-standard">
      <Link to="/" itemScope itemProp="http://schema.org/Person">
        <h2 className="bgrd" itemProp="name">
          {headerText}
        </h2>
      </Link>
      <nav className="menu">
        <Link
          to="/info"
          className={`nav-link ${page === "Présentation" ? "active" : ""}`}
        >
          Présentation
        </Link>
        <Link
          to="/projets"
          className={`nav-link ${page === "Projets" ? "active" : ""}`}
        >
          Projets
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${page === "Contact" ? "active" : ""}`}
        >
          Contact
        </Link>
      </nav>
    </header>
  ) : (
    <header
      className={`menu-variant ${
        location.pathname === "/menu" ? "white-style" : ""
      }`}
    >
      <Link to="/">
        <h2
          className={`bgrd_variant ${
            location.pathname === "/menu" ? "white-font" : ""
          }`}
        >
          BGRD
        </h2>
      </Link>
      <p className={`${location.pathname === "/menu" ? "white-font" : ""}`}>
        {page}
      </p>
      {location.pathname !== "/menu" ? (
        <Link to="/menu">
          <img src={iconMenu} alt="Icon accès menu" onClick={handleClick} />
        </Link>
      ) : (
        <Link
          to={previousPage === "/menu" ? "/" : previousPage}
          onClick={handleReturnToPreviousPage}
        >
          <img src={closeMenu} alt="Icon fermer menu" />
        </Link>
      )}
    </header>
  );
}

export default Nav;
