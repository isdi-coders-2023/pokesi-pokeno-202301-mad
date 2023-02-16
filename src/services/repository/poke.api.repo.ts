/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import { PokeStructure, InfoStructure } from "../../models/poke";

export class PokeApiRepo {
  url: string;
  typesUrl: string;
  regionsUrl: string;
  constructor() {
    this.url = "https://pokeapi.co/api/v2/pokemon/";
    this.typesUrl = "https://pokeapi.co/api/v2/type/";
    this.regionsUrl = "https://pokeapi.co/api/v2/region/";
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

  async loadTypes(): Promise<string[]> {
    const resp = await fetch(this.typesUrl);
    const data = (await resp.json()) as InfoStructure;
    const types = data.results.map((item) => item.name);
    return types.slice(0, 18);
  }

  async loadRegions(): Promise<string[]> {
    const resp = await fetch(this.regionsUrl);
    const data = (await resp.json()) as InfoStructure;
    const regions = data.results.map((item) => item.name);
    return regions;
  }
}
