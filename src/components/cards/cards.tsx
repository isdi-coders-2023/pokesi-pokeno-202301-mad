import "./cards.scss";
import { Card } from "../card/card";
import { PokeApiRepo } from "../../services/repository/poke.api.repo";
import { useCards } from "../hook/use.cards";

export function Cards() {
  const { some, loadPokemons } = useCards(new PokeApiRepo());
  loadPokemons();

  console.log(some);
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
