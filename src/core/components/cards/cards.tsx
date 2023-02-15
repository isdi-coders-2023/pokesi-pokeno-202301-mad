import { POKEMOCK } from "../../mocks/card-data";
import "./cards.scss";

export function Cards() {
  return (
    <div>
      <ul className="card__container">
        {POKEMOCK.map((pokemon) => {
          return (
            <>
              <li className="card" key={pokemon.id}>
                <div className="card__info">
                  <img src={pokemon.sprite} alt="" />
                  <h3 className="name">{pokemon.name.toUpperCase()}</h3>
                </div>
                <div className="card__types">
                  <div className="types-container">
                    {pokemon.types.map((types) => {
                      return (
                        <p className={types} key={types}>
                          {types}
                        </p>
                      );
                    })}
                  </div>
                  {pokemon.isFavorite ? (
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
            </>
          );
        })}
      </ul>
    </div>
  );
}
