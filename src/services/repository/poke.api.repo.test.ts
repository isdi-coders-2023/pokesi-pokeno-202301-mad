import { LoadPokeStructure, PokeStructure } from "../../models/poke";
import { PokeApiRepo } from "./poke.api.repo";

global.fetch = jest.fn().mockResolvedValue({});

const mockResults = [
  { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
];
let repo: PokeApiRepo;

const mock = {
  count: 2,
  next: "",
  previous: "",
  results: mockResults,
};

describe("Given the PokeApiRepo", () => {
  beforeEach(() => {
    repo = new PokeApiRepo();
  });
  describe("When LoadPokemons is called", () => {
    test("Then some", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mock),
      });
      const result =
        (await repo.loadPokemons()) as unknown as LoadPokeStructure;
      expect(result).toEqual(Object(result));
    });
  });
  describe("When loadTypes is called", () => {
    test("Then some 2", () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mock),
      });
    });
  });
});
