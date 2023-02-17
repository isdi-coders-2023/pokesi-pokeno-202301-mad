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

export type PokeStructure = {
  base_experience: number;
  height: number;
  id: number;
  name: string;
  sprites: { front_default: string };
  types: [{ type: { name: string } }];
  weight: number;
  isFavorite: boolean;
};

export type TypesStructure = {
  type: { name: string };
};

export type InfoStructure = {
  results: [{ name: string }];
};
