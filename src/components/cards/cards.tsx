import "./cards.scss";
import { Card } from "../card/card";
import { PokeApiRepo } from "../../services/repository/poke.api.repo";
import { useCards } from "../hook/use.cards";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Cards() {
  const { pokes, loadPokemons } = useCards(new PokeApiRepo());

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <div className="container">
      <ul className="card__container">
        {pokes.map((pokemon) => (
          <Link to={`/details/${pokemon.id}`} key={pokemon.id}>
            <Card {...pokemon}></Card>
          </Link>
        ))}
      </ul>
    </div>
  );
}
