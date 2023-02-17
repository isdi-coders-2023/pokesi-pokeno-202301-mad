/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Error } from "./error";

describe("Given Error component", () => {
  test("Then it should contain headers", () => {
    render(
      <Router>
        <Error></Error>
      </Router>
    );
    const headers = screen.getAllByRole("heading");
    expect(headers[0]).toBeInTheDocument();
  });
});
