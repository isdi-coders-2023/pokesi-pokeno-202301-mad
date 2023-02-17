/* eslint-disable testing-library/no-unnecessary-act */
import { screen, render } from "@testing-library/react";
import { Cards } from "./cards";

describe("Given the Card component", () => {
  describe("When it's rendered", () => {
    test("Then it should contain cards with heading elements", async () => {
      let names: HTMLElement[];
      render(<Cards></Cards>);
      names = await screen.findAllByRole("heading");
      const namesLength = names.length;
      expect(names.length).toBe(namesLength);
      expect(names[0]).toBeInTheDocument();
    });
  });
});
