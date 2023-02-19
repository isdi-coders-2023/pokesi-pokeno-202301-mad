import { PokeStructure } from "../../models/poke";
import { cardsActions } from "./cards.actions";

interface Action {
  type: string;
  payload?: any;
}

export interface CardsAction extends Action {
  payload: PokeStructure | PokeStructure[] | PokeStructure["id"];
}

export const loadCardsCreator = (payload: PokeStructure[]): CardsAction => {
  return {
    type: cardsActions.load,
    payload,
  };
};

export const nextPokesCreator = (payload: PokeStructure[]): CardsAction => {
  return {
    type: cardsActions.load,
    payload,
  };
};
