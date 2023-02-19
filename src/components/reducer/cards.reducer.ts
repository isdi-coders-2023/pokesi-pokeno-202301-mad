import { PokeStructure } from "../../models/poke";
import { CardsAction } from "./cards.action.creators";
import { cardsActions } from "./cards.actions";

export function cardsReducer(
  state: PokeStructure[],
  action: CardsAction
): PokeStructure[] {
  switch (action.type) {
    case cardsActions.load:
      return action.payload as PokeStructure[];
    // case cardsActions.add:
    //   return [...state, action.payload as PokeStructure];
    // case cardsActions.update:
    //   const payload = action.payload as PokeStructure;
    //   return state.map((item) => (item.id === payload.id ? payload : item));
    // case cardsActions.delete:
    //   const id = action.payload as PokeStructure["id"];
    //   return state.filter((item) => item.id !== id);
    default:
      return state;
  }
}
