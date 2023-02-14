/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "./pagination";

test("renders pagination component", () => {
  render(<Pagination items={[]} pageSize={0} />);
});
describe("pagination component", () => {
  const items = Array.from({ length: 15 }, (_, index) => `Item ${index}`);
  const pageSize = 5;

  it("should render items on first page", () => {
    const { getByText } = render(
      <Pagination items={items} pageSize={pageSize} />
    );

    expect(getByText("Item 0")).toBeInTheDocument();
    expect(getByText("Item 1")).toBeInTheDocument();
    expect(getByText("Item 2")).toBeInTheDocument();
    expect(getByText("Item 3")).toBeInTheDocument();
    expect(getByText("Item 4")).toBeInTheDocument();
    expect(() => getByText("Item 5")).toThrow();
  });

  it("should render items on second page when next page button is clicked", () => {
    const { getByText } = render(
      <Pagination items={items} pageSize={pageSize} />
    );

    const nextPageButton = getByText("2");
    fireEvent.click(nextPageButton);

    expect(() => getByText("Item 0")).toThrow();
    expect(() => getByText("Item 1")).toThrow();
    expect(() => getByText("Item 2")).toThrow();
    expect(() => getByText("Item 3")).toThrow();
    expect(() => getByText("Item 4")).toThrow();
    expect(getByText("Item 5")).toBeInTheDocument();
    expect(getByText("Item 6")).toBeInTheDocument();
    expect(getByText("Item 7")).toBeInTheDocument();
    expect(getByText("Item 8")).toBeInTheDocument();
    expect(getByText("Item 9")).toBeInTheDocument();
    expect(() => getByText("Item 10")).toThrow();
  });
});
