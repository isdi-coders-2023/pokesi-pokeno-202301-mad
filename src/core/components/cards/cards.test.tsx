import { screen, render } from "@testing-library/react";
import { Cards } from "./cards";

describe("Given the Card component", () => {
  render(<Cards></Cards>);
  describe("When it's rendered", () => {
    test("Then it should contain cards with heading elements", () => {
      const names = screen.getAllByRole("heading");
      const namesLength = 2;
      expect(names.length).toBe(namesLength);
      expect(names[0]).toBeInTheDocument();
    });
  });
});
