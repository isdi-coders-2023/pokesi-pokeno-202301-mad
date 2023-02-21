/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MemoryRouter as Router } from "react-router-dom";
import { Cards } from "./cards";

describe("Given the Card component", () => {
  describe("When it's rendered", () => {
    test("Then it should contain cards with heading elements", () => {
      render(<Cards></Cards>);
      const list = screen.getByRole("list");
      expect(list).toBeInTheDocument();
    });
    describe("SOME", () => {
      test("QLQ", async () => {
        act(() => {
          render(
            <Router>
              <Cards></Cards>
            </Router>
          );
        });
        const name = await screen.findByRole(
          "heading",
          { name: "CHARMANDER" },
          { timeout: 2000 }
        );
        expect(name).toBeInTheDocument();
      });
    });
  });
});
