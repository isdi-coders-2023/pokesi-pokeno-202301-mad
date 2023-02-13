import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";
describe("Given Footer component", () => {
  render(<Footer></Footer>);
  describe("When it's rendered", () => {
    test("Then it should have the footer in the screen", () => {
      const element = screen.getByText(/with/i);
      expect(element).toBeInTheDocument();
    });
  });
});
