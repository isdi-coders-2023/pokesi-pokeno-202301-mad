/* eslint-disable no-unused-vars */

export type LoadPokeStructure = {
  count: number;
  next: string;
  previous: null | string;
  results: [
    {
      name: string;
      url: string;
    }
  ];
};

type hasFavorite = {
  isFavorite: boolean;
};

export type PokeStructure = {
  base_experience: number;
  height: number;
  pokedex: number;
  name: string;
  sprites: { front_default: string };
  types: [{ num: { type: { name: string } } }];
  weight: number;
};
