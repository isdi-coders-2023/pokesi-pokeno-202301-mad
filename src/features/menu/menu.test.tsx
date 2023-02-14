import { render, screen } from "@testing-library/react";
import { Menu } from "./menu";

describe("Given menu component", () => {
  render(<Menu></Menu>);
  describe("When its rendered", () => {
    test("Then  it should render a menu", () => {
      const list = screen.getByText(/home/i);
      expect(list).toBeInTheDocument();
    });
  });
});
