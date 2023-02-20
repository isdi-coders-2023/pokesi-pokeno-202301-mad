/* eslint-disable testing-library/no-unnecessary-act */
import { Details } from "./details";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { PokeContextProvider } from "../../context/poke.context.provider";
import { ContextType } from "../../context/poke.context";

const context = {
  pokes: [
    {
      base_experience: 2,
      height: 1,
      id: 1,
      name: "string",
      sprites: { front_default: "string" },
      types: [{ type: { name: "water" } }],
      weight: 1,
      isFavorite: true,
    },
  ],
  loadPokemons: () => Promise<void>,
};

describe("Given the Details function", () => {
  render(
    <PokeContextProvider>
      <Details></Details>
    </PokeContextProvider>
  );
  describe("When we render the pokemon name", () => {
    test("Then it should be in the document", () => {
      const element = screen.getByText(/#/i);
      expect(element).toBeInTheDocument();
    });
  });

  describe("When we map the types", () => {
    test("Then it should be in the document", async () => {
      act(() => {
        render(
          <PokeContextProvider>
            <Details></Details>
          </PokeContextProvider>
        );
      });
      const type = await screen.findByText(/water/i, {}, { timeout: 2000 });
      expect(type).toBeInTheDocument();
    });
  });
});
