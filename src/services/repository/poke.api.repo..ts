/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

export class PokeApiRepo {
  url: string;
  constructor() {
    this.url = "https://pokeapi.co/api/v2/pokemon/";
  }

  async loadPokes() {
    const resp = await fetch(this.url);
    const data = await resp.json();
    return data;
  }

  // async getPoke(id: PokeStructure["id"]): Promise<PokeStructure> {
  //   const url = this.url + "/" + id;
  //   const resp = await fetch(url);
  //   const data = (await resp.json()) as PokeStructure;
  //   return data;
  // }

  // async createPoke(poke: ProtoPokeStructure): Promise<PokeStructure> {
  //   const resp = await fetch(this.url, {
  //     method: "POST",
  //     body: JSON.stringify(poke),
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   });
  //   const data = (await resp.json()) as PokeStructure;
  //   return data;
  // }

  // async update(poke: Partial<PokeStructure>): Promise<PokeStructure> {
  //   const url = this.url + "/" + poke.id;
  //   const resp = await fetch(url, {
  //     method: "PATCH",
  //     body: JSON.stringify(poke),
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   });
  //   const data = (await resp.json()) as PokeStructure;
  //   return data;
  // }

  // async delete(id: PokeStructure["id"]): Promise<void> {
  //   const url = this.url + "/" + id;
  //   const resp = await fetch(url, {
  //     method: "DELETE",
  //   });
  //   if (!resp.ok) throw new Error("Delete not possible");
  // }
}
