import "./cards.scss";
import { Card } from "../card/card";
import { PokeApiRepo } from "../../services/repository/poke.api.repo";
import { useCards } from "../hook/use.cards";
import { useEffect } from "react";

export function Cards() {
  const { some, loadPokemons } = useCards(new PokeApiRepo());

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  return (
    <div className="container">
      <ul className="card__container">
        {some.map((pokemon) => (
          <Card {...pokemon} key={pokemon.id}></Card>
        ))}
      </ul>
    </div>
  );
}
