import iconOriginal from "../../assets/iconGallery.svg";
import iconAlternative from "../../assets/iconGalleryAlternate.svg";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toggleForm } from "../../reducers/menu.reducer";
import React, { useEffect } from "react";
import {
  setPage,
  setScrollPosition,
} from "../../reducers/menu.location.reducer";

function IconGallery() {
  const dispatch = useDispatch();

  const formType = useSelector((state) => state.menu.formType);
  const isAlternative = formType === "alternative";
  const icon = isAlternative ? iconAlternative : iconOriginal;

  const location = useLocation();
  const isGalerie = location.pathname === "/galerie";

  const page = useSelector((state) => state.location.currentPage);
  const previousPage = useSelector((state) => state.location.previousPagePath);
  const positionWindow = useSelector((state) => state.location.scrollPosition);

  useEffect(() => {
    if (location.pathname === "/galerie" && isAlternative) {
      dispatch(toggleForm());
    }
  }, [location.pathname, dispatch, isAlternative]);

  const handleClick = () => {
    const scrollPosition = window.scrollY;
    dispatch(setScrollPosition(scrollPosition));
    dispatch(setPage(page));
  };

  const handleReturnToPreviousPage = () => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, positionWindow);
    }, 10);
    return () => clearTimeout(timeout);
  };

  return isGalerie ? (
    <Link to={previousPage} onClick={handleReturnToPreviousPage}>
      <img src={icon} alt="Icon accès galerie" className="icon-galerie" />
    </Link>
  ) : (
    <Link to="/galerie" onClick={handleClick}>
      <img src={icon} alt="Icon accès galerie" className="icon-galerie" />
    </Link>
  );
}

export default IconGallery;
