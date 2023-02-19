import { PokeStructure } from "../../models/poke";
import { loadCardsCreator } from "./cards.action.creators";
import { cardsReducer } from "./cards.reducer";

const pokemons: PokeStructure[] = [
  {
    base_experience: 20,
    height: 8,
    id: 1,
    name: "Bulbasaur",
    sprites: {
      front_default: "",
    },
    types: [
      {
        type: {
          name: "grass",
        },
      },
    ],
    weight: 23,
    isFavorite: false,
  },
  {
    base_experience: 202,
    height: 8,
    id: 1,
    name: "Charmander",
    sprites: {
      front_default: "",
    },
    types: [
      {
        type: {
          name: "fire",
        },
      },
    ],
    weight: 21,
    isFavorite: true,
  },
];

describe("Given the cardsReducer function", () => {
  describe("When we load an array of pokemons", () => {
    test("Then it should load this array", () => {
      let result = cardsReducer([], loadCardsCreator(pokemons));
      expect(result).toEqual(pokemons);
    });
  });
});

describe("Given the charreducer", () => {
  const mockDefault: PokeStructure[] = [
    {
      base_experience: 202,
      height: 8,
      id: 1,
      name: "Charmander",
      sprites: {
        front_default: "",
      },
      types: [
        {
          type: {
            name: "fire",
          },
        },
      ],
      weight: 21,
      isFavorite: true,
    },
  ];
  const defaultAction = {
    type: "",
    payload: [],
  };
  test("When the reducer receives default action, then the new state shouldn't change", () => {
    const defaultState = cardsReducer(mockDefault, defaultAction);
    expect(defaultState).toEqual(mockDefault);
  });
});
