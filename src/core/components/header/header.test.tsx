import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Given header component", () => {
  render(<Header></Header>);
  describe("When its rendered", () => {
    test("Then  it should render a list", () => {
      const list = screen.getByText(/home/i);
      expect(list).toBeInTheDocument();
    });
  });
});
