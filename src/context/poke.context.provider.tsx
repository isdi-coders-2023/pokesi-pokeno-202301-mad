import { useMemo } from "react";

import { PokeApiRepo } from "../services/repository/poke.api.repo";
import { PokeContext } from "./poke.context";

export function PokeContextProvider({ children }: { children: JSX.Element }) {
  const pokeRepo = useMemo(() => new PokeApiRepo(), []);
  const context = usepoke(pokeRepo);

  return (
    <PokeContext.Provider value={context}>{children}</PokeContext.Provider>
  );
}
