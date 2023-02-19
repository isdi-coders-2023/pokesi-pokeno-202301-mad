/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { PrevNext } from "./prev.next";

describe("Given PrevNext component", () => {
  beforeEach(() => {
    render(<PrevNext></PrevNext>);
  });
  describe("When its rendered", () => {
    test("Then  it should render a header", () => {
      const buttons = screen.getAllByRole("heading");
      expect(buttons[0]).toBeInTheDocument();
    });
    test("Then  it should render an image", () => {
      const image = screen.getAllByRole("img");
      expect(image[0]).toBeInTheDocument();
    });
  });
});
