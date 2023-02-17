import { useCallback, useReducer } from "react";
import { PokeStructure } from "../../models/poke";
import { PokeApiRepo } from "../../services/repository/poke.api.repo";
import { cardsReducer } from "../reducer/cards.reducer";
import * as ac from "../reducer/cards.action.creators";

export type UsePokeStructure = ReturnType<typeof useCards>;
export function useCards(repo: PokeApiRepo) {
  const initialState: PokeStructure[] = [];

  // repo = useMemo(() => new PokeApiRepo(), []);

  const [some, dispatch] = useReducer(cardsReducer, initialState);

  const handlerError = (error: Error) => {
    console.log(error.message);
  };

  const loadPokemons = useCallback(async () => {
    try {
      const cards = await repo.loadPokemons();
      dispatch(ac.loadCardsCreator(cards));
    } catch (error) {
      handlerError(error as Error);
    }
  }, [repo]);

  // useEffect(() => {
  //   handleLoad();
  // }, [handleLoad]);

  // const loadCards = useCallback(async () => {
  //   try {
  //     const cards = await repo.loadPokemons();
  //     setCards(cards);
  //   } catch (error) {
  //     handlerError(error as Error);
  //   }
  // }, [repo]);

  // const updateCard = async (task: PokeStructure) => {
  //   try {
  //     const finalCard = await repo.update(card);
  //     setCards(cards.map((item) => (item.id === card.id ? finalCard : item)));
  //   } catch (error) {
  //     handlerError(error as Error);
  //   }
  // };

  return {
    some,
    loadPokemons,
  };
}
