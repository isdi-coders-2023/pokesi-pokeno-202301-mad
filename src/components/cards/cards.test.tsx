/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { PokeStructure } from "../../models/poke";
import { PokeApiRepo } from "../../services/repository/poke.api.repo";
import { Card } from "../card/card";
import { useCards } from "../hook/use.cards";
import { Cards } from "./cards";

const mocky = {
  base_experience: 23,
  height: 12,
  id: 1,
  name: "pepe",
  sprites: { front_default: "" },
  types: [{ type: { name: "fire" } }],
  weight: 90,
  isFavorite: true,
} as PokeStructure;

beforeEach(() => {
  render(<Cards></Cards>);
});

describe("Given the Card component", () => {
  describe("When it's rendered", () => {
    test("Then it should contain cards with heading elements", () => {
      const list = screen.getByRole("list");
      expect(list).toBeInTheDocument();
    });
  });

  describe("Some", () => {
    test("QLQ", () => {
      expect(Card).toHaveBeenCalled();
    });
  });
});
