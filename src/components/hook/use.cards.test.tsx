/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PokeContextProvider } from "../../context/poke.context.provider";
import { PokeApiRepo } from "../../services/repository/poke.api.repo";
import { useCards } from "./use.cards";

const mockRepo = {
  loadPokes: jest.fn().mockReturnValue(Promise.resolve([{ name: "pikachu" }])),
  sortPokemons: jest.fn(),
} as unknown as PokeApiRepo;

describe("Given the TestComponent", () => {
  beforeEach(() => {
    function TestComponent() {
      const { loadPokemons } = useCards(mockRepo);

      return (
        <div>
          <button onClick={() => loadPokemons()}>load</button>
        </div>
      );
    }
    render(
      <PokeContextProvider>
        <TestComponent></TestComponent>
      </PokeContextProvider>
    );
  });

  describe("When it renders", () => {
    test("Then load button should render", () => {
      const btn = screen.getByRole("button");
      expect(btn).toBeInTheDocument();
    });
  });
  describe("When the user clicks it", () => {
    test("Then loadPokes should be called", async () => {
      await act(() => {
        fireEvent.click(screen.getByText(/load/i));
      });
      await waitFor(() => {
        expect(mockRepo.loadPokes).toHaveBeenCalled();
      });
    });
  });
});

describe("Given the useCards Custom Hook and TestError component", () => {
  let spyLog: jest.SpyInstance;
  beforeEach(async () => {
    spyLog = jest.spyOn(global.console, "log");

    const mockRepoError = {
      loadChar: jest.fn().mockRejectedValue(new Error("Test Error")),
    } as unknown as PokeApiRepo;

    const TestError = function () {
      const { loadPokemons } = useCards(mockRepoError);
      return (
        <>
          <button title="button1" onClick={() => loadPokemons()}>
            Error
          </button>
        </>
      );
    };
    render(<TestError></TestError>);
  });
  describe("When the TestError is rendered and the button is clicked", () => {
    test("Then, the loadPokes function should catch the error", async () => {
      const element = await screen.findByTitle("button1");
      await act(async () => userEvent.click(element));
      expect(spyLog).toHaveBeenCalled();
    });
  });
});
