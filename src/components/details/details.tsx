import { useParams } from "react-router-dom";
import { PokeApiRepo } from "../../services/repository/poke.api.repo";
import { useCards } from "../hook/use.cards";
import "./details.scss";

export function Details() {
  const { id } = useParams();
  const { pokes } = useCards(new PokeApiRepo());

  const pokeInfo = pokes.find((item) => item.id === Number(id));

  return (
    <div className="detail-container">
      <div className="detail-info">
        <h1>{pokeInfo?.name}</h1>
        <h2>{pokeInfo?.id}</h2>
      </div>
      <img
        src={pokeInfo?.sprites.front_default}
        alt={`${pokeInfo?.name} sprite`}
      ></img>
      <div className="types-container">
        {pokeInfo?.types.map((type) => type.type.name)}
      </div>
      <div className="hewe-container">
        <h3>{pokeInfo?.height}</h3>
        <h3>{pokeInfo?.weight}</h3>
      </div>
      <div className="detail-buttons">
        <button>fight</button>
        <button>
          <img src="../../../assets/card/heart.png" alt="" />
        </button>
      </div>
    </div>
  );
}
