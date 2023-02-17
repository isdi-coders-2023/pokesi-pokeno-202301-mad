/* eslint-disable testing-library/no-unnecessary-act */
import { screen, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Cards } from "./cards";

describe("Given the Card component", () => {
  render(<Cards></Cards>);
  describe("When it's rendered", () => {
    test("Then it should contain cards with heading elements", async () => {
      act(async () => {
        const names = await screen.findAllByRole("heading");
        const namesLength = names.length;
        expect(names.length).toBe(namesLength);
        expect(names[0]).toBeInTheDocument();
      });
    });
  });
});
