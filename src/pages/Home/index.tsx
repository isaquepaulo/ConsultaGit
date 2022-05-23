import "./styles.css";
import ButtonIcon from "../../components/Button";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container Home-container mt-5 ">
      <h1>Desafio Github API</h1>

      <p>Bootcamp Spring React - DevSuperior</p>

      <div className="my-4">
        <Link to="/gitsearch">
          <ButtonIcon text="Começar" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
