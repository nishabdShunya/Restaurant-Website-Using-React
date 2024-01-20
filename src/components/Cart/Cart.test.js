import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "./Cart";

beforeAll(() => {
  const portalRoot = document.createElement("div");
  portalRoot.setAttribute("id", "overlays");
  document.body.appendChild(portalRoot);
});

test("clicking on Close button hides the cart", () => {
  const closeCartMock = jest.fn();
  render(<Cart onCloseCart={closeCartMock} />);
  expect(screen.getByText("Sushi")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Close"));
  expect(closeCartMock).toHaveBeenCalledTimes(1);
});
