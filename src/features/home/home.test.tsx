import { render } from "@testing-library/react";
import { Card } from "../card/component/card";
import { Home } from "./home";
jest.mock("../../feature/card/component/card");

describe("Given the home component", () => {
  describe("When it's rendered", () => {
    test("Then it should contain an h1", () => {
      render(<Home></Home>);
      expect(Card).toHaveBeenCalled();
    });
  });
});
