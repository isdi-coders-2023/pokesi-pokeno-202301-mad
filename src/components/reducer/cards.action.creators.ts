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

export const addCardsCreator = (payload: PokeStructure) => {
  return {
    type: cardsActions.add,
    payload,
  };
};

export const updateCardsCreator = (payload: PokeStructure) => {
  return {
    type: cardsActions.update,
    payload,
  };
};

export const deleteCardsCreator = (payload: PokeStructure["id"]) => {
  return {
    type: cardsActions.delete,
    payload,
  };
};
