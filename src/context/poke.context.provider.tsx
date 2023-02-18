import { useMemo } from "react";
import { useCards } from "../components/hook/use.cards";
import { PokeApiRepo } from "../services/repository/poke.api.repo";
import { PokeContext } from "./poke.context";

export function PokeContextProvider({ children }: { children: JSX.Element }) {
  const pokeRepo = useMemo(() => new PokeApiRepo(), []);
  const context = useCards(pokeRepo);

  return (
    <PokeContext.Provider value={context}>{children}</PokeContext.Provider>
  );
}
