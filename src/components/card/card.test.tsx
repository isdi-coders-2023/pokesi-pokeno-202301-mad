import { render, screen } from "@testing-library/react";
import { PokeStructure } from "../../models/poke";
import { Card } from "./card";

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

describe("Given", () => {
  describe("When", () => {
    test("Then", () => {
      render(<Card {...mocky}></Card>);
      const name = screen.getByRole("heading");
      expect(name).toBeInTheDocument();
    });
  });
});
