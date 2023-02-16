import { PokeApiRepo } from "../../../services/repository/poke.api.repo.";
import { PokeStructure } from "../../../models/poke";
import "./cards.scss";
import { useCallback, useEffect, useMemo, useState } from "react";

export function Cards() {
  const repo = useMemo(() => new PokeApiRepo(), []);

  const [some, setSome] = useState<PokeStructure[]>([]);

  const handleLoad = useCallback(async () => {
    const poke = await repo.loadPokemons();
    setSome(poke);
  }, [repo]);

  repo.loadTypes();

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <div className="container">
      <ul className="card__container">
        {some.map((pokemon) => {
          return (
            <>
              <li className="card" key={pokemon.pokedex}>
                <div className="card__info">
                  <img src={pokemon.sprites.front_default} alt="" />
                  <h3 className="name">{pokemon.name.toUpperCase()}</h3>
                </div>
                <div className="card__types">
                  <div className="types-container">
                    {pokemon.types.map((types) => {
                      return (
                        <p className={types.type.name} key={types.type.name}>
                          {types.type.name}
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
