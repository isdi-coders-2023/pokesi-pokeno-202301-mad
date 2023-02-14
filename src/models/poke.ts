/* eslint-disable no-unused-vars */
type HasId = {
  id: string;
};

export type ProtoPokeStructure = {
  name: string;
  url: string;
};

export type PokeStructure = HasId & ProtoPokeStructure;

export class ProtoPoke implements ProtoPokeStructure {
  constructor(public name: string, public url: string) {}
}
