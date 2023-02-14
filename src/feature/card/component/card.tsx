import { POKEMOCK } from "../mocks/card-data";
import "./card.scss";

export function Card() {
  return (
    <div>
      <ul className="card__container">
        {POKEMOCK.map((pokemon) => {
          return (
            <>
              <li className="card">
                <div className="card__info">
                  <img src={pokemon.sprite} alt="" />
                  <h3 className="name">{pokemon.name}</h3>
                </div>
                <div className="card__types">
                  <div>
                    {pokemon.types.map((types) => {
                      return <p>{types}</p>;
                    })}
                  </div>
                  {pokemon.isFavorite ? (
                    <img
                      className="like-red"
                      src="../../../../assets/card/heartred.webp"
                      alt="holis"
                    />
                  ) : (
                    <img
                      className="like-white"
                      src="../../../../assets/card/heart.png"
                      alt="pepe"
                    ></img>
                  )}
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
