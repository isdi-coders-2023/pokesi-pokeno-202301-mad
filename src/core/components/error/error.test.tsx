import { render, screen } from "@testing-library/react";
import { Error } from "./error";

describe("Given Error component", () => {
  render(<Error></Error>);
  describe("When its rendered", () => {
    test("Then  it should render", () => {
      const error = screen.getByText(/home/i);
      expect(error).toBeInTheDocument();
    });
  });
});
