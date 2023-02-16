/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import Home from "../home/home";
import App from "./App";
import { MemoryRouter as Router } from "react-router-dom";
jest.mock("../home/home");

describe("Given App component", () => {
  beforeEach(() => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
  describe("When it's rendered", () => {
    test("shows the word", () => {
      const linkElement = screen.getByText(/with/i);
      expect(linkElement).toBeInTheDocument();
    });
    test("its called", () => {
      expect(Home).toHaveBeenCalled();
    });
  });
});
