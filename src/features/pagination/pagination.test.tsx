/* eslint-disable testing-library/no-node-access */
import { render, screen, fireEvent } from "@testing-library/react";
import UsersList from "./pagination";

describe("UsersList", () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "555-555-5555",
    },
  ];

  const apiResponse = {
    page: 1,
    perPage: 10,
    total: 2,
    totalPages: 1,
    data: users,
  };

  beforeAll(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(apiResponse),
    } as unknown as Response);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("displays a list of users and pagination buttons", async () => {
    render(<UsersList />);
    const previousButton = screen.getByRole("button", { name: /previous/i });
    const nextButton = screen.getByRole("button", { name: /next/i });
    const usersList = await screen.findByRole("list");
    expect(usersList.children.length).toEqual(users.length);
    expect(previousButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });

  it('enables the "Next" button when there are more pages', async () => {
    const totalPages = 2;
    const apiResponseWithMorePages = { ...apiResponse, totalPages };
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(apiResponseWithMorePages),
    } as unknown as Response);
    render(<UsersList />);
    const previousButton = screen.getByRole("button", { name: /previous/i });
    const nextButton = screen.getByRole("button", { name: /next/i });
    await screen.findByRole("list");
    expect(previousButton).toBeDisabled();
    expect(nextButton).toBeEnabled();
    fireEvent.click(nextButton);
    expect(previousButton).toBeEnabled();
    expect(nextButton).toBeDisabled();
  });

  it("loads the previous or next page of users when the corresponding button is clicked", async () => {
    const totalPages = 2;
    const apiResponseWithMorePages = { ...apiResponse, totalPages };
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(apiResponseWithMorePages),
    } as unknown as Response);
    render(<UsersList />);
    const previousButton = screen.getByRole("button", { name: /previous/i });
    const nextButton = screen.getByRole("button", { name: /next/i });
    await screen.findByRole("list");
    fireEvent.click(nextButton);
    const usersList = await screen.findByRole("list");
    expect(usersList.children.length).toEqual(users.length);
    fireEvent.click(previousButton);
    const updatedUsersList = await screen.findByRole("list");
    expect(updatedUsersList.children.length).toEqual(users.length);
  });
});
