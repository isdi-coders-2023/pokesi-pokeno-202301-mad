import { screen, render } from "@testing-library/react";
import { useContext } from "react";
import { PokeContext } from "./poke.context";
import { PokeContextProvider } from "./poke.context.provider";

function TestComponent() {
  const context = useContext(PokeContext);

  if (context) {
    return <p>Test passed</p>;
  } else {
    return <p>Test failed</p>;
  }
}

describe("CharsContextProvider", () => {
  test("should provide the correct context value to its children", () => {
    render(
      <PokeContextProvider>
        <TestComponent />
      </PokeContextProvider>
    );

    const element = screen.getByText(/passed/i);
    expect(element).toBeInTheDocument();
  });
});
