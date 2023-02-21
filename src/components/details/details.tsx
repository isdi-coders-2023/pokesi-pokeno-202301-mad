import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PokeContext } from "../../context/poke.context";
import "./details.scss";

export function Details() {
  const { id } = useParams();
  const { pokes } = useContext(PokeContext);

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
        {pokeInfo?.types.map((type) => (
          <h3 className="type" key={type.type.name}>
            {type.type.name}
          </h3>
        ))}
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
