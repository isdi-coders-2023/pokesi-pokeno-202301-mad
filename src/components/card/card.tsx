import { PokeStructure } from "../../models/poke";
import { Type } from "../type/type";

export function Card(props: PokeStructure) {
  return (
    <li className="card">
      <div className="card__info">
        <img src={props.sprites.front_default} alt="" />
        <h3 className="name">{props.name.toUpperCase()}</h3>
      </div>
      <div className="card__types">
        <div className="types-container">
          {props.types.map((types) => {
            return Type(types);
          })}
        </div>
        {props.isFavorite ? (
          <img
            className="like-red"
            src="../../../../assets/card/heartred.webp"
            alt="red heart button"
          />
        ) : (
          <img
            className="like-white"
            src="../../../../assets/card/heart.png"
            alt="white heart button"
          ></img>
        )}
      </div>
    </li>
  );
}
