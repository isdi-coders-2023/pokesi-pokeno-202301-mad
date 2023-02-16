import {
  InfoStructure,
  LoadPokeStructure,
  PokeStructure,
} from "../../models/poke";
import { PokeApiRepo } from "./poke.api.repo";

global.fetch = jest.fn().mockResolvedValue({});

const mockTypes: InfoStructure = { results: [{ name: "grass" }] };

const mockRegions: InfoStructure = { results: [{ name: "kanto" }] };

let repo: PokeApiRepo;

const mockFetch = {
  count: 2,
  next: "",
  previous: "",
  results: { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
};

describe("Given the PokeApiRepo", () => {
  beforeEach(() => {
    repo = new PokeApiRepo();
  });
  describe("When LoadPokemons is called", () => {
    test("Then the returned value should be an iterated object", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockFetch),
      });
      const load = (await repo.loadPokemons()) as unknown as LoadPokeStructure;
      expect(load).toEqual(Object(load));
    });
  });
  describe("When loadTypes is called", () => {
    test("Then the returned value should be grass", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockTypes),
      });
      const types = await repo.loadTypes();
      expect(types).toEqual(["grass"]);
    });
  });
  describe("When the loadRegions", () => {
    test("Then the returned value should be kanto", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockRegions),
      });
      const regions = await repo.loadRegions();
      expect(regions).toEqual(["kanto"]);
    });
  });
});
