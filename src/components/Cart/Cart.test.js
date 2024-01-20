import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "./Cart";

beforeAll(() => {
  const portalRoot = document.createElement("div");
  portalRoot.setAttribute("id", "overlays");
  document.body.appendChild(portalRoot);
});

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

const sampleItems = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

beforeEach(() => {
  useContext.mockReturnValue({
    items: sampleItems,
  });
});

test("Cart items are rendered as expected", () => {
  render(<Cart onCloseCart={() => {}} />);

  sampleItems.forEach((item) => {
    const itemNameElement = screen.getByText(item.name);
    expect(itemNameElement).toBeInTheDocument();
  });
});
