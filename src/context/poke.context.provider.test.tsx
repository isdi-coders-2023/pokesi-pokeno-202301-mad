import { render, screen } from "@testing-library/react";
import { useContext } from "react";

import { PokeContext } from "./poke.context";
import { PokeContextProvider } from "./poke.context.provider";

function TestComponent() {
  const { some } = useContext(PokeContext);

  if (some[0] === undefined) {
    return <p>Test Ok</p>;
  }
  return <p>Test failed</p>;
}

describe("Given the app context provider", () => {
  test("Then it should context", () => {
    render(
      <PokeContextProvider>
        <TestComponent />
      </PokeContextProvider>
    );

    const element = screen.getByText(/Test ok/i);
    expect(element).toBeInTheDocument();
  });
});
