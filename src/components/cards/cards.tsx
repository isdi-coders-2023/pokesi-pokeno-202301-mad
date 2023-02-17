import { PokeStructure } from "../../models/poke";
import "./cards.scss";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PokeApiRepo } from "../../services/repository/poke.api.repo";
import { Card } from "../card/card";

export function Cards() {
  const repo = useMemo(() => new PokeApiRepo(), []);

  const [some, setSome] = useState<PokeStructure[]>([]);

  const handleLoad = useCallback(async () => {
    const poke = await repo.loadPokemons();
    setSome(poke);
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <div className="container">
      <ul className="card__container">
        {some.map((pokemon) => {
          return <Card {...pokemon} key={pokemon.id}></Card>;
        })}
      </ul>
    </div>
  );
}
