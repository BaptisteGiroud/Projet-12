import iconOriginal from "../../assets/iconGallery.svg";
import iconAlternative from "../../assets/iconGalleryAlternate.svg";
import { useSelector } from "react-redux";

function IconGallery() {
  const formType = useSelector((state) => state.menu.formType);
  const isAlternative = formType === "alternative";
  const icon = isAlternative ? iconAlternative : iconOriginal;

  return <img src={icon} alt="Icon accès gallerie" className="icon-gallerie" />;
}

export default IconGallery;
