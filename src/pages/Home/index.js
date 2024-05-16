import Lines from "../../assets/Lines.svg";

function Home() {
  return (
    <div className="home-content">
      <div>
        <h2 className="dev">Développeur</h2>
        <h2 className="web">Web</h2>
        <h2 className="design">Designer</h2>
        <h1 className="name">Baptiste GIROUD</h1>
      </div>
      <img src={Lines} alt="Lignes de fond" className="background-lines" />
    </div>
  );
}

export default Home;
