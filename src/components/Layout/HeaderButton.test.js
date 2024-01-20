/* eslint-disable testing-library/no-node-access */
import React, { useContext } from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderButton from "./HeaderButton";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

test("Header cart button shows total quantity as expected", () => {
  const sampleItems = [
    { id: 1, name: "Item 1", quantity: 2 },
    { id: 2, name: "Item 2", quantity: 3 },
  ];

  useContext.mockReturnValue({
    items: sampleItems,
  });

  render(<HeaderButton onClick={() => {}} />);

  const badge = document.querySelector(".badge");
  expect(badge).toHaveTextContent("5");
});
