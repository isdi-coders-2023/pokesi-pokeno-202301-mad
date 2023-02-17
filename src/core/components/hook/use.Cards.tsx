import { useCallback, useState } from "react";
import { PokeStructure } from "../../../models/poke";
import { PokeApiRepo } from "../../../services/repository/poke.api.repo";

export type UsePokeStructure = ReturnType<typeof useCards>;
export function useCards(repo: PokeApiRepo) {
  const initialState: PokeStructure[] = [];

  const [cards, setCards] = useState(initialState);

  console.log("CARDS: ", cards);

  const handlerError = (error: Error) => {
    console.log(error.message);
  };

  const load = useCallback(async () => {
    try {
      const cards = await repo.loadPokemons();
      setCards(cards);
    } catch (error) {
      handlerError(error as Error);
    }
  }, [repo]);

  const updateCard = async (task: PokeStructure) => {
    try {
      const finalCard = await repo.update(card);
      setCards(cards.map((item) => (item.id === card.id ? finalCard : item)));
    } catch (error) {
      handlerError(error as Error);
    }
  };

  return {
    cards,
    load,
    updateCard,
  };
}
