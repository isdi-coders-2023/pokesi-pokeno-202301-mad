/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import { PokeStructure } from "../../models/poke";

export class PokeApiRepo {
  url: string;
  constructor() {
    this.url = "https://pokeapi.co/api/v2/pokemon/";
  }

  async loadPokemons(): Promise<PokeStructure[]> {
    const resp = await fetch(this.url);
    const data = await resp.json();
    const pokemonArray = Object.values(data.results);
    const promise = pokemonArray.map(async (pokemon: any) => {
      const response = await fetch(pokemon.url);
      return response.json();
    });
    const pokeData = await Promise.all(promise);
    console.log(pokeData);
    return pokeData;
  }
}
