import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
describe("Given App component", () => {
  render(<App />);
  describe("When it's rendered", () => {
    test("renders learn react link", () => {
      const linkElement = screen.getByText(/with/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
