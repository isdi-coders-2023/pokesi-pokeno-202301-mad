/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { menuOptions } from "../app/App";
import { Menu } from "../menu/menu";
import { Header } from "./header";
jest.mock("../menu/menu");

describe("Given header component", () => {
  beforeEach(() => {
    render(
      <Header>
        <Menu options={menuOptions}></Menu>
      </Header>
    );
  });
  describe("When its rendered", () => {
    test("Then  it should render a list", () => {
      const img = screen.getByAltText(/logo de/i);
      expect(img).toBeInTheDocument();
    });
    test("Then it should contain Menu component", () => {
      expect(Menu).toHaveBeenCalled();
    });
  });
});
