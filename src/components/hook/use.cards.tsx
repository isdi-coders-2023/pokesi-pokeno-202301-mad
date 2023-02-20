import { useCallback, useEffect, useReducer } from "react";
import { PokeStructure } from "../../models/poke";
import { PokeApiRepo } from "../../services/repository/poke.api.repo";
import { cardsReducer } from "../reducer/cards.reducer";
import * as ac from "../reducer/cards.action.creators";

export function useCards(repo: PokeApiRepo) {
  const initialState: PokeStructure[] = [];
  const [pokes, dispatch] = useReducer(cardsReducer, initialState);

  const handleError = (error: Error) => {
    console.log(error.message);
  };

  const loadPokemons = useCallback(async () => {
    try {
      const cards = await repo.loadPokes();
      dispatch(ac.loadCardsCreator(cards));
    } catch (error) {
      handleError(error as Error);
    }
  }, [repo]);

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    pokes,
    loadPokemons,
  };
}
