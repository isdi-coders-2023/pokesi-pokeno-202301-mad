import { render, screen } from "@testing-library/react";
import { PokeStructure } from "../../models/poke";
import { Card } from "./card";

const mockyFalse = {
  base_experience: 23,
  height: 12,
  id: 1,
  name: "pepe",
  sprites: { front_default: "" },
  types: [{ type: { name: "fire" } }],
  weight: 90,
  isFavorite: false,
} as PokeStructure;

const mockyTrue = {
  base_experience: 23,
  height: 12,
  id: 1,
  name: "albelto",
  sprites: { front_default: "" },
  types: [{ type: { name: "water" } }],
  weight: 90,
  isFavorite: true,
} as PokeStructure;

describe("Given Card component", () => {
  describe("When it's rendered", () => {
    test("Then it should contain a name with the heading role", () => {
      render(<Card {...mockyTrue}></Card>);
      const name = screen.getByRole("heading");
      expect(name).toBeInTheDocument();
    });
  });
  describe("When it's rendered with the favorite to false", () => {
    test("Then it should render the white heart", () => {
      render(<Card {...mockyFalse}></Card>);
      const heart = screen.getByAltText(/white heart/i);
      expect(heart).toBeInTheDocument();
    });
  });
});
