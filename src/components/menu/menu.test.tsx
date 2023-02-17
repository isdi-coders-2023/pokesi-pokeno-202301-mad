import { render, screen } from "@testing-library/react";
import { menuOptions } from "../app/App";
import { Menu } from "./menu";

describe("Given menu component", () => {
  render(<Menu options={menuOptions}></Menu>);
  describe("When its rendered", () => {
    test("Then it should render home as a list element", () => {
      const listElement = screen.getByText(/home/i);
      expect(listElement).toBeInTheDocument();
    });
  });
});
