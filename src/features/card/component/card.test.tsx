import { screen, render } from "@testing-library/react";
import { Card } from "./card";

describe("Given the Card component", () => {
  render(<Card></Card>);
  describe("When it's rendered", () => {
    test("Then it should contain cards with heading elements", () => {
      const names = screen.getAllByRole("heading");
      const namesLength = names.length;
      expect(names.length).toBe(namesLength);
      expect(names[0]).toBeInTheDocument();
    });
  });
});
