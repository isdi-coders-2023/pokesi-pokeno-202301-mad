import { render, screen } from "@testing-library/react";
import { Home } from "./home";

describe("Given the home component", () => {
  render(<Home></Home>);
  describe("When it's rendered", () => {
    test("Then it should contain an h1", () => {
      const header = screen.getByRole("heading");
      expect(header).toBeInTheDocument();
    });
  });
});
