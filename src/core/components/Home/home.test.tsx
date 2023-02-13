/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import { Home } from "./home";

test("renders learn react link", () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Bienvenido a la página de inicio/i);
  expect(linkElement).toBeInTheDocument();
});
