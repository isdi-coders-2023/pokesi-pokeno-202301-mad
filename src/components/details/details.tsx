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
        <h1>{pokeInfo?.name.toUpperCase()}</h1>
        <h2># {pokeInfo?.id}</h2>
      </div>
      <div className="detail-img">
        <img
          src={pokeInfo?.sprites.front_default}
          alt={`${pokeInfo?.name} sprite`}
        ></img>
      </div>
      <div className="types-container">
        <div className="type">
          {pokeInfo?.types.map((type) => type.type.name)}
        </div>
      </div>
      <div className="hewe-container">
        <h3>HEIGHT: {pokeInfo?.height}</h3>
        <h3>WEIGHT: {pokeInfo?.weight}</h3>
      </div>
      <div className="detail-buttons">
        <button className="fight">fight</button>
        <button>
          <img
            className="like-white"
            src="../../../assets/card/heart.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
