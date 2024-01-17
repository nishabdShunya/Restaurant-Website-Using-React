import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "./Cart";

beforeEach(() => {
  const overlaysElement = document.createElement("div");
  overlaysElement.setAttribute("id", "overlays");
  document.body.appendChild(overlaysElement);
});

test("Cart component is rendered as expected", () => {
  render(<Cart />);

  const sushiElement = screen.getByText(/Sushi/i);
  const totalText = screen.getByText(/Total Amount/i);
  const closeButton = screen.getByText(/Close/i);
  const orderButton = screen.getByText(/Order/i);

  expect(sushiElement).toBeInTheDocument();
  expect(totalText).toBeInTheDocument();
  expect(closeButton).toBeInTheDocument();
  expect(orderButton).toBeInTheDocument();
});
