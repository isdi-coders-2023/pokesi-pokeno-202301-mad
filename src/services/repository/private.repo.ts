export const some = 2;
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
