import { createContext } from "react";
import { PokeStructure } from "../models/poke";

export type ContextType = {
  pokes: PokeStructure[];
  loadPokemons: () => Promise<void>;
};

export const PokeContext = createContext({} as ContextType);
