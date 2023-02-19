import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { PokeApiRepo } from "../../services/repository/poke.api.repo";
import { useCards } from "./use.cards";
let mockRepo: PokeApiRepo;

function TestComponent() {
  const { loadPokemons } = useCards(mockRepo);

  return (
    <div>
      <button onClick={() => loadPokemons()}>load</button>
    </div>
  );
}

describe("SOme", () => {
  beforeEach(async () => {
    mockRepo = {
      loadPokes: jest.fn(),
    } as unknown as PokeApiRepo;

    await act(() => render(<TestComponent></TestComponent>));
  });

  describe("When", () => {
    test("Then", () => {
      const btn = screen.getByRole("button");
      expect(btn).toBeInTheDocument();
    });
  });
  describe("When2", () => {
    test("Then2", () => {
      const btn = screen.getByRole("button");
      userEvent.click(btn);
      expect(mockRepo.loadPokes).toBeCalled();
    });
  });
});
