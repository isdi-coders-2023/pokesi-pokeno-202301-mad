/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { Details } from "./details";
import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { PokeContextProvider } from "../../context/poke.context.provider";

describe("Given the Details function", () => {
  beforeEach(() => {
    render(
      <PokeContextProvider>
        <Router initialEntries={["/details/7"]} initialIndex={0}>
          <Routes>
            <Route path="/details/:id" element={<Details></Details>}></Route>
          </Routes>
        </Router>
      </PokeContextProvider>
    );
  });
  describe("When we render the pokemon name", () => {
    test("Then it should be in the document", () => {
      const element = screen.getByText(/#/i);
      expect(element).toBeInTheDocument();
    });
  });

  describe("When we map the types", () => {
    test("Then it should be in the document", async () => {
      const type = await screen.findByText(/water/i, {}, { timeout: 2000 });
      expect(type).toBeInTheDocument();
    });
  });
});
