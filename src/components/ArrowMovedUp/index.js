import ArrowUP from "../../assets/MovedUP.svg";
import { useSelector } from "react-redux";

function ArrowMovedUp() {
  const formType = useSelector((state) => state.menu.formType);

  function handleMovedUP() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return formType === "alternative" ? (
    <img
      src={ArrowUP}
      alt="Flèche pour remonter en haut de la page"
      className="arrow-moved-up"
      onClick={handleMovedUP}
    />
  ) : (
    ""
  );
}

export default ArrowMovedUp;
