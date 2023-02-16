/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import { PokeStructure, TypeStructure } from "../../models/poke";

export class PokeApiRepo {
  url: string;
  typesUrl: string;
  constructor() {
    this.url = "https://pokeapi.co/api/v2/pokemon/";
    this.typesUrl = "https://pokeapi.co/api/v2/type/";
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
    return pokeData;
  }

  async loadTypes(): Promise<TypeStructure> {
    const resp = await fetch(this.typesUrl);
    const data = (await resp.json()) as TypeStructure;
    const some = data.results.map((item) => item.name);
    console.log(some);
    return data;
  }
}
