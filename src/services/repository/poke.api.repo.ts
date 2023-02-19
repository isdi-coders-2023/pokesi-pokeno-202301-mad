import { InfoStructure, LoadPokeStructure } from "../../models/poke";

export type PokeApiType = {
  name: string;
  url: string;
}[];

export class PokeApiRepo {
  url: string;
  typesUrl: string;
  regionsUrl: string;
  constructor() {
    this.url = "https://pokeapi.co/api/v2/pokemon/";
    this.typesUrl = "https://pokeapi.co/api/v2/type/";
    this.regionsUrl = "https://pokeapi.co/api/v2/region/";
  }

  async loadPokes() {
    const res = await fetch(this.url);
    const data = (await res.json()) as LoadPokeStructure;
    const pokeArr = Object.values(data.results);
    const some = await this.sortPokemons(pokeArr);
    return await Promise.all(some);
  }

  async sortPokemons(arr: PokeApiType) {
    const sorted = arr.map((item) => item.url);
    const fetchUrl = sorted.map(async (link) => {
      const response = await fetch(link);
      const resData = await response.json();
      return resData;
    });
    return fetchUrl;
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
