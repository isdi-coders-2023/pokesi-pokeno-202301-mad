import { MenuOption } from "../app/App";
import { AppRouter } from "./app.router";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

const mockOptions: MenuOption[] = [
  { label: "Home", path: "/home" },
  { label: "Favorites", path: "/favorites" },
  { label: "Create a trainer", path: "/create-trainer" },
  { label: "Your trainer", path: "/your-trainer" },
];

describe("Given the App router component", () => {
  describe("When you render the different paths", () => {
    test("Then it should render", async () => {
      render(
        <Router
          initialEntries={[
            "/",
            "/home",
            "/favorites",
            "/create-trainer",
            "/your-trainer",
          ]}
          initialIndex={0}
        >
          <AppRouter menuOptions={mockOptions}></AppRouter>
        </Router>
      );
      const list = await screen.findByRole("list");
      expect(list).toBeInTheDocument();
    });
  });
});
