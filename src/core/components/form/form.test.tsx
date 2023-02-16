import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { isButtonElement } from "react-router-dom/dist/dom";
import { Form } from "./form";

describe("Given the form component", () => {
  describe("When it's instantiated", () => {
    render(<Form />);
    test("Then it should render", () => {
      const send = screen.getByRole("button", { name: "Send" });
      expect(send).toBeInTheDocument();
    });
    test("Then in the user click button", () => {
      userEvent.click();
      expect(isButtonElement).toHaveBeenCalled();
    });
  });
});
