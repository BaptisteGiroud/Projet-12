import iconOriginal from "../../assets/iconGallery.svg";
import iconAlternative from "../../assets/iconGalleryAlternate.svg";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toggleForm } from "../../reducers/menu.reducer";
import React, { useEffect } from "react";

function IconGallery() {
  const dispatch = useDispatch();

  const formType = useSelector((state) => state.menu.formType);
  const isAlternative = formType === "alternative";
  const icon = isAlternative ? iconAlternative : iconOriginal;

  const location = useLocation();
  const isGalerie = location.pathname === "/galerie";

  useEffect(() => {
    if (location.pathname === "/galerie" && isAlternative) {
      dispatch(toggleForm());
    }
  }, [location.pathname, dispatch, isAlternative]);

  return isGalerie ? (
    <Link to="/">
      <img src={icon} alt="Icon accès galerie" className="icon-galerie" />
    </Link>
  ) : (
    <Link to="/galerie">
      <img src={icon} alt="Icon accès galerie" className="icon-galerie" />
    </Link>
  );
}

export default IconGallery;
