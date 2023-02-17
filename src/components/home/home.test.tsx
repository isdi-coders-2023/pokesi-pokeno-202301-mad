import { render } from "@testing-library/react";
import { Cards } from "../cards/cards";
import Home from "./home";

jest.mock("../cards/cards");

describe("Given the home component", () => {
  describe("When it's rendered", () => {
    test("Then it should contain Home component", () => {
      render(<Home></Home>);
      expect(Cards).toHaveBeenCalled();
    });
  });
});
