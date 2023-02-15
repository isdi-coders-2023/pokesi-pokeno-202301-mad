import { render, screen } from "@testing-library/react";
import { Home } from "../../../features/home/home";
import App from "./App";
jest.mock("../../../features/home/home");

describe("Given App component", () => {
  render(<App />);
  describe("When it's rendered", () => {
    test("shows the word", () => {
      const linkElement = screen.getByText(/with/i);
      expect(linkElement).toBeInTheDocument();
    });
    test("shows in the document the word", () => {
      render(<App />);
      expect(Home).toHaveBeenCalled();
    });
  });
});
