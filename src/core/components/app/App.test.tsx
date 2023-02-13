import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given App component", () => {
  render(<App />);
  describe("When it's rendered", () => {
    test("shows the word", () => {
      const linkElement = screen.getByText(/with/i);
      expect(linkElement).toBeInTheDocument();
    });
    test("shows in the document the word", () => {
      render(<App />);
      const headerElement = screen.getByText(/pokemon/i);
      expect(headerElement).toBeInTheDocument();
    });
  });
});
