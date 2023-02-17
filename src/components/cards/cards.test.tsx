/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { Cards } from "./cards";
jest.mock("../card/card");

describe("Given the Card component", () => {
  beforeEach(() => {
    render(<Cards></Cards>);
  });
  describe("When it's rendered", () => {
    test("Then it should contain cards with heading elements", () => {
      const list = screen.getByRole("list");
      expect(list).toBeInTheDocument();
    });
  });
});
