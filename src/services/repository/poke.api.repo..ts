/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

import { PokeStructure, ProtoPokeStructure } from "../../models/poke";

export interface PokeApiRepoStructure {
  loadPokes(): Promise<PokeStructure[]>;
  getPoke(id: PokeStructure["id"]): Promise<PokeStructure>;
  createPoke(poke: ProtoPokeStructure): Promise<PokeStructure>;
  update(poke: Partial<ProtoPokeStructure>): Promise<PokeStructure>;
  delete(id: PokeStructure["id"]): Promise<void>;
}

export class PokeApiRepo {
  url: string;
  constructor() {
    this.url = "https://pokeapi.co/api/v2/pokemon/";
  }

  async loadPokes(): Promise<PokeStructure[]> {
    const resp = await fetch(this.url);
    const data = (await resp.json()) as PokeStructure[];
    return data;
  }

  async getPoke(id: PokeStructure["id"]): Promise<PokeStructure> {
    const url = this.url + "/" + id;
    const resp = await fetch(url);
    const data = (await resp.json()) as PokeStructure;
    return data;
  }

  async createPoke(poke: ProtoPokeStructure): Promise<PokeStructure> {
    const resp = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(poke),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = (await resp.json()) as PokeStructure;
    return data;
  }

  async update(poke: Partial<PokeStructure>): Promise<PokeStructure> {
    const url = this.url + "/" + poke.id;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(poke),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = (await resp.json()) as PokeStructure;
    return data;
  }

  async delete(id: PokeStructure["id"]): Promise<void> {
    const url = this.url + "/" + id;
    const resp = await fetch(url, {
      method: "DELETE",
    });
    if (!resp.ok) throw new Error("Delete not possible");
  }
}
